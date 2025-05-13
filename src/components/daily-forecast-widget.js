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
            forecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.forecastData = [];
    }

    // async update(changedProperties) {
    //     console.log('[DAILY] changedProperties', changedProperties);
    //     if (changedProperties.has('forecastData')) {
    //         if (this.forecastData && this.forecastData.length > 0) {
    //             // this.loading = false;
    //             // this.renderForecastChart();
    //         }
    //     }
    //     super.update(changedProperties);
    // }

    firstUpdated() {
        // Render the chart
        this.renderForecastChart();
        this.loading = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('forecastData') && this.forecastData && this.forecastData.length > 0) {
            // Move chart rendering logic here for forecastData changes
            this.renderForecastChart();
            this.loading = false;
        }
    }

    renderForecastChart() {
        const chartElement = this._('#daily-forecast-chart');
        if (chartElement) {
            while (chartElement.firstChild) {
                chartElement.removeChild(chartElement.firstChild);
            }

            console.log(`[${(new Error().stack.split("\n")[1].trim().split(" ")[1] || "anonymous")}] this.forecastData`, this.forecastData);

            let dates = [];
            let tempMax = [];
            let tempMin = [];
            this.forecastData.forEach((forecast) => {
                dates.push(new Date(forecast.date).toLocaleDateString('en-us', { day:"numeric", month:"short"}));
                tempMax.push(Number(forecast.tempMax).toFixed(1));
                tempMin.push(Number(forecast.tempMin).toFixed(1));
            });

            var options = {
                chart: {
                    type: 'line',
                    toolbar: {
                        show: false,
                    },
                    zoom: {
                        enabled: false,
                    }
                },
                stroke: {
                    curve: 'smooth',
                },
                series: [
                    {
                        name: 'max',
                        data: tempMax,
                        color: "#EE0011",
                    },
                    {
                        name: 'min',
                        data: tempMin,
                        color: "#1100EE",
                    }
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
                    enabledOnSeries: [0,1],
                    formatter: function (val, opts) {
                        return Math.round(val);
                    },
                    textAnchor: 'middle',
                    distributed: false,
                    offsetX: 0,
                    offsetY: -6,
                    style: {
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: undefined
                    },
                    background: {
                        enabled: false,
                    }
                },
                xaxis: {
                    categories: dates
                },
                yaxis: {
                    min: 0,
                    max: 30,
                    labels: {
                        style: {
                            colors: [],
                            fontSize: '12px',
                            fontFamily: 'Helvetica, Arial, sans-serif',
                            fontWeight: 400,
                            cssClass: 'apexcharts-yaxis-label',
                        },
                        formatter: (value) => { return Number(value).toFixed(0); },
                    },
                },
                tooltip: {
                    enabled: false,
                }
            };

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }

    }

    static get styles() {
        // language=css
        return css`
        `;
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        return html`
            <div id="daily-forecast-container">
                <div id="daily-forecast-chart"></div>
            </div>
        `;
    }
}

customElements.define('daily-forecast-widget', DailyForecastWidget);
