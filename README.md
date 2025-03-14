# Petkit Card

A custom card for Home Assistant that displays Petkit devices (smart feeders, water fountains, and cat litter boxes) in a beautiful and functional way.

## Installation

### HACS (Recommended)

1. Open HACS in your Home Assistant instance
2. Go to "Frontend" section
3. Click the "+" button
4. Search for "Petkit Card"
5. Click "Install"
6. Add the following to your `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /hacsfiles/petkit-card/petkit-card.js
```

### Manual Installation

1. Download the `petkit-card.js` file from the latest release
2. Copy it to your `config/www` directory
3. Add the following to your `configuration.yaml`:

```yaml
frontend:
  extra_module_url:
    - /local/petkit-card.js
```

4. Restart Home Assistant

## Usage

Add the card to your dashboard with the following configuration:

```yaml
type: custom:petkit-card
device_type: litter_box    # Type of Petkit device (litter_box, feeder, or water_fountain)
device_prefix: litter_box  # The prefix of your Petkit device entities
title: My Litter Box      # Optional: custom title
```

## Features

### Litter Box
- Display device status and warnings
- Show litter level, usage statistics, and deodorant status
- Quick controls for power, auto-clean, and light
- Action buttons for manual scooping and deodorizing
- Warning indicators for:
  - Waste bin full
  - Low litter level
  - Low deodorizer level

### Feeder (Coming Soon)
- Device status
- Food level monitoring
- Feeding schedule
- Manual feed control
- Power control

### Water Fountain (Coming Soon)
- Device status
- Water level monitoring
- Filter life tracking
- Pump speed control
- Power control

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| device_type | string | **Required** | Type of Petkit device (`litter_box`, `feeder`, or `water_fountain`) |
| device_prefix | string | **Required** | The prefix of your Petkit device entities (e.g., "litter_box") |
| title | string | Petkit Device | Custom title for the card |

## Development

1. Clone this repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run watch
```

4. Add the resource in Home Assistant:
   - **Method 1**: Through the UI
     1. Go to your dashboard
     2. Click three dots menu in top right
     3. Click 'Edit Dashboard'
     4. Click 'Manage Resources' in top right
     5. Click 'Add Resource'
     6. Add this URL: `http://localhost:5001/petkit-card.js`
     7. Select 'JavaScript Module' as the resource type
   
   - **Method 2**: Through YAML
     Add to your `ui-lovelace.yaml` (if using YAML mode):
     ```yaml
     resources:
       - url: http://localhost:5001/petkit-card.js
         type: module
     ```

## Contributing

Feel free to submit issues and pull requests!

## License

This project is under the MIT License. 