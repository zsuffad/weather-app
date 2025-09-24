import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import ApexCharts from 'apexcharts';
import {commonStyles} from '../styles/common-styles';

/**
 * RainChartWidget component for displaying daily weather forecast
 */
export class RainChartWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            weatherData: {type: Object},
            currentLocation: {type: Object},
            dayShift: {type: Number},
            RainChartData: {type: Array},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.dayShift = 0;
        this.weatherData = {};
        this.RainChartData = [];
    }

    firstUpdated() {
        this.loading = true;
    }

    updated(changedProperties) {
        if (changedProperties.has('weatherData') && this.weatherData && Object.keys(this.weatherData).length > 0) {
            this.renderRainChart();
            this.renderRainProbChart();
            this.loading = false;
        }
        if (changedProperties.has('dayShift')) {
            this.renderRainChart();
            this.renderRainProbChart();
            this.loading = false;
        }
    }

    renderRainChart() {
        if (!this.weatherData.hourly) {
            return;
        }
        const rainData = [];
        // Get one day data and get every 3 hour data

        // @TODO put this into a function
        const lastIndex = this.weatherData.hourly.time.length;
        this.dayShift = this.dayShift < 0 ? 0 : this.dayShift;
        const from = this.dayShift * 24;
        let to = this.dayShift * 24 + 24;
        to = to > lastIndex ? lastIndex : to;
        // @TODO put this into a function END

        let rain_avg = 0;
        for (let i = from; i < to; i += 1) {
            rain_avg += this.weatherData.hourly.rain[i];

            if (i % 3 === 0) {
                rain_avg = rain_avg / 3;
                rainData.push({
                    time: this.weatherData.hourly.time[i],
                    rain: this.weatherData.hourly.rain[i],
                });
                rain_avg = 0;
            }
        }
        const chartElement = this._('#rain-chart');
        if (chartElement) {
            // Reset element
            while (chartElement.firstChild) {
                chartElement.removeChild(chartElement.firstChild);
            }

            let times = [];
            let rain = [];
            rainData.forEach((forecast) => {
                times.push(new Date(forecast.time).getHours());
                rain.push(Number(forecast.rain));
            });

            // @TODO: create a default options object
                chart: {
                    type: 'bar',
                    height: '30px',
                    sparkline: {
                        enabled: true,
                    },
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                series: [
                    {
                        name: 'rain %',
                        data: rain,
                        color: '#392bcf',
                    },
                ],
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [0, 1],
                    formatter: function (val, opts) {
                        return Math.round(val);
                    },
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: -6,
                    style: {
                        fontSize: '20px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: ['#666666'],
                    },
                    background: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: times,
                    type: 'category',
                    lines: {
                        show: true,
                    },
                    tickPlacement: 'between',
                    labels: {
                        style: {
                            colors: '#f5f5f5',
                            fontSize: '18px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                        formatter: (value) => {
                            return value + 'h';
                        },
                    },
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    stepSize: 10,
                    labels: {
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        formatter: (value) => {
                            return '';
                        },
                    },
                },
                tooltip: {
                    enabled: false,
                },
                grid: {
                    show: true,
                    borderColor: '#fff',
                    strokeDashArray: 0,
                    position: 'back',
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                    column: {
                        colors: ['#FDFDFD', '#F1F1F1'],
                        opacity: 1,
                    },
                    padding: {
                        top: 0,
                        right: 10,
                        bottom: 0,
                        left: 10,
                    },
                },
            };

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }
    }

    renderRainProbChart() {
        if (!this.weatherData.hourly) {
            return;
        }
        // @TODO put this into a function
        const lastIndex = this.weatherData.hourly.time.length;
        this.dayShift = this.dayShift < 0 ? 0 : this.dayShift;
        const from = this.dayShift * 24;
        let to = this.dayShift * 24 + 24;
        to = to > lastIndex ? lastIndex : to;
        // @TODO put this into a function END

        const rainProbData = [];
        // Get one day data and get every 3 hour data
        let precipitation_probability_avg = 0;
        for (let i = from; i < to; i += 1) {
            precipitation_probability_avg += this.weatherData.hourly.precipitation_probability[i];

            if (i % 3 === 0) {
                precipitation_probability_avg = precipitation_probability_avg / 3;
                rainProbData.push({
                    time: this.weatherData.hourly.time[i],
                    precipitation_probability: precipitation_probability_avg,
                });
                precipitation_probability_avg = 0;
            }
        }

        const chartElement = this._('#rain-prob-chart');
        if (chartElement) {
            // Reset element
            while (chartElement.firstChild) {
                chartElement.removeChild(chartElement.firstChild);
            }

            let times = [];
            let precipitation_probability = [];
            rainProbData.forEach((forecast) => {
                times.push(new Date(forecast.time).getHours());
                precipitation_probability.push(Number(forecast.precipitation_probability));
            });

            // @TODO: create a default options object
            var options = {
                chart: {
                    type: 'bar',
                    height: '40px',
                    sparkline: {
                        enabled: true,
                    },
                    parentHeightOffset: 0,
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                series: [
                    {
                        name: 'rain %',
                        data: precipitation_probability,
                        color: '#392bcf',
                    },
                ],
                dataLabels: {
                    enabled: true,
                    enabledOnSeries: [0, 1],
                    formatter: function (val, opts) {
                        return Math.round(val);
                    },
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: -6,
                    style: {
                        fontSize: '20px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: ['#666666'],
                    },
                    background: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: times,
                    type: 'category',
                    lines: {
                        show: true,
                    },
                    tickPlacement: 'between',
                    labels: {
                        style: {
                            colors: '#f5f5f5',
                            fontSize: '18px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                        formatter: (value) => {
                            return value + 'h';
                        },
                    },
                },
                yaxis: {
                    min: 0,
                    max: 100,
                    stepSize: 10,
                    labels: {
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        formatter: (value) => {
                            return '';
                        },
                    },
                },
                tooltip: {
                    enabled: false,
                },
                grid: {
                    show: true,
                    borderColor: '#fff',
                    strokeDashArray: 0,
                    position: 'back',
                    yaxis: {
                        lines: {
                            show: false,
                        },
                    },
                    column: {
                        colors: ['#FDFDFD', '#F1F1F1'],
                        opacity: 1,
                    },
                    padding: {
                        top: 0,
                        right: 10,
                        bottom: 0,
                        left: 10,
                    },
                },
            };

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }
    }

    static get styles() {
        // language=css
        return [
            commonStyles,
            css`
                .rain-chart-container {
                    margin-top: 0;
                }
                .chart {
                    padding-left: 20px;
                    position: relative;
                }
                .chart--rain:not(:empty):before {
                    display: block;
                    content: '💧';
                    position: absolute;
                    left: 0;
                    top: 50%;
                }
                .chart--rain-probability:not(:empty):before {
                    display: block;
                    content: '%';
                    position: absolute;
                    left: 0;
                    top: 50%;
                }
            `,
        ];
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading rain chart...</p>
            `;
        }

        return html`
            <div id="rain-chart-container" class="rain-chart-container">
                <div id="rain-chart" class="chart chart--rain"></div>
                <div id="rain-prob-chart" class="chart chart--rain-probability"></div>
            </div>
        `;
    }
}

customElements.define('rain-chart-widget', RainChartWidget);
