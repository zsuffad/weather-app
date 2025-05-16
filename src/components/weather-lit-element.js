import {LitElement} from 'lit';
import {
    clearDayIcon,
    clearNightIcon,
    cloudy1DayIcon,
    cloudy1NightIcon,
    cloudy2DayIcon,
    cloudy2NightIcon,
    cloudy3DayIcon,
    cloudy3NightIcon,
    fogDayIcon,
    rainy1DayIcon,
    snowy1DayIcon,
    snowy3DayIcon,
    snowy3Icon,
    thunderstormsIcon,
} from '../svg-icons/weather-icons.js';
// import {weatherIconsStyles, weatherIconsWindStyles} from '../styles/icon-styles.js';

export default class WeatherLitElement extends LitElement {
    constructor() {
        super();
        this.weatherData = {};
    }

    static get properties() {
        return {
            ...super.properties,
            currentLocation: {type: Object},
            weatherData: {type: Object},
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
     * @returns {import('lit').TemplateResult} Weather icon character
     */
    getWeatherIcon(weatherCode) {
        const timeZone = this.weatherData.timezone;
        const timeZoneNow = new Date(
            new Date().toLocaleString('en-US', {
                timeZone: timeZone,
            }),
        );
        const currentHour = Number(timeZoneNow.getHours());
        const isDayTime = currentHour > 5 && currentHour < 19 ? true : false;
        // Simple mapping of weather codes to icons
        // https://open-meteo.com/en/docs/weather-codes
        switch (true) {
            case weatherCode == 0:
                return isDayTime ? clearDayIcon : clearNightIcon; // Clear sky
            case weatherCode == 1:
                return isDayTime ? cloudy1DayIcon : cloudy1NightIcon; // Partly cloudy
            case weatherCode == 2:
                return isDayTime ? cloudy2DayIcon : cloudy2NightIcon;
            case weatherCode == 3:
                return isDayTime ? cloudy3DayIcon : cloudy3NightIcon;
            case weatherCode >= 45 && weatherCode <= 48:
                return fogDayIcon; // Fog
            case weatherCode >= 51 && weatherCode <= 67:
                return rainy1DayIcon; // Rain
            case weatherCode >= 71 && weatherCode <= 77:
                return snowy1DayIcon; // Snow
            case weatherCode >= 80 && weatherCode <= 82:
                return snowy3DayIcon; // Rain showers
            case weatherCode >= 85 && weatherCode <= 86:
                return snowy3Icon; // Snow showers
            case weatherCode >= 95 && weatherCode <= 99:
                return thunderstormsIcon; // Thunderstorm
            default:
                return clearDayIcon; // Default
        }
    }
}
