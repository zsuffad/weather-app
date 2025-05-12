import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import {BasicWeatherWidget} from './basic-weather-widget.js';
import {DailyForecastWidget} from './daily-forecast-widget.js';

export class AppShell extends WeatherLitElement {

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
        this.dailyForecastData = [];
        this.weatherData = {};
    }

    static get scopedElements() {
        return {
            'basic-weather-widget': BasicWeatherWidget,
            'daily-forecast-widget': DailyForecastWidget,
        };
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
                padding: 16px;
                max-width: 800px;
                margin: 0 auto;
            }
            header {
                background-color: #f3f3f3;
                color: black;
                padding: 16px;
                border-radius: 8px;
                margin-bottom: 16px;
            }
            main {
                padding: 16px;
                background-color: #f5f5f5;
                border-radius: 8px;
            }
        `;
    }

    async connectedCallback() {
        super.connectedCallback();
    }

    async firstUpdated() {
        this.fetchAndUpdateWeather();
    }

    async fetchAndUpdateWeather() {
        const weatherData = await this.fetchWeatherData();

        if (weatherData) {
            console.log('weatherData', weatherData);
            this.weatherData = weatherData;

            // Use requestAnimationFrame to ensure DOM is fully rendered
            requestAnimationFrame(() => {
                // Update basic weather widget
                const weatherWidget = /** @type {BasicWeatherWidget} */ (this.shadowRoot.querySelector('basic-weather-widget'));
                if (weatherWidget) {
                    weatherWidget.temperature = weatherData.current_weather.temperature;
                    weatherWidget.temperatureUnit = weatherData.current_weather_units.temperature;
                    weatherWidget.windSpeed = weatherData.current_weather.windspeed;
                    weatherWidget.windSpeedUnit = weatherData.current_weather_units.windspeed;
                    weatherWidget.weatherCode = weatherData.current_weather.weathercode;
                    weatherWidget.loading = false;
                } else {
                    console.error('Basic weather widget not found in the shadow DOM');
                }

                // Update daily forecast widget
                const forecastWidget = /** @type {DailyForecastWidget} */ (this.shadowRoot.querySelector('daily-forecast-widget'));
                if (forecastWidget && weatherData.daily) {
                    const dailyData = [];
                    for (let i = 0; i < weatherData.daily.time.length; i++) {
                        dailyData.push({
                            date: weatherData.daily.time[i],
                            tempMax: weatherData.daily.temperature_2m_max[i],
                            tempMin: weatherData.daily.temperature_2m_min[i],
                            weathercode: weatherData.daily.weathercode[i]
                        });
                    }
                    // this.dailyForecastData = dailyData;
                    this.dailyForecastData = [...dailyData];
                    console.log('this.dailyForecastData', this.dailyForecastData);

                    // Optional: Directly set the forecast data on the widget
                    const forecastWidget = /** @type {DailyForecastWidget} */ (this.shadowRoot.querySelector('daily-forecast-widget'));
                    if (forecastWidget) {
                        forecastWidget.forecastData = this.dailyForecastData;
                    } else {
                        console.error('Daily forecast widget not found in the shadow DOM');
                    }
                } else {
                    console.error('Daily forecast widget not found in the shadow DOM');
                }
            });
        }
    }

    // async update(changedProperties) {
    //     console.log('changedProperties', changedProperties);
    //     if (changedProperties.has('weatherData')) {
    //         console.log('[update] this.weatherData', this.weatherData);
    //     }
    //     if (changedProperties.has('dailyForecastData')) {
    //         console.log('[update] this.dailyForecastData', this.dailyForecastData);
    //     }
    // }

    async fetchWeatherData() {
        const latitude = 47.0707; // Graz
        const longitude = 15.4395;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('API request failed');
            return response.json();
        } catch (error) {
            console.log('Error fetching weather data:', error);
        }
    }

    render() {
        return html`
            <header>
                <h1>Weather Graz</h1>
            </header>
            <main>
                <p>Current weather conditions:</p>
                <basic-weather-widget
                    class="basic-weather-widget"
                    id="basic-weather-widget"></basic-weather-widget>
                <daily-forecast-widget
                    class="daily-forecast-widget"
                    id="daily-forecast-widget"
                    .forecastData=${this.dailyForecastData}></daily-forecast-widget>
            </main>
        `;
    }
}

customElements.define('app-shell', AppShell);
