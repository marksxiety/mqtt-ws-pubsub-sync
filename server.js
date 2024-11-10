const http = require("http");
const ws = require("ws");
const net = require("net");

const MQTT_PORT = 1883;
const WS_PORT = 8080;

// aedes as broker since its Node.js-based MQTT
const aedes = require("aedes")();

// Create the MQTT server (TCP)
const server = net.createServer(aedes.handle);

server.listen(MQTT_PORT, function () {
  console.log(`Broker running on port ${MQTT_PORT}`);
});

// create a server for http for usage in websocket server
const httpServer = http.createServer();
const wss = new ws.Server({ server: httpServer, path: "/mqtt" });

// connection for WebSocket
wss.on("connection", function (socket) {
  try {
    const stream = ws.createWebSocketStream(socket);
    // Use Aedes MQTT broker to handle the WebSocket connection
    aedes.handle(stream);
    console.log("Client connected via WebSocket");
  } catch (error) {
    //close the WebSocket if the connection is not successful
    console.error("Error handling WebSocket connection:", error);
    socket.close();
  }
});

httpServer.listen(WS_PORT, function () {
  console.log(`WebSocket listening in ws://localhost:8080/mqtt`);
});
