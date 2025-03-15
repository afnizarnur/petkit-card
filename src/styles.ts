import { css } from "lit"

export const styles = css`
  :host {
    --warning-color: var(--error-color, #db4437);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    color: var(--ha-card-header-color, --primary-text-color);
  }

  .status {
    font-size: 0.8em;
    padding: 4px 8px;
    border-radius: 4px;
    background: var(--secondary-background-color);
    text-transform: capitalize;
  }

  .status.working {
    background: var(--success-color);
    color: white;
  }

  .card-content {
    padding: 16px;
  }

  .warnings {
    margin-bottom: 16px;
    padding: 8px;
    border-radius: 4px;
    background: var(--warning-color);
    color: white;
  }

  .warning {
    padding: 4px 8px;
  }

  .info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }

  .info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 8px;
    background: var(--secondary-background-color);
    border-radius: 4px;
  }

  .label {
    font-size: 0.9em;
    color: var(--secondary-text-color);
    margin-bottom: 4px;
  }

  .value {
    font-size: 1.2em;
    font-weight: 500;
  }

  .controls {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .switches {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .switch {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .buttons {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }

  mwc-button {
    width: 100%;
  }

  .not-found {
    padding: 16px;
    text-align: center;
    color: var(--error-color);
  }

  .sub-value {
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }

  .last-update {
    margin-top: 16px;
    text-align: center;
    font-size: 0.8em;
    color: var(--secondary-text-color);
  }

  .section-title {
    font-weight: 500;
    margin: 16px 0 8px;
    color: var(--primary-text-color);
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 16px;
  }

  .stats-item {
    background: var(--secondary-background-color);
    border-radius: 4px;
    padding: 8px;
  }

  .stats-header {
    font-weight: 500;
    text-align: center;
    margin-bottom: 8px;
    color: var(--primary-text-color);
  }

  .stats-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.9em;
    padding: 2px 0;
  }

  .pet-info {
    margin-top: 1.5rem;
    padding: 1rem;
    background: var(--ha-card-background, var(--card-background-color, white));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
  }

  .pet-info .pet-name {
    margin: 0 0 1rem;
    font-size: 1.1rem;
    font-weight: 500;
    color: var(--primary-text-color);
  }

  .pet-info .info-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }

  .pet-info .info-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .pet-info .info-item .sub-value {
    font-size: 0.8rem;
    color: var(--secondary-text-color);
    margin-top: 0.25rem;
  }
`
