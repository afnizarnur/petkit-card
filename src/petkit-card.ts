import { LitElement, html, TemplateResult } from "lit"
import { customElement, property } from "lit/decorators.js"
import { HomeAssistant } from "custom-card-helpers"
import { styles } from "./styles"
import {
  PetkitCardConfig,
  PetkitDeviceType,
  BaseEntityState,
  DeviceState,
  SwitchState,
  PetData,
} from "./types"
import { renderLitterBox } from "./devices/litter-box"
import { renderFeeder } from "./devices/feeder"
import { renderWaterFountain } from "./devices/water-fountain"

console.info(
  "%c PETKIT-CARD %c 1.0.0 ",
  "color: white; background: #555; font-weight: 700;",
  "color: white; background: #1976d2; font-weight: 700;"
)

@customElement("petkit-card")
export class PetkitCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant
  @property({ type: Object }) public config!: PetkitCardConfig

  public static getStubConfig(): Partial<PetkitCardConfig> {
    return {
      device_type: PetkitDeviceType.LITTER_BOX,
      device_prefix: "litter_box",
      title: "Petkit Device",
    }
  }

  public setConfig(config: Partial<PetkitCardConfig>): void {
    if (!config.device_prefix) {
      throw new Error("Please define a device_prefix")
    }

    if (
      !Object.values(PetkitDeviceType).includes(
        config.device_type as PetkitDeviceType
      )
    ) {
      throw new Error(
        "Invalid device_type. Must be one of: " +
          Object.values(PetkitDeviceType).join(", ")
      )
    }

    this.config = {
      type: "custom:petkit-card",
      title: "Petkit Device",
      ...config,
    } as PetkitCardConfig
  }

  private getEntityState<T extends BaseEntityState>(
    entityId: string
  ): T | undefined {
    const state = this.hass?.states[entityId]
    return state ? (state as unknown as T) : undefined
  }

  private handleServiceCall(domain: string, service: string, entityId: string) {
    if (!this.hass || !entityId) return

    this.hass.callService(domain, service, {
      entity_id: entityId,
    })
  }

  private handleClick(ev: CustomEvent) {
    const button = ev.currentTarget as HTMLElement
    const entity = button.getAttribute("data-entity")
    if (entity) {
      this.handleServiceCall("button", "press", entity)
    }
  }

  private handleToggle(ev: CustomEvent) {
    const switchEl = ev.currentTarget as HTMLElement
    const entity = switchEl.getAttribute("data-entity")

    if (entity) {
      const currentState = this.hass.states[entity]
      const newState = currentState.state === "on" ? "off" : "on"
      this.handleServiceCall("switch", "turn_" + newState, entity)
    }
  }

  private getLitterBoxEntities() {
    const prefix = this.config.device_prefix || ""
    return {
      deviceStatus: this.getEntityState<DeviceState>(
        `sensor.${prefix}_device_status`
      ),
      litterLevel: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_litter_level`
      ),
      timesUsed: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_times_used`
      ),
      lastUsedBy: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_last_used_by`
      ),
      deodorantDays: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_deodorant_left_days`
      ),
      wastebinFilled: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_wastebin_filled`
      ),
      sandLack: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_sand_lack`
      ),
      deodorizerLack: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_deodorizer_liquid_lack`
      ),
      autoclean: this.getEntityState<SwitchState>(
        `switch.${prefix}_auto_clean`
      ),
      power: this.getEntityState<SwitchState>(`switch.${prefix}_power`),
      light: this.getEntityState<SwitchState>(`switch.${prefix}_light`),
      pets:
        this.config.pets?.reduce(
          (acc, pet) => {
            acc[pet.name] = {
              name: pet.name,
              entities: {
                lastLitterUsed: this.getEntityState<BaseEntityState>(
                  `sensor.${pet.prefix}_last_litter_used`
                ),
                lastUseDate: this.getEntityState<BaseEntityState>(
                  `sensor.${pet.prefix}_last_use_date`
                ),
                lastUseDuration: this.getEntityState<BaseEntityState>(
                  `sensor.${pet.prefix}_last_use_duration`
                ),
                lastWeightMeasurement: this.getEntityState<BaseEntityState>(
                  `sensor.${pet.prefix}_last_weight_measurement`
                ),
              },
            }
            return acc
          },
          {} as Record<string, PetData>
        ) || {},
    }
  }

  private getWaterFountainEntities() {
    const prefix = this.config.device_prefix || ""
    return {
      lowBattery: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_low_battery`
      ),
      onAcPower: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_on_ac_power`
      ),
      replaceFilter: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_replace_filter`
      ),
      waterLackWarning: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_water_lack_warning`
      ),
      battery: this.getEntityState<BaseEntityState>(`sensor.${prefix}_battery`),
      drinkTimes: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_drink_times`
      ),
      energy: this.getEntityState<BaseEntityState>(`sensor.${prefix}_energy`),
      filterRemaining: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_filter_remaining`
      ),
      lastBleConnection: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_last_ble_connection`
      ),
      lastUpdate: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_last_update`
      ),
      purifiedWater: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_purified_water`
      ),
    }
  }

  private getFeederEntities() {
    const prefix = this.config.device_prefix || ""
    return {
      deviceStatus: this.getEntityState<DeviceState>(
        `sensor.${prefix}_device_status`
      ),
      error: this.getEntityState<BaseEntityState>(`sensor.${prefix}_error`),
      batteryLevel: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_battery_level`
      ),
      foodBowlFill: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_food_bowl_fill`
      ),
      timesDispensed: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_times_dispensed`
      ),
      timesEaten: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_times_eaten`
      ),
      averageEatingTime: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_average_eating_time`
      ),
      desiccantLeftDays: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_desiccant_left_days`
      ),
      careEndSubscription: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_care_end_subscription`
      ),
      rssi: this.getEntityState<BaseEntityState>(`sensor.${prefix}_rssi`),
      foodLevelHopper2: this.getEntityState<BaseEntityState>(
        `binary_sensor.${prefix}_food_level_hopper_2`
      ),
      manuallyDispensedHopper1: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_manually_dispensed_hopper_1`
      ),
      manuallyDispensedHopper2: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_manually_dispensed_hopper_2`
      ),
      plannedDispensedHopper1: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_planned_dispensed_hopper_1`
      ),
      plannedDispensedHopper2: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_planned_dispensed_hopper_2`
      ),
      totalDispensedHopper1: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_total_dispensed_hopper_1`
      ),
      totalDispensedHopper2: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_total_dispensed_hopper_2`
      ),
      totalPlannedHopper1: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_total_planned_hopper_1`
      ),
      totalPlannedHopper2: this.getEntityState<BaseEntityState>(
        `sensor.${prefix}_total_planned_hopper_2`
      ),
      volume: this.getEntityState<BaseEntityState>(`number.${prefix}_volume`),
      iaEatDetectionSensitivity: this.getEntityState<BaseEntityState>(
        `select.${prefix}_ia_eat_detection_sensitivity`
      ),
      iaPetDetectionSensitivity: this.getEntityState<BaseEntityState>(
        `select.${prefix}_ia_pet_detection_sensitivity`
      ),
      moveDetectionSensitivity: this.getEntityState<BaseEntityState>(
        `select.${prefix}_move_detection_sensitivity`
      ),
      surplusControlLevel: this.getEntityState<BaseEntityState>(
        `select.${prefix}_surplus_control_level`
      ),
      camera: this.getEntityState<SwitchState>(`switch.${prefix}_camera`),
      childLock: this.getEntityState<SwitchState>(
        `switch.${prefix}_child_lock`
      ),
      displayTimestamp: this.getEntityState<SwitchState>(
        `switch.${prefix}_display_timestamp`
      ),
      feedSound: this.getEntityState<SwitchState>(
        `switch.${prefix}_feed_sound`
      ),
      indicatorLight: this.getEntityState<SwitchState>(
        `switch.${prefix}_indicator_light`
      ),
      microphone: this.getEntityState<SwitchState>(
        `switch.${prefix}_microphone`
      ),
      nightVision: this.getEntityState<SwitchState>(
        `switch.${prefix}_night_vision`
      ),
      petTracking: this.getEntityState<SwitchState>(
        `switch.${prefix}_pet_tracking`
      ),
      shortageAlarm: this.getEntityState<SwitchState>(
        `switch.${prefix}_shortage_alarm`
      ),
      surplusControl: this.getEntityState<SwitchState>(
        `switch.${prefix}_surplus_control`
      ),
      systemSound: this.getEntityState<SwitchState>(
        `switch.${prefix}_system_sound`
      ),
      voiceDispense: this.getEntityState<SwitchState>(
        `switch.${prefix}_voice_dispense`
      ),
      notifOnDesiccantChangeNeed: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_desiccant_change_need`
      ),
      notifOnDispense: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_dispense`
      ),
      notifOnLowBattery: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_low_battery`
      ),
      notifOnMove: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_move`
      ),
      notifOnPetEat: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_pet_eat`
      ),
      notifOnPetVisit: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_pet_visit`
      ),
      notifOnRefillNeed: this.getEntityState<SwitchState>(
        `switch.${prefix}_notif_on_refill_need`
      ),
      manualFeedHopper1: this.getEntityState<BaseEntityState>(
        `text.${prefix}_manual_feed_hopper_1`
      ),
      manualFeedHopper2: this.getEntityState<BaseEntityState>(
        `text.${prefix}_manual_feed_hopper_2`
      ),
    }
  }

  protected render(): TemplateResult {
    if (!this.config || !this.hass) {
      return html`
        <ha-card>
          <div class="card-content">
            <div class="not-found">Configuration Error</div>
          </div>
        </ha-card>
      `
    }

    switch (this.config.device_type) {
      case PetkitDeviceType.LITTER_BOX:
        return renderLitterBox(
          this.getLitterBoxEntities(),
          this.config.title,
          this.config.device_prefix,
          this.handleToggle.bind(this),
          this.handleClick.bind(this),
          this.config.model
        )
      case PetkitDeviceType.FEEDER:
        return renderFeeder(
          this.getFeederEntities(),
          this.config.title,
          this.config.device_prefix,
          this.handleToggle.bind(this),
          this.handleClick.bind(this)
        )
      case PetkitDeviceType.WATER_FOUNTAIN:
        return renderWaterFountain(
          this.getWaterFountainEntities(),
          this.config.title
        )
      default:
        return html`
          <ha-card>
            <div class="card-content">
              <div class="not-found">Unsupported device type</div>
            </div>
          </ha-card>
        `
    }
  }

  static get styles() {
    return styles
  }
}
