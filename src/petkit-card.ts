import { LitElement, html, css } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HomeAssistant } from "custom-card-helpers"

console.info(
  "%c PETKIT-CARD %c 1.0.0 ",
  "color: white; background: #555; font-weight: 700;",
  "color: white; background: #1976d2; font-weight: 700;"
)

@customElement("petkit-card")
export class PetkitCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant

  @property({ type: Object }) public config!: any

  public static getStubConfig() {
    return {
      entity: "",
      name: "Petkit Device",
      show_name: true,
      show_status: true,
    }
  }

  public setConfig(config: any): void {
    if (!config.entity) {
      throw new Error("Please define an entity")
    }

    this.config = {
      name: "Petkit Device",
      show_name: true,
      show_status: true,
      ...config,
    }
  }

  protected render() {
    if (!this.config || !this.hass) {
      return html``
    }

    const stateObj = this.hass.states[this.config.entity]

    if (!stateObj) {
      return html`
        <ha-card>
          <div class="not-found">Entity not found: ${this.config.entity}</div>
        </ha-card>
      `
    }

    return html`
      <ha-card>
        <div class="card-content">
          ${this.config.show_name
            ? html`<div class="name">
                ${this.config.name || stateObj.attributes.friendly_name}
              </div>`
            : ""}
          ${this.config.show_status
            ? html`<div class="status">Status: ${stateObj.state}</div>`
            : ""}
        </div>
      </ha-card>
    `
  }

  static get styles() {
    return css`
      .card-content {
        padding: 16px;
      }
      .name {
        font-size: 1.2em;
        font-weight: 500;
        margin-bottom: 8px;
      }
      .status {
        font-size: 1em;
        color: var(--secondary-text-color);
      }
      .not-found {
        padding: 16px;
        text-align: center;
        color: var(--error-color);
      }
    `
  }
}
