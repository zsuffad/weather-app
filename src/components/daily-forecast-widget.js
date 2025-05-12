import {LitElement, html, css} from 'lit';
import WeatherLitElement from './weather-lit-element';
import ApexCharts from 'apexcharts';

/**
 * DailyForecastWidget component for displaying daily weather forecast
 */
export class DailyForecastWidget extends WeatherLitElement {

    static get properties() {
        return {
            ...super.properties,

            loading: {type: Boolean},
            forecastData: {type: Array},
        };
    }

    constructor() {
        super();
        this.loading = false;
        this.forecastData = [];
    }

    async update(changedProperties) {
        console.log('changedProperties', changedProperties);
        if (changedProperties.has('forecastData')) {
            if (this.forecastData && this.forecastData.length > 0) {
                this.loading = false;
                this.renderForecastChart();
            }

            this.updateComplete.then(async () => {

            });
        }
    }

    firstUpdated() {
        requestAnimationFrame(() => {
            this.renderForecastChart();
        });
    }

    renderForecastChart() {
        var options = {
            chart: {
              type: 'line'
            },
            stroke: {
                curve: 'smooth',
            },
            series: [
              {
                name: 'temperature',
                data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
              }
            ],
            xaxis: {
              categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
            }
          };

          const dailyForecastElement = this._('#daily-forecast-chart');
          if (dailyForecastElement) {
            var chart = new ApexCharts(dailyForecastElement, options);
            chart.render();
          }

    }

    static get styles() {
        // language=css
        return css`
        `;
    }

    render() {
        if (this.loading) {
            return html`
                <p class="loading">Loading weather data...</p>
            `;
        }

        return html`
            <div class="daily-forecast-container">
                <div id="daily-forecast-chart"></div>
            </div>
        `;
    }
}

customElements.define('daily-forecast-widget', DailyForecastWidget);
