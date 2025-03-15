import { html, TemplateResult } from "lit"
import { LitterBoxEntities } from "../types"

// Map of device models to their SVG illustrations
const deviceIllustrations = {
  puramax_2: () => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="213"
      height="224"
      fill="none"
      viewBox="0 0 213 224"
      class="device-illustration"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M9.383 154.794s-1.466-4.212-2.316-11.296V73.461s1.252-26.058 21.317-40.443c20.064-14.386 49.137-13.14 73.953-12.873 24.816.27 32.071 4.424 37.151 8.379v79.786s.429 27.693-7.966 37.276c-6.085 6.947-14.835 8.633-31.747 9.192l-90.392.016Zm75.739 5.649H72.384c-.57 0-1.033-.462-1.033-1.034v-.344c0-.571.463-1.034 1.033-1.034h12.738c.57 0 1.033.463 1.033 1.034v.344c0 .572-.463 1.034-1.033 1.034Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M7.067 143.498H5.892l-2.063-2.705V76.075L5.892 73.4l1.175.062m-3.238 2.613s-6.365 29.607 0 64.718m5.554 14.001H5.948s-3.717 9.043-2.205 21.247c1.514 12.204 6.352 22.723 15.108 27.13h177.272s15.025-3.288 15.877-34.336l-3.263-60.525s-.822-32.227-7.404-49.503c-6.582-17.278-23.036-36.286-56.903-36.518l-4.833 2.841v3.394"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M144.43 22.29v86.019s.966 33.095-6.236 41.913c-7.202 8.816-12.275 13.346-38.601 13.346H3.744m135.744-55.258h69.249"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M92.33 146.698H65.32c-14.64 0-26.507-8.126-26.507-26.507V77.759c0-19.09 11.867-28.804 26.506-28.804H92.33c14.639 0 26.507 9.44 26.507 28.804v42.432c0 16.772-11.868 26.507-26.507 26.507Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M90.41 140.844H67.24c-14.04 0-22.74-7.152-22.74-23.331v-37.35c0-16.804 10.181-25.355 22.74-25.355h23.17c12.558 0 22.739 8.31 22.739 25.355v37.35c0 14.762-8.483 23.331-22.738 23.331Zm-45.94-36.989h68.679m54.004 24.558H152.43a3.607 3.607 0 0 1-3.608-3.607v-8.334a3.607 3.607 0 0 1 3.608-3.607h14.723a3.607 3.607 0 0 1 3.608 3.607v8.334a3.607 3.607 0 0 1-3.608 3.607Z"
      />
      <path
        stroke="currentColor"
        stroke-width="1.147"
        d="M167.238 126.501h-7.978a1.872 1.872 0 0 1-1.873-1.873v-7.978c0-1.035.838-1.873 1.873-1.873h7.978c1.034 0 1.873.838 1.873 1.873v7.978a1.873 1.873 0 0 1-1.873 1.873Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M154.605 119.945h-2.588a1.29 1.29 0 0 1-1.29-1.291v-2.587a1.29 1.29 0 0 1 1.29-1.291h2.588c.713 0 1.291.578 1.291 1.291v2.587c0 .713-.578 1.291-1.291 1.291Zm0 6.556h-2.588a1.29 1.29 0 0 1-1.29-1.291v-2.587a1.29 1.29 0 0 1 1.29-1.291h2.588c.713 0 1.291.578 1.291 1.291v2.587c0 .713-.578 1.291-1.291 1.291Zm1.873 42.333H3.315m197.648-38.589H175.83s-11.279-.288-15.259 5.471c-4.294 6.209-3.717 13.026-3.717 13.026l-.375 20.092.38 21.875s-.341 11.389 11.44 11.416h23.928s9.273-1.572 13.578-13.142c0 0 2.985-6.376 3.507-20.149l-1.483-23.896s-.783-9.097-2.272-12.285c-.549-1.175-1.061-2.408-4.594-2.408Z"
      />
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.147"
        d="M181.075 184.017h-1.742a5.22 5.22 0 0 1-5.22-5.221v-25.998a5.22 5.22 0 0 1 5.22-5.221h1.742a5.221 5.221 0 0 1 5.221 5.221v25.998a5.222 5.222 0 0 1-5.221 5.221Zm-12.202-29.223h-4.371a2.706 2.706 0 0 1-2.705-2.705v-.904a2.706 2.706 0 0 1 2.705-2.705h4.371a2.705 2.705 0 0 1 2.706 2.705v.904a2.705 2.705 0 0 1-2.706 2.705Z"
      />
    </svg>
  `,
  pura_x: () => html`
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="213"
      height="224"
      fill="none"
      viewBox="0 0 213 224"
      class="device-illustration"
    >
      <!-- Placeholder for Pura X illustration -->
      <rect
        x="10"
        y="10"
        width="193"
        height="204"
        rx="12"
        stroke="currentColor"
        stroke-width="1.147"
        fill="none"
      />
      <text
        x="106.5"
        y="112"
        text-anchor="middle"
        fill="currentColor"
        style="font: 16px sans-serif"
      >
        Pura X
      </text>
    </svg>
  `,
  // Add more models here as needed
}

function renderDeviceIllustration(model?: string): TemplateResult {
  // Default to Puramax 2 if model is not specified or not found
  const illustrationFn =
    deviceIllustrations[model?.toLowerCase() || ""] ||
    deviceIllustrations.puramax_2
  return illustrationFn()
}

function renderUsageSection(
  entities: LitterBoxEntities,
  devicePrefix: string,
  handleClick: (ev: CustomEvent) => void,
  model?: string
): TemplateResult {
  // Get the last used time from attributes, with proper fallback
  const lastUsedTime = entities.lastUsedBy?.attributes?.last_used_time
  const lastUsedBy = entities.lastUsedBy?.state || "Unknown"

  const renderLastUsage = () => {
    // If we have a time but no known user, just show the time
    if (lastUsedBy === "Unknown" && lastUsedTime) {
      return html`Last used at ${lastUsedTime}`
    }
    // If we have both user and time
    if (lastUsedTime) {
      return html`Last used by <strong>${lastUsedBy}</strong> at ${lastUsedTime}`
    }
    // If we have neither, show a default message
    return html`No usage recorded`
  }

  return html`
    <div class="usage-section">
      <div class="content-column">
        <div class="usage-info">
          <div class="usage-stats">
            <span class="label">Toilet Usage</span>
            <span class="value">${entities.timesUsed?.state || "0"} times</span>
          </div>
          <div class="last-usage">
            <span class="text">${renderLastUsage()}</span>
          </div>
          <div class="action-wrapper">
            <ha-button
              raised
              .label=${"Clean Now"}
              data-entity="button.${devicePrefix}_scoop"
              @click=${handleClick}
            >
              <ha-icon
                icon="mdi:broom"
                slot="icon"
                style="width: 20px; height: 20px;"
              ></ha-icon>
            </ha-button>
          </div>
        </div>
      </div>
      <div class="device-column">${renderDeviceIllustration(model)}</div>
    </div>
  `
}

export function renderLitterBox(
  entities: LitterBoxEntities,
  title: string | undefined,
  devicePrefix: string,
  handleToggle: (ev: CustomEvent) => void,
  handleClick: (ev: CustomEvent) => void,
  model?: string
): TemplateResult {
  return html`
    <ha-card>
      ${renderUsageSection(entities, devicePrefix, handleClick, model)}
    </ha-card>
  `
}
