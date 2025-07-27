const socket = io();
socket.emit("hey")
socket.on("hey hey", function(){
    alert("paapdi")
})