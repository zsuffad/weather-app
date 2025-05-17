import {LitElement} from 'lit';
import {getAllIcons} from '../svg-icons/weather-icons.js';

export default class WeatherLitElement extends LitElement {
    constructor() {
        super();
        this.weatherData = {};
        this.allWeatherIcons = getAllIcons(); // usage: clearDayIcon = this.allWeatherIcons.clearDay
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
                return isDayTime ? this.allWeatherIcons.clearDay : this.allWeatherIcons.clearNight; // Clear sky
            case weatherCode == 1:
                return isDayTime ? this.allWeatherIcons.cloudy1Day : this.allWeatherIcons.cloudy1Night; // Partly cloudy
            case weatherCode == 2:
                return isDayTime ? this.allWeatherIcons.cloudy2Day : this.allWeatherIcons.cloudy2Night;
            case weatherCode == 3:
                return isDayTime ? this.allWeatherIcons.cloudy3Day : this.allWeatherIcons.cloudy3Night;
            case weatherCode >= 45 && weatherCode <= 48:
                return this.allWeatherIcons.fogDay; // Fog
            case weatherCode >= 51 && weatherCode <= 67:
                return this.allWeatherIcons.rainy1Day; // Rain
            case weatherCode >= 71 && weatherCode <= 77:
                return this.allWeatherIcons.snowy1Day; // Snow
            case weatherCode >= 80 && weatherCode <= 82:
                return this.allWeatherIcons.snowy3Day; // Rain showers
            case weatherCode >= 85 && weatherCode <= 86:
                return this.allWeatherIcons.snowy3; // Snow showers
            case weatherCode >= 95 && weatherCode <= 99:
                return this.allWeatherIcons.thunderstorms; // Thunderstorm
            default:
                return this.allWeatherIcons.clearDay; // Default
        }
    }
}
