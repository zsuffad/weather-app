import {LitElement} from 'lit';
// import {weatherIconsStyles, weatherIconsWindStyles} from '../styles/icon-styles.js';

export default class WeatherLitElement extends LitElement {
    constructor() {
        super();
    }

    static get properties() {
        return {
            ...super.properties,
        };
    }

    disconnectedCallback() {
        super.disconnectedCallback();
    }

    _(selector) {
        return this.shadowRoot === null ? this.querySelector(selector) : this.shadowRoot.querySelector(selector);
    }

    _a(selector) {
        return this.shadowRoot === null ? this.querySelectorAll(selector) : this.shadowRoot.querySelectorAll(selector);
    }

    firstUpdated(_changedProperties) {
        super.firstUpdated(_changedProperties);
    }

    update(changedProperties) {
        super.update(changedProperties);
    }

    // static get styles() {
    //     console.log('weatherIconsStyles', weatherIconsStyles);

    //     return [
    //         weatherIconsStyles,
    //         weatherIconsWindStyles
    //     ];
    // }

    /**
     * Get weather icon based on weather code
     * @returns {string} Weather icon character
     */
    getWeatherIcon(weatherCode) {
        // Simple mapping of weather codes to icons
        // https://open-meteo.com/en/docs/weather-codes
        switch (true) {
            case weatherCode === 0:
                return '☀️'; // Clear sky
            case weatherCode >= 1 && weatherCode <= 3:
                return '🌤️'; // Partly cloudy
            case weatherCode >= 45 && weatherCode <= 48:
                return '🌫️'; // Fog
            case weatherCode >= 51 && weatherCode <= 67:
                return '🌧️'; // Rain
            case weatherCode >= 71 && weatherCode <= 77:
                return '❄️'; // Snow
            case weatherCode >= 80 && weatherCode <= 82:
                return '🌦️'; // Rain showers
            case weatherCode >= 85 && weatherCode <= 86:
                return '🌨️'; // Snow showers
            case weatherCode >= 95 && weatherCode <= 99:
                return '⛈️'; // Thunderstorm
            default:
                return '🌡️'; // Default
        }
    }
}
