import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';

/**
 * BasicWeatherWidget component for displaying current weather information
 */
export class BasicWeatherWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},

            temperature: {type: Number},
            temperatureUnit: {type: String},

            windSpeed: {type: Number},
            windSpeedUnit: {type: String},

            weatherCode: {type: Number},
        };
    }

    constructor() {
        super();
        this.loading = true;

        this.temperature = null;
        this.temperatureUnit = null;

        this.windSpeed = null;
        this.windSpeedUnit = null;

        this.weatherCode = null;
    }

    /**
     * Get weather icon based on weather code
     * @returns {string} Weather icon character
     */
    getWeatherIcon() {
        // Simple mapping of weather codes to icons
        // https://open-meteo.com/en/docs/weather-codes
        switch (true) {
            case this.weatherCode === 0:
                return '☀️'; // Clear sky
            case this.weatherCode >= 1 && this.weatherCode <= 3:
                return '🌤️'; // Partly cloudy
            case this.weatherCode >= 45 && this.weatherCode <= 48:
                return '🌫️'; // Fog
            case this.weatherCode >= 51 && this.weatherCode <= 67:
                return '🌧️'; // Rain
            case this.weatherCode >= 71 && this.weatherCode <= 77:
                return '❄️'; // Snow
            case this.weatherCode >= 80 && this.weatherCode <= 82:
                return '🌦️'; // Rain showers
            case this.weatherCode >= 85 && this.weatherCode <= 86:
                return '🌨️'; // Snow showers
            case this.weatherCode >= 95 && this.weatherCode <= 99:
                return '⛈️'; // Thunderstorm
            default:
                return '🌡️'; // Default
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
        return css`
            :host {
                display: block;
                padding: 16px;
                background-color: white;
                border-radius: 8px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .weather-container {
                display: flex;
                align-items: center;
                gap: 16px;
            }
            .weather-icon {
                font-size: 2.5rem;
            }
            .weather-info {
                display: flex;
                flex-direction: column;
            }
            .temperature {
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0;
            }
            .description {
                margin: 4px 0 0;
                color: #666;
            }
            .loading {
                font-style: italic;
                color: #999;
            }
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
                <div class="weather-icon">${this.getWeatherIcon()}</div>
                <div class="weather-info">
                    <p class="temperature">${this.temperature} ${this.temperatureUnit}</p>
                    <p class="windspeed">${this.windSpeed} ${this.windSpeedUnit}</p>
                    <p class="description">${this.getWeatherDescription()}</p>
                </div>
            </div>
        `;
    }
}

customElements.define('basic-weather-widget', BasicWeatherWidget);
