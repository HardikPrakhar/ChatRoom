const socket = io("https://hardikprakhar.github.io/ChatRoom/:8000");

const name = prompt("Enter your name to join");
socket.emit("new-user-joined", name);
socket.on("user-joined", name => {
  append(`${name} joined the chat`, "center");
});



const form = document.getElementById("send-container");
const messageInput = document.getElementById("messageInp");
const messageContainer = document.querySelector(".container");
var audio = new Audio('iphone_sms_original.mp3');



const append = (message, position) => {
  const messageElement = document.createElement("div");
  messageElement.innerText = message;
  messageElement.classList.add("message");
  messageElement.classList.add(position);
  messageContainer.append(messageElement);
  if(position == 'left'){
      audio.play();

  }
};



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`,'right')
    socket.emit('send',message);
    messageInput.value = '';

})

socket.on('receive', data => {
  append(`${data.name}:${data.message}`, 'left');
});

socket.on('left', name => {
  append(`${name} left the chat`, 'center');
});

function myFunction() {
        var element = document.body;
        element.classList.toggle("dark");
        }


