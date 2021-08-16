const connection = new WebSocket("ws://localhost:5000");
connection.binaryType = "arraybuffer";

export const getWebSocketConnection = () => connection;
