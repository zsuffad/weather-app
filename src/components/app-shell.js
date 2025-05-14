import {html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import {BasicWeatherWidget} from './basic-weather-widget.js';
import {DailyForecastWidget} from './daily-forecast-widget.js';
import {WeeklyForecastWidget} from './weekly-forecast-widget.js';

export class AppShell extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            latitude: {type: Number},
            longitude: {type: Number},
            weatherData: {type: Object},
            dailyForecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.latitude = JSON.parse(localStorage.getItem('latitude')) || -90;
        this.longitude = JSON.parse(localStorage.getItem('longitude')) || -45;

        this.dailyForecastData = [];
        this.weatherData = {};
    }

    static get scopedElements() {
        return {
            'basic-weather-widget': BasicWeatherWidget,
            'daily-forecast-widget': DailyForecastWidget,
            'weekly-forecast-widget': WeeklyForecastWidget,
        };
    }

    async connectedCallback() {
        super.connectedCallback();

        // Load font using FontFace API
    const font = new FontFace(
        'weathericons',
        'url(/font/weathericons-regular-webfont.woff2) format("woff2")'
      );

      font.load().then(loadedFont => {
        // Add font to document's FontFaceSet
        document.fonts.add(loadedFont);
        console.log('Font loaded successfully in parent!');

        // Dispatch an event to notify children that font is loaded
        this.dispatchEvent(new CustomEvent('font-loaded', {
          bubbles: true,
          composed: true,
          detail: { fontFamily: 'weathericons' }
        }));

        this.requestUpdate();
      }).catch(error => {
        console.error('Failed to load font:', error);
      });
    }

    async firstUpdated() {
        this.fetchAndUpdateWeather();
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
        const latitude = this.latitude;
        const longitude = this.longitude;

        const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;

        try {
            const response = await fetch(url);
            if (!response.ok) throw new Error('API request failed');
            return response.json();
        } catch (error) {
            console.log('Error fetching weather data:', error);
        }
    }

    getLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
                // Store data to localStorage
                localStorage.setItem('latitude', JSON.stringify(this.latitude));
                localStorage.setItem('longitude', JSON.stringify(this.longitude));

                this.fetchAndUpdateWeather();
            });
          } else {
            alert("Your browser doesn't support geolocation. Enter your location city manually");
            return false;
          }
    }

    async fetchGeocodingApi(event) {
        console.log(event);
        console.log(`e.target.value`, event.target.value);

        try {
            let cityCharacters = event.target.value;
            const url = `https://geocoding-api.open-meteo.com/v1/search?name=${cityCharacters}&count=10&language=en&format=json`;
            const options = {
                method: 'GET'
            };
            const response = await fetch(url, options);
            const geoData = await response.json();
            console.log(`geoData`, geoData);
            if (geoData.results && geoData.results.length > 0) {
                let locationList = [];
                geoData.results.forEach((location) => {
                    console.log(`location`, location);
                    locationList.push(html`
                        <div class="location" @click="${(e) => {
                                this.selectLocation(e);
                            }}"
                            data-longitude=${location.longitude}
                            data-latitude=${location.latitude}
                            data-city=${location.name}>
                            ${location.name} [${location.country_code}]
                        </div>
                    `);
                });
                const resultsList = this._('.location-results');
                resultsList.classList.add('enabled');
                render(locationList, resultsList);
            }
        } catch(e) {
            console.log('Geocoding API fetch failed: ', e);
        }
    }

    selectLocation(event) {
        console.log('event', event);
        console.log('event.target', event.target);
        console.log(event.target.dataset.latitude);
        console.log(event.target.dataset.longitude);
        console.log(event.target.dataset.city);

        const resultsList = this._('.location-results');
        resultsList.classList.remove('enabled');
    }

    renderSetCityWidget() {
        return html`
            <div class="add-city">
                <input
                    type="text"
                    @input="${this.fetchGeocodingApi}"
                    placeholder="Enter City Name"/>

                <div class="location-results">
                </div>
            </div>
        `;
    }

    renderGetLocationButton() {
        return html`
            <div class="location-settings">
                <button @click="${this.getLocation}">Get Location</button>
                ${this.latitude.toFixed(2)}
                ${this.longitude.toFixed(2)}
            </div>
        `;
    }

    static get styles() {
        // language=css
        return css`
            :host {
                display: block;
                padding: 1em;
                max-width: 800px;
                margin: 0 auto;
            }
            header {
                background-color: #f3f3f3;
                color: black;
                padding: 1em;
                border-radius: .25em;
                margin-bottom: 1em;
                display: flex;
                justify-content: space-between;
            }
            main {
                padding: 1em;
                background-color: #f5f5f5;
                border-radius: .25em;
            }
            .location-results {
                display: none;
                background: white;
                flex-direction: column;
                gap: 5px;

                &.enabled {
                    display: flex;
                }
            }
            .location {
                padding: 9px;
                &:hover {
                    background: rgba(0,0,0,0.5);
                }
            }
        `;
    }

    render() {
        return html`
            <header>
                <h1>Graz</h1>
                ${this.renderSetCityWidget()}
                ${this.renderGetLocationButton()}
            </header>
            <main>
                <basic-weather-widget
                    class="basic-weather-widget"
                    id="basic-weather-widget"
                    .weatherData=${this.weatherData}></basic-weather-widget>
                <daily-forecast-widget
                    class="daily-forecast-widget"
                    id="daily-forecast-widget"
                    .weatherData=${this.weatherData}></daily-forecast-widget>
                <weekly-forecast-widget
                    class="weekly-forecast-widget"
                    id="weekly-forecast-widget"
                    .weatherData=${this.weatherData}></weekly-forecast-widget>
            </main>
        `;
    }
}

customElements.define('app-shell', AppShell);
