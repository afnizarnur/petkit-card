import { LitElement } from "lit";
import { HomeAssistant } from "custom-card-helpers";
export declare class PetkitCard extends LitElement {
    hass: HomeAssistant;
    config: any;
    static getStubConfig(): {
        entity: string;
        name: string;
        show_name: boolean;
        show_status: boolean;
    };
    setConfig(config: any): void;
    protected render(): import("lit-html").TemplateResult<1>;
    static get styles(): import("lit").CSSResult;
}
