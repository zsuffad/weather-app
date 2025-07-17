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
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.weatherField = 'precipitationIntensity'; // 'precipitationIntensity'; //'temperature';
        this.zoomLevel = '9';
        this.timestamp = new Date().toISOString();
        this.currentLocation = {};
        this.weatherMapImage = null;
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

    async apiGetWeatherMap() {
        const options = {
            method: 'GET',
            headers: {accept: 'text/plain', 'accept-encoding': 'deflate, gzip, br'},
        };

        // https://api.tomorrow.io/v4/map/tile/{zoom}/{x}/{y}/{field}/{time}.{format}
        let url = `https://api.tomorrow.io/v4/map/tile/9/${this.currentLocation.latitude}/${this.currentLocation.longitude}/${this.weatherField}/${this.timestamp}.png?apikey=LFxrgwmWlJiIafZrC4Bpw5P8DfRRkG7A`;

        try {
            const response = await fetch(url, options);
            // const blob = await response.blob();
            // this.weatherMapImage = URL.createObjectURL(blob);
            // console.log(`this.weatherMapImage`, this.weatherMapImage);

            const arrayBuffer = await response.arrayBuffer();
            // Convert to base64
            const base64 = btoa(
                new Uint8Array(arrayBuffer).reduce((data, byte) => data + String.fromCharCode(byte), ''),
            );

            this.weatherMapImage = `data:image/png;base64,${base64}`;

            this.loading = false;
        } catch (error) {
            console.log(`error`, error);
            this.hasError = true;
        }
    }

    updated(changedProperties) {}

    renderWeatherMap() {
        // initialize the map
        const mapDiv = this._('#weather-map');
        var map = L.map(mapDiv, {
            minZoom: 3,
            maxZoom: 10,
        }).setView([this.currentLocation.latitude, this.currentLocation.longitude], 9);

        // OpenStreetMap
        L.tileLayer(`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(map);

        // Inject the wether data tile layer
        L.tileLayer(
            `https://api.tomorrow.io/v4/map/tile/{z}/{x}/{y}/${this.weatherField}/${this.timestamp}.png?apikey=LFxrgwmWlJiIafZrC4Bpw5P8DfRRkG7A`,
            {
                opacity: 0.6,
            },
        ).addTo(map);
    }

    static get styles() {
        // language=css
        return [
            css`
                ${unsafeCSS(leafletCSS)}c
                ${commonStyles}
                .weather-map {
                    height: 400px;
                    overflow: hidden;
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
                <h3>Weather Map</h3>
                <div id="weather-map" class="weather-map"></div>
            </div>
        `;
    }
}

customElements.define('weather-map-widget', WeatherMapWidget);
