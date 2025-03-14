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
lovelace:
  resources:
    - url: /hacsfiles/petkit-card/petkit-card.js
      type: module
```

### Manual Installation

1. Download the `petkit-card.js` file from the latest release
2. Copy it to your `config/www` directory
3. Add the following to your `configuration.yaml`:

```yaml
lovelace:
  resources:
    - url: /local/petkit-card.js
      type: module
```

## Usage

Add the card to your dashboard with the following configuration:

```yaml
type: custom:petkit-card
entity: sensor.petkit_device # Replace with your entity
name: My Petkit Device # Optional: custom name
show_name: true # Optional: show/hide name
show_status: true # Optional: show/hide status
```

## Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | **Required** | Home Assistant entity ID |
| name | string | Petkit Device | Name to display for the device |
| show_name | boolean | true | Show/hide the name |
| show_status | boolean | true | Show/hide the status |

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

4. Add the following to your Home Assistant's Lovelace configuration:
```yaml
resources:
  - url: http://localhost:5000/petkit-card.js
    type: module
```

## Contributing

Feel free to submit issues and pull requests!

## License

This project is under the MIT License. 