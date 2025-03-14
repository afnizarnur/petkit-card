import { html, TemplateResult } from "lit"
import { FeederEntities } from "../types"

export function renderFeeder(
  entities: FeederEntities,
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
          class="status ${entities.deviceStatus?.state === "online"
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

function renderWarnings(entities: FeederEntities): TemplateResult {
  const warnings: string[] = []

  if (entities.foodLevelHopper2?.state === "on") {
    warnings.push("Low Food Level in Hopper 2")
  }
  if (
    entities.batteryLevel?.state &&
    parseInt(entities.batteryLevel.state) < 20
  ) {
    warnings.push("Low Battery")
  }
  if (
    entities.desiccantLeftDays?.state &&
    parseInt(entities.desiccantLeftDays.state) < 5
  ) {
    warnings.push("Replace Desiccant Soon")
  }
  if (entities.error?.state && entities.error.state !== "None") {
    warnings.push(`Error: ${entities.error.state}`)
  }

  if (warnings.length === 0) return html``

  return html`
    <div class="warnings">
      ${warnings.map((warning) => html`<div class="warning">${warning}</div>`)}
    </div>
  `
}

function renderInfo(entities: FeederEntities): TemplateResult {
  return html`
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Food Bowl</span>
        <span class="value">${entities.foodBowlFill?.state || "unknown"}</span>
      </div>
      <div class="info-item">
        <span class="label">Battery</span>
        <span class="value">${entities.batteryLevel?.state || "unknown"}%</span>
      </div>
      <div class="info-item">
        <span class="label">Times Eaten</span>
        <span class="value">${entities.timesEaten?.state || "0"}</span>
      </div>
      <div class="info-item">
        <span class="label">Desiccant</span>
        <span class="value"
          >${entities.desiccantLeftDays?.state || "0"} days</span
        >
      </div>
    </div>

    <div class="section-title">Dispensing Stats</div>
    <div class="stats-grid">
      <div class="stats-item">
        <div class="stats-header">Hopper 1</div>
        <div class="stats-row">
          <span>Manual:</span>
          <span>${entities.manuallyDispensedHopper1?.state || "0"}</span>
        </div>
        <div class="stats-row">
          <span>Planned:</span>
          <span>${entities.plannedDispensedHopper1?.state || "0"}</span>
        </div>
      </div>
      <div class="stats-item">
        <div class="stats-header">Hopper 2</div>
        <div class="stats-row">
          <span>Manual:</span>
          <span>${entities.manuallyDispensedHopper2?.state || "0"}</span>
        </div>
        <div class="stats-row">
          <span>Planned:</span>
          <span>${entities.plannedDispensedHopper2?.state || "0"}</span>
        </div>
      </div>
    </div>
  `
}

function renderControls(
  entities: FeederEntities,
  devicePrefix: string,
  handleToggle: (ev: CustomEvent) => void,
  handleClick: (ev: CustomEvent) => void
): TemplateResult {
  return html`
    <div class="section-title">Quick Controls</div>
    <div class="controls">
      <div class="switches">
        <div class="switch">
          <span>Child Lock</span>
          <ha-switch
            .checked=${entities.childLock?.state === "on"}
            data-entity="switch.${devicePrefix}_child_lock"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Camera</span>
          <ha-switch
            .checked=${entities.camera?.state === "on"}
            data-entity="switch.${devicePrefix}_camera"
            @change=${handleToggle}
          ></ha-switch>
        </div>
        <div class="switch">
          <span>Light</span>
          <ha-switch
            .checked=${entities.indicatorLight?.state === "on"}
            data-entity="switch.${devicePrefix}_indicator_light"
            @change=${handleToggle}
          ></ha-switch>
        </div>
      </div>

      <div class="buttons">
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_food_replenished"
          @click=${handleClick}
        >
          Food Replenished
        </mwc-button>
        <mwc-button
          outlined
          data-entity="button.${devicePrefix}_reset_desiccant"
          @click=${handleClick}
        >
          Reset Desiccant
        </mwc-button>
      </div>
    </div>
  `
}
