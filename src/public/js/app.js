const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open", () => {
  console.log("Connected to Server");
});

socket.addEventListener("message", (message) => {
  console.log("Just got this: ", message.data, "from the Server");
});

socket.addEventListener("close", () => {
  console.log("xxx");
});

setTimeout(() => {
  socket.send("hello from the browser!");
}, 10000);
