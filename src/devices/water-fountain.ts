import { html, TemplateResult } from "lit"
import { WaterFountainEntities } from "../types"

export function renderWaterFountain(
  entities: WaterFountainEntities,
  title: string | undefined
): TemplateResult {
  return html`
    <ha-card>
      <h1 class="card-header">
        ${title}
        <div
          class="status ${entities.onAcPower?.state === "on" ? "working" : ""}"
        >
          ${entities.onAcPower?.state === "on" ? "Plugged In" : "On Battery"}
        </div>
      </h1>

      <div class="card-content">
        ${renderWarnings(entities)} ${renderInfo(entities)}
        <div class="last-update">
          Last Update: ${entities.lastUpdate?.state || "unknown"}
        </div>
      </div>
    </ha-card>
  `
}

function renderWarnings(entities: WaterFountainEntities): TemplateResult {
  if (
    entities.lowBattery?.state !== "on" &&
    entities.waterLackWarning?.state !== "on" &&
    entities.replaceFilter?.state !== "on"
  ) {
    return html``
  }

  return html`
    <div class="warnings">
      ${entities.lowBattery?.state === "on"
        ? html`<div class="warning">Low Battery!</div>`
        : ""}
      ${entities.waterLackWarning?.state === "on"
        ? html`<div class="warning">Water Level Low!</div>`
        : ""}
      ${entities.replaceFilter?.state === "on"
        ? html`<div class="warning">Replace Filter!</div>`
        : ""}
    </div>
  `
}

function renderInfo(entities: WaterFountainEntities): TemplateResult {
  return html`
    <div class="info-grid">
      <div class="info-item">
        <span class="label">Battery</span>
        <span class="value">${entities.battery?.state || "unknown"}%</span>
        <span class="sub-value"
          >${entities.onAcPower?.state === "on"
            ? "Charging"
            : "On Battery"}</span
        >
      </div>
      <div class="info-item">
        <span class="label">Filter Life</span>
        <span class="value">${entities.filterRemaining?.state || "0"}%</span>
      </div>
      <div class="info-item">
        <span class="label">Drink Times</span>
        <span class="value">${entities.drinkTimes?.state || "0"}</span>
      </div>
      <div class="info-item">
        <span class="label">Purified Water</span>
        <span class="value">${entities.purifiedWater?.state || "0"}L</span>
      </div>
    </div>
  `
}
