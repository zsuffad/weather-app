import {html, css, unsafeCSS} from 'lit';
import WeatherLitElement from './weather-lit-element';
import {windIcon} from '../svg-icons/weather-icons.js';
import {weatherIconsStyles, weatherIconsWindStyles} from '../styles/icon-styles.js';
import {commonStyles} from '../styles/common-styles';

/**
 * BasicWeatherWidget component for displaying current weather information
 */
export class BasicWeatherWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},

            weatherData: {type: Object},

            temperature: {type: Number},
            temperatureUnit: {type: String},
            windSpeed: {type: Number},
            windSpeedUnit: {type: Object},
            weatherCode: {type: Number},
        };
    }

    constructor() {
        super();
        /** @type {boolean} */
        this.loading = true;

        /** @type {object} */
        this.weatherData = {};

        /** @type {number|null} */
        this.temperature = null;

        /** @type {string|null} */
        this.temperatureUnit = null;

        /** @type {number|null} */
        this.windSpeed = null;

        /** @type {string|import('lit').TemplateResult|null} */
        this.windSpeedUnit = null;

        /** @type {number|null} */
        this.weatherCode = null;
    }

    connectedCallback() {
        super.connectedCallback();

        // Check if the font is already available
        document.fonts.ready.then(() => {
            this.fontLoaded = document.fonts.check('1em weathericons');
            console.log('Font check in child:', this.fontLoaded);
            this.requestUpdate();
        });

        // Listen for font-loaded event from parent
        this.addEventListener('font-loaded', (e) => {
            console.log('Font loaded event received in child:', e.detail.fontFamily);
            this.fontLoaded = true;
            this.requestUpdate();
        });
    }

    firstUpdated() {}

    updated(changedProperties) {
        if (changedProperties.has('weatherData') && this.weatherData && Object.keys(this.weatherData).length > 0) {
            // Move chart rendering logic here for forecastData changes
            console.log('[updated] this.weatherData', this.weatherData);
            this.processWeatherData();
            this.loading = false;
        }
    }

    processWeatherData() {
        if (Object.keys(this.weatherData).length > 0) {
            this.temperature = Math.round(this.weatherData.current_weather.temperature);
            this.temperatureUnit = this.weatherData.current_weather_units.temperature;
            this.windSpeed = Math.round(this.weatherData.current_weather.windspeed);
            this.windSpeedUnit =
                this.weatherData.current_weather_units.windspeed === 'km/h'
                    ? html`
                          <div class="fraction-unit">
                              <span class="top">km</span>
                              <span class="bottom">h</span>
                          </div>
                      `
                    : this.weatherData.current_weather_units.windspeed;
            this.windDirection = this.weatherData.current_weather.winddirection;
            this.weatherCode = this.weatherData.current_weather.weathercode;
            this.loading = false;
        }
    }

    /**
     * Get weather description based on weather code
     * @returns {string} Weather description
     */
    getWeatherDescription() {
        // Simple mapping of weather codes to descriptions
        switch (true) {
            case this.weatherCode === 0:
                return 'Clear sky';
            case this.weatherCode >= 1 && this.weatherCode <= 3:
                return 'Partly cloudy';
            case this.weatherCode >= 45 && this.weatherCode <= 48:
                return 'Foggy';
            case this.weatherCode >= 51 && this.weatherCode <= 67:
                return 'Rainy';
            case this.weatherCode >= 71 && this.weatherCode <= 77:
                return 'Snowy';
            case this.weatherCode >= 80 && this.weatherCode <= 82:
                return 'Rain showers';
            case this.weatherCode >= 85 && this.weatherCode <= 86:
                return 'Snow showers';
            case this.weatherCode >= 95 && this.weatherCode <= 99:
                return 'Thunderstorm';
            default:
                return 'Unknown';
        }
    }

    static get styles() {
        // language=css
        return [
            unsafeCSS(weatherIconsStyles),
            unsafeCSS(weatherIconsWindStyles),
            commonStyles,
            css`
                :host {
                    display: block;
                    padding: 16px;
                    background-color: white;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }
                .weather-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                .weather-overview {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                }
                .weather-icon {
                    svg {
                        width: 100%;
                        height: auto;
                    }
                }
                .weather-info {
                    display: flex;
                    flex-direction: column;
                    gap: 1em;
                }
                .temperature {
                    font-size: 6rem;
                    line-height: 5rem;
                    font-weight: bold;
                    margin: 0;
                    display: flex;
                    gap: 0;
                    align-items: flex-start;

                    .unit {
                        line-height: 3rem;
                        font-size: 2rem;
                    }
                }
                .windspeed {
                    font-size: 3rem;
                    font-weight: bold;
                    margin: 0;
                    display: flex;
                    align-items: center;
                    gap: 10px;

                    .unit {
                        line-height: 3rem;
                        font-size: 1rem;
                    }

                    .wi {
                        transform-origin: center;
                        height: 3rem;
                    }
                }
                .fraction-unit {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                    line-height: 1em;
                    align-items: center;

                    .top {
                        border-bottom: 1px solid;
                    }
                    .bottom {
                    }
                }
                .description {
                    margin: 4px 0 0;
                    color: #666;
                }
                .loading {
                    font-style: italic;
                    color: #999;
                }
            `,
        ];
    }

    windDirectionToIcon(direction) {
        const iconNames = [
            'towards-0-deg',
            'towards-23-deg',
            'towards-45-deg',
            'towards-68-deg',
            'towards-90-deg',
            'towards-113-deg',
            'towards-135-deg',
            'towards-158-deg',
            'towards-180-deg',
            'towards-203-deg',
            'towards-225-deg',
            'towards-248-deg',
            'towards-270-deg',
            'towards-293-deg',
            'towards-313-deg',
            'towards-336-deg',
        ];

        const iconIndex = Math.round(direction / 22.5);
        return html`
            <i class="wi wi-wind ${iconNames[iconIndex]}"></i>
        `;
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        return html`
            <div class="weather-container">
                <div class="weather-info">
                    <div class="temperature">
                        ${this.temperature}
                        <span class="temperature-unit unit">${this.temperatureUnit}</span>
                    </div>
                    <div class="windspeed">
                        ${windIcon} ${this.windSpeed}
                        <span class="windspeed-unit unit">${this.windSpeedUnit}</span>
                        ${this.windDirectionToIcon(this.windDirection)}
                    </div>
                </div>
                <div class="weather-overview">
                    <div class="weather-icon">${this.getWeatherIcon(this.weatherCode)}</div>
                    <div class="description">${this.getWeatherDescription()}</div>
                </div>
            </div>
        `;
    }
}

customElements.define('basic-weather-widget', BasicWeatherWidget);
