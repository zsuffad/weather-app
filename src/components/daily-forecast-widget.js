import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import ApexCharts from 'apexcharts';

/**
 * DailyForecastWidget component for displaying daily weather forecast
 */
export class DailyForecastWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            weatherData: {type: Object},
            dailyForecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.weatherData = {};
        this.dailyForecastData = [];
    }

    firstUpdated() {
        // Render the chart
        this.renderForecastChart();
        this.loading = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('weatherData') && this.weatherData && Object.keys(this.weatherData).length > 0) {
            if (this.weatherData.hourly) {
                const dailyData = [];
                // Get one day data
                for (let i = 0; i < 24; i += 3) {
                    dailyData.push({
                        time: this.weatherData.hourly.time[i],
                        temp: this.weatherData.hourly.temperature_2m[i],
                        weatherCode: this.weatherData.hourly.weathercode[i],
                    });
                }
                this.dailyForecastData = [...dailyData];
                console.log('this.dailyForecastData', this.dailyForecastData);
            }
            // Move chart rendering logic here for forecastData changes
            this.renderForecastChart();
            this.loading = false;
        }
    }

    renderForecastChart() {
        const chartElement = this._('#daily-forecast-chart');
        if (chartElement) {
            // Reset element
            while (chartElement.firstChild) {
                chartElement.removeChild(chartElement.firstChild);
            }

            let times = [];
            let temp = [];
            let weatherCode = [];
            this.dailyForecastData.forEach((forecast) => {
                times.push(new Date(forecast.time).getHours());
                temp.push(Number(forecast.temp).toFixed(1));
                weatherCode.push(this.getWeatherIcon(forecast.weatherCode));
            });

            const minTemp = Math.min(...temp);
            const maxTemp = Math.max(...temp);

            var options = {
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    },
                },
                stroke: {
                    curve: 'smooth',
                },
                series: [
                    {
                        name: 'max',
                        data: temp,
                        color: '#EE0011',
                    },
                ],
                markers: {
                    size: 6,
                    colors: undefined,
                    strokeColors: '#fff',
                    strokeWidth: 2,
                    strokeOpacity: 0.9,
                    strokeDashArray: 0,
                    fillOpacity: 1,
                },
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
                        colors: undefined,
                    },
                    background: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: times,
                    type: 'category',
                    lines: {
                        show: true
                    },
                    tickPlacement: 'between',
                    labels: {
                        style: {
                            colors: [],
                            fontSize: '18px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-xaxis-label',
                        },
                        formatter: (value) => {
                            return value  + 'h';
                        },
                    },
                },
                yaxis: {
                    min: minTemp > 0 ? 0 : minTemp - 10,
                    max: maxTemp + 10,
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
                            return Number(value).toFixed(0);
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
                            show: true
                        }
                    },
                    column: {
                        colors: ['#FDFDFD', '#F1F1F1'],
                        opacity: 1
                    },
                    padding: {
                        top: 0,
                        right: 10,
                        bottom: 0,
                        left: 10
                    },
                }
            };

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }
    }

    static get styles() {
        // language=css
        return css``;
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        return html`
            <div id="daily-forecast-container">
                <h2>Today</h2>
                <div id="daily-forecast-chart"></div>
            </div>
        `;
    }
}

customElements.define('daily-forecast-widget', DailyForecastWidget);
