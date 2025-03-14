import { LitElement, TemplateResult } from "lit";
import { HomeAssistant } from "custom-card-helpers";
import { PetkitCardConfig } from "./types";
export declare class PetkitCard extends LitElement {
    hass: HomeAssistant;
    config: PetkitCardConfig;
    static getStubConfig(): Partial<PetkitCardConfig>;
    setConfig(config: Partial<PetkitCardConfig>): void;
    private getEntityState;
    private handleServiceCall;
    private handleClick;
    private handleToggle;
    private getLitterBoxEntities;
    private getWaterFountainEntities;
    private getFeederEntities;
    protected render(): TemplateResult;
    static get styles(): import("lit").CSSResult;
}
