# Voice Command Recognition with SpeechRecognition API

This repository contains a simple implementation of voice command recognition using the SpeechRecognition API in JavaScript. The implementation allows users to interact with a webpage by speaking specific commands. These commands trigger various actions, such as opening URLs, changing background colors, telling jokes, performing web searches, and displaying the local time based on IP address.

## Features

- Recognizes voice commands and triggers corresponding actions.
- Supports custom commands for tasks like opening URLs, changing background colors, telling jokes, performing web searches, and displaying local time.
- Utilizes the SpeechRecognition API to capture and process spoken commands.
- Demonstrates integration with external APIs to fetch the local time based on IP address.

## Requirements

- A web browser that supports the SpeechRecognition API. Supported browsers include Google Chrome, Mozilla Firefox, and Microsoft Edge.

## Getting Started

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. Grant permission for the browser to access your microphone when prompted.
4. Start speaking voice commands to interact with the webpage.

## Usage

1. Open the webpage in your browser.
2. Click the "Start Listening" button to begin voice command recognition.
3. Speak one of the supported commands to trigger an action:
   - To open a website, say "Open" followed by the URL.
   - To change the background color, say "Change background to" followed by the desired color.
   - To hear a joke, say "Tell me a joke."
   - To perform a web search, say "Search for" followed by your query.
   - To check the local time, say "What time is it."

## Customization

You can customize and expand the list of supported voice commands and actions by modifying the `startListening` function in the `index.js` file. Add new if-else conditions to handle additional commands and actions as needed.

## Dependencies

- None for the core functionality. The sample code uses the `SpeechRecognition` API, which is built into modern browsers.




