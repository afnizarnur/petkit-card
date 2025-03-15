import { css } from "lit"

export const styles = css`
  :host {
    --primary-color: var(--ha-card-header-color, var(--primary-text-color));
    --secondary-color: var(--secondary-text-color);
    --background-color: var(
      --ha-card-background,
      var(--card-background-color, white)
    );
    --border-radius: var(--ha-card-border-radius, 12px);
  }

  .usage-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    align-items: center;
  }

  .content-column {
    display: flex;
    flex-direction: column;
    padding: 1.5rem 1rem 1.5rem 1.5rem;
  }

  .device-column {
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .device-illustration {
    width: 200px;
    height: auto;
    color: var(--primary-text-color);
    opacity: 0.2;
    right: -32px;
    position: relative;
  }

  .usage-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .usage-stats {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .usage-stats .label {
    font-size: 0.875rem;
    color: var(--secondary-color);
  }

  .usage-stats .value {
    font-size: 1.5rem;
    color: var(--primary-color);
  }

  .last-usage {
    display: flex;
    flex-direction: column;
  }

  .last-usage .text {
    font-size: 0.875rem;
    color: var(--primary-color);
  }

  .action-wrapper {
    margin-top: 0.5rem;
  }

  @media (max-width: 600px) {
    .usage-section {
      grid-template-columns: 1fr;
    }

    .device-column {
      order: -1;
    }

    .device-illustration {
      width: 150px;
    }
  }
`
