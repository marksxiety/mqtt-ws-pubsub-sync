# mqtt-ws-pubsub-sync

This application is a real-time MQTT publish-subscribe system that uses WebSocket for communication. It allows clients to connect via WebSockets to an MQTT broker, subscribe to topics, and receive messages in real-time. The system is built with a Python script as the message publisher, Node.js as the MQTT broker server.

## Features

- **Real-time Messaging:** Uses WebSocket and MQTT for low-latency, real-time communication between clients.
- **Publish/Subscribe:** Clients can subscribe to topics and receive messages as they are published.

## Prerequisites

Before running the application, ensure you have the following installed:

### 1. **Node.js**
   - Install [Node.js](https://nodejs.org/) (version 14 or higher) to run the backend 

### 2. **npm (Node Package Manager)**
   - `npm` comes with Node.js and is used to manage project dependencies.

### 3. **Python**
   - Download and install Python from [here](https://www.python.org/downloads/).


## Project Setup

Follow these steps to get the application running locally.

### 1. **Run the Vite App (Frontend)**

To start the Vue.js frontend using Vite:

```bash
# Clone the repository
git clone https://github.com/marksxiety/mqtt-ws-pubsub-sync.git

# Navigate into the project directory
cd mqtt-ws-pubsub-sync

# Install the dependencies
npm install

# Start the node js server
node server.js

# Run the python script
python publisher.py
```