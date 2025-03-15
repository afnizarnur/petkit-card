import { html, TemplateResult } from "lit"
import { LitterBoxEntities, PetData } from "../types"

export function renderLitterBox(
  entities: LitterBoxEntities,
  title: string | undefined,
  devicePrefix: string,
  handleToggle: (ev: CustomEvent) => void,
  handleClick: (ev: CustomEvent) => void
): TemplateResult {
  return html`
    <ha-card>
      <h1 class="card-header">
        ${title}
        <div
          class="status ${entities.deviceStatus?.state === "working"
            ? "working"
            : ""}"
        >
          ${entities.deviceStatus?.state || "unknown"}
        </div>
      </h1>

      <div class="card-content">
        ${renderWarnings(entities)} ${renderInfo(entities)}
        ${renderControls(entities, devicePrefix, handleToggle, handleClick)}
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
