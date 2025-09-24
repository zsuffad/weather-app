import {html, css, render} from 'lit';
// import {classMap} from 'lit/directives/class-map.js';
import {commonStyles} from '../styles/common-styles';
import WeatherLitElement from './weather-lit-element';
import {BasicWeatherWidget} from './basic-weather-widget.js';
// import {RainChartWidget} from './rain-chart-widget.js';
import {DailyForecastWidget} from './daily-forecast-widget.js';
import {WeeklyForecastWidget} from './weekly-forecast-widget.js';
import {WeatherMapWidget} from './weather-map-widget.js';

export class AppShell extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            locationSettingsOpen: {type: Boolean},
            dailyForecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.weatherProxyBaseUrl = 'https://weather-app-proxy.zsuffa-david.workers.dev';
        this.openMeteoApiBaseUrl = `${this.weatherProxyBaseUrl}/v1/forecast`;
        this.currentLocation = JSON.parse(localStorage.getItem('currentLocation')) || {
            country: undefined,
            elevation: undefined,
            latitude: undefined,
            longitude: undefined,
            city: undefined,
            timezone: undefined,
        };
        // Change UI to set location enabled.
        this.dailyForecastData = [];
        this.locationSettingsOpen = this.currentLocation.city ? false : true;
    }

    static get scopedElements() {
        return {
            'basic-weather-widget': BasicWeatherWidget,
            'daily-forecast-widget': DailyForecastWidget,
            'weekly-forecast-widget': WeeklyForecastWidget,
            'weather-map-widget': WeatherMapWidget,
        };
    }

    async connectedCallback() {
        super.connectedCallback();
    }

    async updated(_changedProperties) {
        if (_changedProperties.has('currentLocation')) {
            this.fetchAndUpdateWeather();
        }

        super.updated(_changedProperties);
    }

    async firstUpdated() {
        this.fetchAndUpdateWeather();

        const searchInput = this._('#city-search-input');
        searchInput.addEventListener('focus', (event) => {
            // Clear searchbar on click
            event.target.value = '';
        });
        searchInput.addEventListener('blur', (event) => {
            // Reset value to searchbar if clicked outside
            if (event.target.value === '') {
                event.target.value = `${this.currentLocation.city} (${this.currentLocation.country})`;
            }
        });
    }

    async fetchAndUpdateWeather() {
        const weatherData = await this.fetchWeatherData();

        if (weatherData) {
            console.log('weatherData', weatherData);
            this.weatherData = weatherData;
        }
    }

    async fetchWeatherData() {
        // Graz
        const latitude = this.currentLocation.latitude;
        const longitude = this.currentLocation.longitude;

        // Object containing url parameters sent to the API
        const urlParams = {
            latitude: latitude,
            longitude: longitude,
            hourly: [
                'temperature_2m',
                'weathercode',
                'wind_speed_10m',
                'wind_direction_10m',
                'cloud_cover',
                'rain',
                'precipitation',
                'precipitation_probability',
                'apparent_temperature',
                'showers',
                'snowfall',
                'uv_index',
                'is_day',
                'sunshine_duration',
            ],
            daily: [
                'weathercode',
                'temperature_2m_max',
                'temperature_2m_min',
                'wind_speed_10m_max',
                'wind_gusts_10m_max',
                'winddirection_10m_dominant',
                'cloud_cover_mean',
                'rain_sum',
                'precipitation_sum',
                'precipitation_hours',
                'precipitation_probability_max',
                'uv_index_max',
                'sunshine_duration',
                'daylight_duration',
            ],
            timezone: 'auto',
            current_weather: true,
        };

        if (latitude && longitude) {
            const url = this.buildOpenMeteoUrl(urlParams);

            try {
                const response = await fetch(url);
                if (!response.ok) throw new Error('API request failed');
                return response.json();
            } catch (error) {
                // @TODO: add real notification here.
                console.log('Error fetching weather data:', error);
            }
        }
    }

    /**
     * Builds a URL for the Open-Meteo API using provided parameters
     * @param {object} params - The parameters object to convert to URL query parameters
     * @returns {string} - The complete URL with query parameters
     */
    buildOpenMeteoUrl(params) {
        // Create an array to hold the query parameters
        const queryParams = [];

        for (const [key, value] of Object.entries(params)) {
            // Handle arrays like hourly and daily parameters
            if (Array.isArray(value)) {
                queryParams.push(`${key}=${value.join(',')}`);
            }
            // Handle boolean values
            else if (typeof value === 'boolean') {
                queryParams.push(`${key}=${value}`);
            }
            // Handle regular string/number values
            else if (value !== undefined && value !== null) {
                queryParams.push(`${key}=${encodeURIComponent(value)}`);
            }
        }

        // Combine the base URL with the query parameters
        return `${this.openMeteoApiBaseUrl}?${queryParams.join('&')}`;
    }

    getLocation() {
        if ('geolocation' in navigator) {
            try {
                navigator.geolocation.getCurrentPosition((position) => {
                    console.log('position', position);
                    this.currentLocation = {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    };
                    // Store data to localStorage
                    localStorage.setItem('currentLocation', JSON.stringify(this.currentLocation));

                    this.fetchAndUpdateWeather();
                });
            } catch (e) {
                console.log(e);
            }
        } else {
            // @TODO: use notification here too
            alert("Your browser doesn't support geolocation. Enter your location city manually");
            return false;
        }
    }

    async fetchGeocodingApi(event) {
        try {
            let cityCharacters = event.target.value;
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityCharacters}&count=10&language=en&format=json`;
            const options = {
                method: 'GET',
            };
            const response = await fetch(url, options);
            const geoData = await response.json();
            if (geoData.results && geoData.results.length > 0) {
                let locationList = [];
                geoData.results.forEach((location) => {
                    locationList.push(html`
                        <div
                            class="location"
                            @click="${() => {
                                this.selectLocation(location);
                            }}">
                            <div class="location-name">${location.name} (${location.country})</div>
                            <div class="add-to-favorite">★</div>
                        </div>
                    `);
                });
                const resultsList = this._('.location-results');
                // @TODO: make this a property
                resultsList.classList.add('enabled');
                render(locationList, resultsList);
            }
        } catch (e) {
            console.log('Geocoding API fetch failed: ', e);
        }
    }

    selectLocation(location) {
        this.currentLocation = {
            country: location.country,
            elevation: location.elevation,
            latitude: location.latitude,
            longitude: location.longitude,
            city: location.name,
            timezone: location.timezone,
        };

        const newInputValue = `${this.currentLocation.city} (${this.currentLocation.country})`;
        this._('#city-search-input').value = newInputValue;

        localStorage.setItem('currentLocation', JSON.stringify(this.currentLocation));

        const resultsList = this._('.location-results');
        // @TODO: make this a property
        resultsList.classList.remove('enabled');
    }

    renderSetCityWidget() {
        return html`
            <div class="add-city">
                <input
                    id="city-search-input"
                    class="city-search-input"
                    type="text"
                    @input="${(event) => {
                        if (event.target.value.length >= 2) {
                            this.fetchGeocodingApi(event);
                        }
                    }}"
                    value="${this.currentLocation.city
                        ? `${this.currentLocation.city} (${this.currentLocation.country})`
                        : ''}"
                    placeholder="Enter City Name" />
                <button class="set-gps-position-button" @click="${this.getLocation}">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round">
                        <circle cx="12" cy="10" r="3" />
                        <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
                    </svg>
                </button>

                <div class="location-results"></div>
            </div>
        `;
    }

    static get styles() {
        // language=css
        return [
            commonStyles,
            css`
                :host {
                    display: block;
                    padding: 1em;
                    max-width: 400px;
                    min-width: 340px;
                    margin: 0 auto;
                }
                header {
                    background-color: #f3f3f3;
                    color: black;
                    padding: 1em;
                    border-radius: 0.25em;
                    margin-bottom: 1em;
                }
                main {
                    padding: 1em;
                    background-color: #f5f5f5;
                    border-radius: 0.25em;
                }
                .location-results {
                    display: none;
                    background: white;
                    width: 100%;
                    z-index: 99;
                    flex-direction: column;
                    gap: 5px;
                    cursor: pointer;
                    position: absolute;
                    top: calc(var(--input-height) + 13px);
                    box-shadow: 1px 1px 20px 6px rgba(0, 0, 0, 0.3);

                    &.enabled {
                        display: flex;
                    }
                }
                .location {
                    padding: 9px;
                    display: flex;
                    justify-content: space-between;
                    &:hover {
                        background: rgba(0, 0, 0, 0.24);
                    }
                }
                .add-city {
                    position: relative;
                }
                .city-search-input {
                    height: var(--input-height);
                    padding: 0.25rem 0.5rem;
                    width: calc(100% - 0.75rem);
                }
                .set-gps-position-button {
                    width: var(--input-height);
                    height: var(--input-height);
                    position: absolute;
                    right: 0;
                    top: 0.25rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            `,
        ];
    }

    render() {
        return html`
            <header>
                <div class="location-settings">
                    <div class="search-location">${this.renderSetCityWidget()}</div>
                </div>
            </header>
            ${this.currentLocation.city
                ? html`
                      <main>
                          <basic-weather-widget
                              class="basic-weather-widget"
                              id="basic-weather-widget"
                              .currentLocation=${this.currentLocation}
                              .weatherData=${this.weatherData}></basic-weather-widget>
                          <daily-forecast-widget
                              class="daily-forecast-widget"
                              id="daily-forecast-widget"
                              .currentLocation=${this.currentLocation}
                              .weatherData=${this.weatherData}></daily-forecast-widget>
                          <weekly-forecast-widget
                              class="weekly-forecast-widget"
                              id="weekly-forecast-widget"
                              .currentLocation=${this.currentLocation}
                              .weatherData=${this.weatherData}></weekly-forecast-widget>
                          <weather-map-widget
                              class="weather-map"
                              id="weather-map"
                              .currentLocation=${this.currentLocation}></weather-map-widget>
                      </main>
                  `
                : html`
                      ${this.allWeatherIcons.cloudy1Day}
                  `}
        `;
    }
}

customElements.define('app-shell', AppShell);
