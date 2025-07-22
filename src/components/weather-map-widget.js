import {html, css, unsafeCSS} from 'lit';
import WeatherLitElement from './weather-lit-element';
import L from 'leaflet';
import leafletCSS from 'leaflet/dist/leaflet.css';
import {commonStyles} from '../styles/common-styles';

/**
 * WeatherMapWidget component for displaying weather maps
 */
export class WeatherMapWidget extends WeatherLitElement {
    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            weatherMapImage: {type: String},
            currentLocation: {type: Object},
            CURRENT_WEATHER_LAYER: {type: String},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.openweathermap_API_KEY = '57973096dabde2f23889aed21d9f1a6f';
        this.weatherField = 'precipitationIntensity'; // 'precipitationIntensity'; //'temperature';
        this.zoomLevel = '9';
        this.timestamp = Math.floor(Date.now() / 1000); //.toISOString();
        this.currentLocation = {};
        this.weatherMapImage = null;
        this.layerOpacity = 0.6;
        this.WEATHER_LAYERS = {
            CLOUDS: 'clouds_new',
            PRECIPITATION: 'precipitation_new',
            TEMPERATURE: 'temp_new',
            WIND: 'wind_new',
        };
        this.CURRENT_WEATHER_LAYER = this.WEATHER_LAYERS.PRECIPITATION; // Default layer
    }

    static get scopedElements() {
        return {};
    }

    firstUpdated() {
        // Render the chart
        // this.apiGetWeatherMap();
        this.renderWeatherMap();
        // this.loading = false;
    }

    updated(changedProperties) {
        if (changedProperties.has('currentLocation') || changedProperties.has('timestamp')) {
            this.updateWeatherLayer();
        }
    }

    renderWeatherMap() {
        // initialize the map
        const mapDiv = this._('#weather-map');
        this.map = L.map(mapDiv, {
            minZoom: 3,
            maxZoom: 10,
        }).setView([this.currentLocation.latitude, this.currentLocation.longitude], 9);

        // OpenStreetMap
        this.osmLayer = L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.map);

        this.setWeatherLayer(this.CURRENT_WEATHER_LAYER);
    }

    updateWeatherLayer() {
        if (this.weatherLayer) {
            this.weatherLayer.remove();
        }

        // Inject the wether data tile layer
        this.weatherLayer = L.tileLayer(
            // `http://maps.openweathermap.org/maps/2.0/weather/${this.WEATHER_LAYERS.precipitationIntensity.field}/{z}/{x}/{y}?appid=${this.openweathermap_API_KEY}`, // date=${this.timestamp}&opacity=${this.layerOpacity}&fill_bound=true&
            `https://tile.openweathermap.org/map/${this.CURRENT_WEATHER_LAYER}/{z}/{x}/{y}.png?appid=${this.openweathermap_API_KEY}&date=${this.timestamp}`,
        ).addTo(this.map);
    }

    setWeatherLayer(layer) {
        this.CURRENT_WEATHER_LAYER = layer;
        console.log(`this.CURRENT_WEATHER_LAYER`, this.CURRENT_WEATHER_LAYER);
        this.updateWeatherLayer();
    }

    setDate(changeEvent) {
        console.log(`changeEvent`, changeEvent);
        const value = changeEvent.target.value;
        const date = new Date();
        date.setHours(date.getHours() + value); // Assuming each step is 1 hour
        this.timestamp = Math.floor(date.getTime() / 1000); // Convert to UNIX timestamp
        this.updateWeatherLayer();
    }

    static get styles() {
        // language=css
        return [
            css`
                ${unsafeCSS(leafletCSS)}c
                ${commonStyles}
                :host {
                    --color-tag-bg: blue;
                    --color-tag-text: white;
                }
                .weather-map {
                    height: 400px;
                    overflow: hidden;
                }
                .header-title {
                    display: flex;
                    align-items: center;
                    gap: 1em;
                }
                .current-layer {
                    padding: 0.25em 0.5em;
                    background-color: var(--color-tag-bg);
                    color: var(--color-tag-text);
                    border-radius: 0.3em;
                }
                .map-type-selector {
                    list-style-type: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    gap: 1em;
                    justify-content: space-evenly;
                    margin-bottom: 1em;
                }
                .time-slider {
                    width: 100%;
                }
                datalist {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;
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

        return html`
            <div id="weather-map-container" class="widget-container">
                <div class="header">
                    <div class="header-title">
                        <h3>Weather Map</h3>
                        <span class="current-layer">${this.CURRENT_WEATHER_LAYER}</span>
                    </div>
                    <ul class="map-type-selector">
                        <li>
                            <button @click=${() => this.setWeatherLayer(this.WEATHER_LAYERS.PRECIPITATION)}>
                                rain
                            </button>
                        </li>
                        <li>
                            <button @click=${() => this.setWeatherLayer(this.WEATHER_LAYERS.CLOUDS)}>clouds</button>
                        </li>
                        <li>
                            <button @click=${() => this.setWeatherLayer(this.WEATHER_LAYERS.TEMPERATURE)}>temp</button>
                        </li>
                        <li><button @click=${() => this.setWeatherLayer(this.WEATHER_LAYERS.WIND)}>wind</button></li>
                    </ul>
                </div>
                <div id="weather-map" class="weather-map"></div>
                <div class="time-slider">
                    <input
                        @input=${(event) => this.setDate(event)}
                        type="range"
                        name="time-slider"
                        id="time-slider"
                        class="time-slider"
                        min="0"
                        max="6"
                        value="0"
                        list="markers" />
                    <datalist id="markers">
                        <option value="0" label="now"></option>
                        <option value="1" label="1h"></option>
                        <option value="2" label="2h"></option>
                        <option value="3" label="3h"></option>
                        <option value="4" label="4h"></option>
                        <option value="5" label="5h"></option>
                        <option value="6" label="6h"></option>
                    </datalist>
                </div>
            </div>
        `;
    }
}

customElements.define('weather-map-widget', WeatherMapWidget);
