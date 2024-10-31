const sendChatBtn = document.getElementById("send-btn");
const chatInput = document.querySelector(".chat-input textarea");
const chatBox = document.querySelector(".chatbox");

//!
let userMessage;
//! add input to boxes

const createChatLi = (message, classname) => {
  //! Create chat box with passed message and classname
  const chatLi = document.createElement("li");
  chatLi.classList.add("chat", classname);

  let chatContent = classname;
  if (classname === "outgoing") {
    chatContent = `<p>${message}</p>`;
  } else {
    chatContent = `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
  }
  chatLi.innerHTML = chatContent;
  return chatLi;
};

//! get input and handle
const handleChat = () => {
  userMessage = chatInput.value.trim();
  console.log(userMessage);

  if (!userMessage) return;
  //! Append the user's message to chatbox
  chatBox.appendChild(createChatLi(userMessage, "outgoing"));
  chatInput.value = "";
};

sendChatBtn.addEventListener("click", handleChat);
