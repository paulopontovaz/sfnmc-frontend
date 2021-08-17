export const getWebSocketConnection = () => {
  const connection = new WebSocket("ws://localhost:5000");
  connection.binaryType = "arraybuffer";
  return connection;
};
