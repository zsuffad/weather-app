import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import ApexCharts from 'apexcharts';
import {commonStyles} from '../styles/common-styles';

/**
 * WeeklyForecastWidget component for displaying daily weather forecast
 */
export class WeeklyForecastWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            weatherData: {type: Object},
            weeklyForecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.weatherData = {};
        this.weeklyForecastData = [];
    }

    firstUpdated() {
        // Render the chart
        this.renderForecastChart();
        this.loading = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('weatherData') && this.weatherData && Object.keys(this.weatherData).length > 0) {
            if (this.weatherData.daily) {
                const weeklyData = [];
                for (let i = 0; i < this.weatherData.daily.time.length; i++) {
                    weeklyData.push({
                        date: new Date(this.weatherData.daily.time[i]).toLocaleDateString('en-us', {
                            weekday: 'short',
                        }),
                        tempMax: Number(this.weatherData.daily.temperature_2m_max[i]).toFixed(1),
                        tempMin: Number(this.weatherData.daily.temperature_2m_min[i]).toFixed(1),
                        weathercode: this.weatherData.daily.weathercode[i],
                    });
                }
                this.weeklyForecastData = [...weeklyData];
            }
            // Move chart rendering logic here for forecastData changes
            this.renderForecastChart();
            this.loading = false;
        }
    }

    renderForecastChart() {
        const chartElement = this._('#weekly-forecast-chart');
        if (chartElement) {
            // Reset element
            while (chartElement.firstChild) {
                chartElement.removeChild(chartElement.firstChild);
            }

            let dates = [];
            let tempMax = [];
            let tempMin = [];
            this.weeklyForecastData.forEach((forecast) => {
                dates.push(forecast.date);
                tempMax.push(forecast.tempMax);
                tempMin.push(forecast.tempMin);
                // weathercode
            });

            var options = {
                chart: {
                    type: 'area',
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
                        data: tempMax,
                        color: '#EE0011',
                    },
                    {
                        name: 'min',
                        data: tempMin,
                        color: '#1100EE',
                    },
                ],
                fill: {
                    type: 'gradient',
                    gradient: {
                        shadeIntensity: 1,
                        opacityFrom: 0.7,
                        opacityTo: 0.9,
                        stops: [0, 90, 100],
                    },
                },
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
                        fontSize: '16px',
                        fontFamily: 'Helvetica, Arial, sans-serif',
                        fontWeight: 'bold',
                        colors: undefined,
                    },
                    background: {
                        enabled: false,
                    },
                },
                xaxis: {
                    categories: dates,
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
                        formatter: (value) => {
                            return Number(value).toFixed(0);
                        },
                    },
                },
                tooltip: {
                    enabled: false,
                },
            };

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }
    }

    static get styles() {
        // language=css
        return [commonStyles, css``];
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        return html`
            <div id="weekly-forecast-container">
                <span class="widget-title">Next 7 days</span>
                <div id="weekly-forecast-chart"></div>
            </div>
        `;
    }
}

customElements.define('weekly-forecast-widget', WeeklyForecastWidget);
