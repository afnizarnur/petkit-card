import { html, TemplateResult } from "lit"
import { LitterBoxEntities, PetData } from "../types"

// Inline SVG as data URL
const deviceImage =
  "data:image/svg+xml," +
  encodeURIComponent(`<?xml version="1.0" encoding="UTF-8"?>
<svg width="200" height="160" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="100" width="160" height="40" rx="8" fill="currentColor" opacity="0.2"/>
  <rect x="10" y="20" width="180" height="90" rx="12" fill="currentColor" opacity="0.3"/>
  <path d="M60 20 L140 20 L160 60 L40 60 Z" fill="currentColor" opacity="0.2"/>
  <rect x="40" y="75" width="120" height="5" rx="2.5" fill="currentColor" opacity="0.4"/>
  <circle cx="170" cy="40" r="6" fill="currentColor" opacity="0.4"/>
</svg>`)

export function renderLitterBox(
  entities: LitterBoxEntities,
  title: string | undefined,
  devicePrefix: string,
  handleToggle: (ev: CustomEvent) => void,
  handleClick: (ev: CustomEvent) => void
): TemplateResult {
  return html`
    <ha-card>
      <div class="card-content">
        <div class="device-image">
          <img src=${deviceImage} alt="Petkit Litter Box" />
        </div>

        <div class="usage-section">
          <div class="usage-info">
            <h3 class="section-title">Toilet Usage</h3>
            <div class="usage-count">
              ${entities.timesUsed?.state || "0"} times
            </div>
            <div class="last-used">
              <span
                class="status-dot ${entities.deviceStatus?.state === "working"
                  ? "working"
                  : ""}"
              ></span>
              Last used by ${entities.lastUsedBy?.state || "unknown"}
            </div>
          </div>

          <mwc-button
            raised
            class="clean-button"
            data-entity="button.${devicePrefix}_scoop"
            @click=${handleClick}
          >
            CLEAN NOW
          </mwc-button>
        </div>

        ${renderWarnings(entities)}
        ${Object.values(entities.pets || {}).map((pet) => renderPetInfo(pet))}

        <div class="action-buttons">
          <mwc-button
            outlined
            data-entity="button.${devicePrefix}_deodorize"
            @click=${handleClick}
          >
            DEODORIZE
          </mwc-button>

          <mwc-button
            outlined
            data-entity="switch.${devicePrefix}_light"
            @click=${handleToggle}
            .activated=${entities.light?.state === "on"}
          >
            LIGHTS ${entities.light?.state === "on" ? "OFF" : "ON"}
          </mwc-button>

          <mwc-button
            outlined
            data-entity="switch.${devicePrefix}_auto_clean"
            @click=${handleToggle}
            .activated=${entities.autoclean?.state === "on"}
          >
            ${entities.autoclean?.state === "on" ? "AUTO" : "MAINT"} MODE
          </mwc-button>

          <mwc-button
            outlined
            data-entity="switch.${devicePrefix}_power"
            @click=${handleToggle}
            .activated=${entities.power?.state === "on"}
          >
            EMI ${entities.power?.state === "on" ? "OFF" : "ON"}
          </mwc-button>
        </div>
      </div>
    </ha-card>
  `
}

function renderWarnings(entities: LitterBoxEntities): TemplateResult {
  if (
    entities.wastebinFilled?.state !== "on" &&
    entities.sandLack?.state !== "on" &&
    entities.deodorizerLack?.state !== "on"
  ) {
    return html``
  }

  return html`
    <div class="warnings">
      ${entities.wastebinFilled?.state === "on"
        ? html`<div class="warning">Waste Bin Full!</div>`
        : ""}
      ${entities.sandLack?.state === "on"
        ? html`<div class="warning">Low on Litter!</div>`
        : ""}
      ${entities.deodorizerLack?.state === "on"
        ? html`<div class="warning">Low on Deodorizer!</div>`
        : ""}
    </div>
  `
}

function renderPetInfo(pet: PetData): TemplateResult {
  return html`
    <div class="pet-info">
      <h3 class="pet-name">${pet.name}</h3>
      <div class="info-grid">
        <div class="info-item">
          <span class="label">Last Used</span>
          <span class="value"
            >${pet.entities.lastLitterUsed?.state || "unknown"}</span
          >
          <span class="sub-value"
            >${pet.entities.lastUseDate?.state || "unknown"}</span
          >
        </div>
        <div class="info-item">
          <span class="label">Duration</span>
          <span class="value"
            >${pet.entities.lastUseDuration?.state || "0"} sec</span
          >
        </div>
        <div class="info-item">
          <span class="label">Weight</span>
          <span class="value"
            >${pet.entities.lastWeightMeasurement?.state || "0"} kg</span
          >
        </div>
      </div>
    </div>
  `
}

function renderInfo(entities: LitterBoxEntities): TemplateResult {
  return html`
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Litter Level</span>
        <span class="value">${entities.litterLevel?.state || "unknown"}</span>
      </div>
      <div class="info-item">
        <span class="label">Times Used Today</span>
        <span class="value">${entities.timesUsed?.state || "0"}</span>
      </div>
      <div class="info-item">
        <span class="label">Last Used By</span>
        <span class="value">${entities.lastUsedBy?.state || "unknown"}</span>
      </div>
      <div class="info-item">
        <span class="label">Deodorant Left</span>
        <span class="value">${entities.deodorantDays?.state || "0"} days</span>
      </div>
    </div>

    ${Object.values(entities.pets || {}).map((pet) => renderPetInfo(pet))}
  `
}

function renderControls(
  entities: LitterBoxEntities,
  devicePrefix: string,
  handleToggle: (ev: CustomEvent) => void,
  handleClick: (ev: CustomEvent) => void
): TemplateResult {
  return html`
    <div class="controls">
      <div class="switches">
        <div class="switch">
          <span>Power</span>
          <ha-switch
            .checked=${entities.power?.state === "on"}
            data-entity="switch.${devicePrefix}_power"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Auto Clean</span>
          <ha-switch
            .checked=${entities.autoclean?.state === "on"}
            data-entity="switch.${devicePrefix}_auto_clean"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Light</span>
          <ha-switch
            .checked=${entities.light?.state === "on"}
            data-entity="switch.${devicePrefix}_light"
            @change=${handleToggle}
          ></ha-switch>
        </div>
      </div>

      <div class="buttons">
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_scoop"
          @click=${handleClick}
        >
          Scoop Now
        </mwc-button>
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_deodorize"
          @click=${handleClick}
        >
          Deodorize
        </mwc-button>
      </div>
    </div>
  `
}
