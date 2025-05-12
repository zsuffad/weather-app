import {LitElement} from 'lit';

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
        return this.shadowRoot === null
            ? this.querySelector(selector)
            : this.shadowRoot.querySelector(selector);
    }

    _a(selector) {
        return this.shadowRoot === null
            ? this.querySelectorAll(selector)
            : this.shadowRoot.querySelectorAll(selector);
    }

    firstUpdated() {
        super.firstUpdated();
    }

    update(changedProperties) {
        super.update(changedProperties);
    }
}
