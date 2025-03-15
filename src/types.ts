import { HomeAssistant } from "custom-card-helpers"

// Device Types
export enum PetkitDeviceType {
  LITTER_BOX = "litter_box",
  FEEDER = "feeder",
  WATER_FOUNTAIN = "water_fountain",
}

// Configuration Interface
export interface PetkitCardConfig {
  type: string
  device_type: PetkitDeviceType
  device_prefix: string
  title?: string
  model?: string
  pets?: Array<{
    name: string
    prefix: string
  }>
}

// Entity Interfaces
export interface BaseEntityState {
  state: string
  attributes: Record<string, any>
}

export interface DeviceState extends BaseEntityState {
  device_status?: string
  error?: string
}

export interface SwitchState extends BaseEntityState {
  state: "on" | "off"
}

// Device Specific Interfaces
export interface LitterBoxEntities {
  deviceStatus?: DeviceState
  litterLevel?: BaseEntityState
  timesUsed?: BaseEntityState
  lastUsedBy?: BaseEntityState
  deodorantDays?: BaseEntityState
  wastebinFilled?: BaseEntityState
  sandLack?: BaseEntityState
  deodorizerLack?: BaseEntityState
  autoclean?: SwitchState
  power?: SwitchState
  light?: SwitchState
  pets: Record<string, PetData>
}

export interface FeederEntities {
  // Status and Info
  deviceStatus?: DeviceState
  error?: BaseEntityState
  batteryLevel?: BaseEntityState
  foodBowlFill?: BaseEntityState
  timesDispensed?: BaseEntityState
  timesEaten?: BaseEntityState
  averageEatingTime?: BaseEntityState
  desiccantLeftDays?: BaseEntityState
  careEndSubscription?: BaseEntityState
  rssi?: BaseEntityState

  // Food Level Sensors
  foodLevelHopper2?: BaseEntityState

  // Dispensing Data
  manuallyDispensedHopper1?: BaseEntityState
  manuallyDispensedHopper2?: BaseEntityState
  plannedDispensedHopper1?: BaseEntityState
  plannedDispensedHopper2?: BaseEntityState
  totalDispensedHopper1?: BaseEntityState
  totalDispensedHopper2?: BaseEntityState
  totalPlannedHopper1?: BaseEntityState
  totalPlannedHopper2?: BaseEntityState

  // Controls and Settings
  volume?: BaseEntityState
  iaEatDetectionSensitivity?: BaseEntityState
  iaPetDetectionSensitivity?: BaseEntityState
  moveDetectionSensitivity?: BaseEntityState
  surplusControlLevel?: BaseEntityState

  // Switches
  camera?: SwitchState
  childLock?: SwitchState
  displayTimestamp?: SwitchState
  feedSound?: SwitchState
  indicatorLight?: SwitchState
  microphone?: SwitchState
  nightVision?: SwitchState
  petTracking?: SwitchState
  shortageAlarm?: SwitchState
  surplusControl?: SwitchState
  systemSound?: SwitchState
  voiceDispense?: SwitchState

  // Notification Settings
  notifOnDesiccantChangeNeed?: SwitchState
  notifOnDispense?: SwitchState
  notifOnLowBattery?: SwitchState
  notifOnMove?: SwitchState
  notifOnPetEat?: SwitchState
  notifOnPetVisit?: SwitchState
  notifOnRefillNeed?: SwitchState

  // Manual Feed Controls
  manualFeedHopper1?: BaseEntityState
  manualFeedHopper2?: BaseEntityState
}

export interface WaterFountainEntities {
  lowBattery?: BaseEntityState
  onAcPower?: BaseEntityState
  replaceFilter?: BaseEntityState
  waterLackWarning?: BaseEntityState
  battery?: BaseEntityState
  drinkTimes?: BaseEntityState
  energy?: BaseEntityState
  filterRemaining?: BaseEntityState
  lastBleConnection?: BaseEntityState
  lastUpdate?: BaseEntityState
  purifiedWater?: BaseEntityState
}

// Pet Specific Interfaces
export interface PetEntityState extends BaseEntityState {
  name: string
  picture?: string
}

export interface PetUsageData {
  lastLitterUsed?: BaseEntityState
  lastUseDate?: BaseEntityState
  lastUseDuration?: BaseEntityState
  lastWeightMeasurement?: BaseEntityState
}

export interface PetData {
  name: string
  entities: PetUsageData
}
