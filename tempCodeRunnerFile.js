Element.classList.add(position);
  messageContainer.append(messageElement);
  if(position == 'left'){
      audio.play();

  }
  
};
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const message = messageInput.value;