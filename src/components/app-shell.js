import { LitElement, html, css } from 'lit';
import './basic-weather-widget.js';

export class AppShell extends LitElement {


  static get scopedElements() {
    return {
        'basic-weather-widget': BasicWeatherWidget,
    };
}


  static styles = css`
    :host {
      display: block;
      padding: 16px;
      max-width: 800px;
      margin: 0 auto;
    }
    header {
      background-color: #f3f3f3;
      color: black;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 16px;
    }
    main {
      padding: 16px;
      background-color: #f5f5f5;
      border-radius: 8px;
    }
  `;


  async connectedCallback() {
    super.connectedCallback();
    const basicWeatherData = await this.fetchBasicWeatherData();

    console.log("Current Weather:", basicWeatherData);

    if (basicWeatherData) {
      const weatherWidget = this.shadowRoot.querySelector('basic-weather-widget');
      if (weatherWidget) {
        weatherWidget.temperature = basicWeatherData.current_weather.temperature;
        weatherWidget.weatherCode = basicWeatherData.current_weather.weathercode;
        weatherWidget.loading = false;
      }
    }
  }

  async fetchBasicWeatherData() {
    const latitude = 47.0707;  // Graz
    const longitude = 15.4395;

    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&current_weather=true`;

    try {
      const response  = await fetch(url);
      if (!response.ok) throw new Error("API request failed");
      return response.json();
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  }

  render() {
    return html`
      <header>
        <h1>Weather Graz</h1>
      </header>
      <main>
        <p>Current weather conditions:</p>
        <basic-weather-widget></basic-weather-widget>
      </main>
    `;
  }
}

customElements.define('app-shell', AppShell);