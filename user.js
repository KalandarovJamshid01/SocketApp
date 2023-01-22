let socket = io("http://localhost:3000");
const text = document.querySelector("#name");
socket.on("sendNotification", function (details) {
  $.notify("Name" + details.name, {
    autoHide: false,
    className: "success",
  });
});
