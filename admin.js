let socket = io("http://localhost:3000");
let btn = document.querySelector("#sendNotification");
btn.addEventListener("click", () => {
  let name = document.querySelector("#name");
  let email = document.querySelector("email");
  socket.emit("sendNotification", { name: name, email: email });
});
