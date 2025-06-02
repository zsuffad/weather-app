import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import {RainChartWidget} from './rain-chart-widget.js';
import {commonStyles} from '../styles/common-styles';
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
            currentLocation: {type: Object},
            dailyForecastData: {type: Array},
            backButtonDisabled: {type: Boolean},
            forwardButtonDisabled: {type: Boolean},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.weatherData = {};
        this.dailyForecastData = [];
        this.currentLocation = {};
        this.dayShift = 0;
        this.backButtonDisabled = true;
        this.forwardButtonDisabled = false;
    }

    static get scopedElements() {
        return {
            'rain-chart-widget': RainChartWidget,
        };
    }

    firstUpdated() {
        // Render the chart
        // this.renderForecastChart();
        // this.loading = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('weatherData') && this.weatherData && Object.keys(this.weatherData).length > 0) {
            if (this.weatherData.hourly) {
                const dailyData = [];
                // Get one day data and get every 3 hour data
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

    /**
     * Set next 24H forcast data and rerender the chart
     * @param {boolean} event go backward
     */
    setNextDay(event) {
        const triggerButton = event.target;
        const direction = triggerButton.getAttribute('data-direction');
        // Set change direction
        // @TODO don't increase dayShift if we are out of range.
        direction === 'back' ? this.dayShift-- : this.dayShift++;

        if (this.weatherData.hourly) {
            const lastIndex = this.weatherData.hourly.time.length;

            if (this.dayShift < 0) {
                this.dayShift = 0;
                this.backButtonDisabled = true;
                this.forwardButtonDisabled = false;
            } else if (this.dayShift > 6) {
                this.dayShift = 6;
                this.forwardButtonDisabled = true;
                this.backButtonDisabled = false;
            } else {
                this.forwardButtonDisabled = false;
                this.backButtonDisabled = false;
            }

            const from = this.dayShift * 24;
            let to = this.dayShift * 24 + 24;
            to = to > lastIndex ? lastIndex : to;

            const dailyData = [];
            // Get one day data and get every 3 hour data
            for (let i = from; i < to; i += 3) {
                dailyData.push({
                    time: this.weatherData.hourly.time[i],
                    temp: this.weatherData.hourly.temperature_2m[i],
                    weatherCode: this.weatherData.hourly.weathercode[i],
                });
            }
            if (dailyData.length) {
                this.dailyForecastData = [...dailyData];
                this.renderForecastChart();
            } else {
                // console.log('No more data. Maybe go back');
            }
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
                    parentHeightOffset: 0,
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
                        show: true,
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
                            return value + 'h';
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
                            show: true,
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

            // @TODO only do this if we are not in the future
            const timeZone = this.weatherData.timezone;
            const timeZoneNow = new Date(
                new Date().toLocaleString('en-US', {
                    timeZone: timeZone,
                }),
            );
            const currentHour = Number(timeZoneNow.getHours());
            const currentRow = Math.floor((currentHour / 24) * 8);

            options.grid.column.colors = [
                '#FDFDFD',
                '#F1F1F1',
                '#FDFDFD',
                '#F1F1F1',
                '#FDFDFD',
                '#F1F1F1',
                '#FDFDFD',
                '#F1F1F1',
            ];
            // @TODO set day/night columns
            // Accordingly like day/night icons 6-19h
            options.grid.column.colors[currentRow] = '#CACACA';

            var chart = new ApexCharts(chartElement, options);
            chart.render();
        }
    }

    static get styles() {
        // language=css
        return [
            css`
                ${commonStyles}

                .chart--daily-forcast {
                    padding-left: 20px;
                    position: relative;

                    &:not(:empty):before {
                        content: '🌡';
                        position: absolute;
                        left: 0;
                        top: 50%;
                        font-size: 26px;
                        color: #b00;
                    }
                }

                .daily-forecast-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    & > div {
                        flex-basis: 33%;
                    }
                }
                .header-date {
                    text-align: center;
                }
                .header-buttons {
                    display: flex;
                    gap: 8px;
                    justify-content: flex-end;
                }
                .prev-day-forecast-button,
                .next-day-forecast-button {
                    cursor: pointer;
                    display: flex;
                    border: 1px solid #a6a6a6;
                    color: #333;
                    width: 30px;
                    height: 30px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 4px;

                    &:disabled {
                        border: 1px solid var(--color-disabled);
                        color: var(--color-disabled);
                        opacity: 0.5;
                    }
                }
            `,
        ];
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        const currentTime = new Date();
        const displayDate = new Date(currentTime.setDate(currentTime.getDate() + this.dayShift));
        const timeZone = this.weatherData.timezone;
        const displayDayName = displayDate.toLocaleString('en-UK', {
            timeZone: timeZone,
            weekday: 'long',
        });
        const displayMonthDay = displayDate.toLocaleString('en-UK', {
            timeZone: timeZone,
            month: 'short',
            day: 'numeric',
        });

        return html`
            <div id="daily-forecast-container" class="widget-container">
                <div class="daily-forecast-header">
                    <div class="header-title">
                        <span class="widget-title">${this.dayShift === 0 ? 'Today' : displayMonthDay}</span>
                    </div>
                    <div class="header-date">
                        <span class="date-time">${displayDayName}</span>
                    </div>
                    <div class="header-buttons">
                        <button
                            class="prev-day-forecast-button"
                            title="Prev day"
                            aria-label="Prev day"
                            data-direction="back"
                            ?disabled=${this.backButtonDisabled}
                            @click=${this.setNextDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                        </button>
                        <button
                            class="next-day-forecast-button"
                            title="Next day"
                            aria-label="Next day"
                            data-direction="forward"
                            ?disabled=${this.forwardButtonDisabled}
                            @click=${this.setNextDay}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                        </button>
                    </div>
                </div>
                <div id="daily-forecast-chart" class="chart chart--daily-forcast"></div>
                <rain-chart-widget
                    class="rain-chart-widget"
                    id="rain-chart-widget"
                    .currentLocation=${this.currentLocation}
                    .dayShift=${this.dayShift}
                    .weatherData=${this.weatherData}></rain-chart-widget>
            </div>
        `;
    }
}

customElements.define('daily-forecast-widget', DailyForecastWidget);
