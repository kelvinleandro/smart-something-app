# Smart Car App

## Overview
This is a React Native project developed using TypeScript and Expo. It is a smart car application that allows users to interact with and monitor various car devices. The app currently supports the following devices:

1. **Air Conditioner**: View the current state and set the desired level.
2. **Car Location**: Display the car's current location on a map.
3. **Headlight**: Toggle the headlights on or off.

The app communicates with a gateway via TCP sockets, which in turn interfaces with the car devices. The gateway and devices are managed in a [separate repository](https://github.com/MateusSantos14/TrabalhoSistemasDistribuidos).

## Features
- **Device State Monitoring**: Users can view the current state of supported devices.
- **Device Control**: Users can control the air conditioner level and toggle the headlights.
- **Car Location Map**: The car's location is displayed on an interactive map using [`react-native-maps`](https://github.com/react-native-maps/react-native-maps).
- **Theme Support**: The app includes a theme switcher with smooth animations (like Telegram animation) using [`react-native-theme-switch-animation`](https://github.com/WadhahEssam/react-native-theme-switch-animation).
- **Protocol Buffers**: All communication (client ⇒ gateway and gateway ⇒ device) uses protocol buffers, implemented in the app with [`protobufjs`](https://github.com/protobufjs/protobuf.js).

## Prerequisites

Since the app uses `react-native-maps` and `react-native-theme-switch-animation`, it is incompatible with Expo Go. You must build the app locally to run it. Additionally, to enable the map functionality, you need to configure the Google Maps API key.

### Requirements
- Node.js
- Expo CLI
- React Native development environment (Android/iOS)
- Google Maps API Key
- `.env` file with the gateway IP and port configured (see `.env.example`)

> **Note**: Without a properly configured `.env` file, the app will default to using a TCP echo server ([`tcpbin`](https://tcpbin.com/)), which disables full functionality.

## Installation
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/kelvinleandro/smart-something-app
   cd smart-something-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure the Google Maps API Key**:
   - Copy the `android/local.properties.example` file and rename it to `local.properties`:
      ```bash
         cp android/local.properties.example android/local.properties
      ```
   - Edit the `android/local.properties` file to include your Google Maps API key:
      ```
      GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
      ```

4. **Build the Project**:
   ```bash
   npx expo run:android # For Android
   npx expo run:ios     # For iOS (requires macOS)
   ```

## Usage
1. Launch the app on your device or emulator.
2. On the initial screen, enter the gateway's host and port to establish a connection.
3. Interact with the car devices via the user interface:
   - Adjust the air conditioner level.
   - Toggle the headlights.
   - View the car's current location on the map.

## Testing with Static Data

To test the app without a server connection, switch to the `static-version` branch. This version includes static data to simulate device interactions and car location.

```bash
git checkout static-version
```

## Technologies Used
- **React Native**
- **Expo**
- **TypeScript**
- **react-native-maps**: For map display.
- **protobufjs**: For protocol buffer communication.

## Notes
- Ensure the gateway is running and connected to the devices before using the app.
- For further details on the gateway and device setup, refer to the [gateway repository](https://github.com/MateusSantos14/TrabalhoSistemasDistribuidos).

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.
