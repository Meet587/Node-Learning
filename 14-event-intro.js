const eventEmmiter = require("events");

const customeevent = new eventEmmiter();

customeevent.on("responce", (name, num) => {
  console.log(`${name} ${num}`);
});
customeevent.on("responce", () => {
  console.log("on event call 2");
});

customeevent.emit("responce", "Meet", 35);
