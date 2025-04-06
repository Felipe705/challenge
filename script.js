const chatButton = document.getElementById("chat-button");
const chatModal = document.getElementById("chat-modal");
const overlay = document.getElementById("overlay");

chatButton.addEventListener("click", () => {
  chatModal.style.display = "flex";
  overlay.style.display = "block";
});

overlay.addEventListener("click", () => {
  chatModal.style.display = "none";
  overlay.style.display = "none";
});

function sendMessage() {
  const input = document.getElementById("chat-input");
  const message = input.value.trim();
  if (message !== "") {
    const chatBody = document.querySelector(".chat-body");
    const p = document.createElement("p");
    p.textContent = "Você: " + message;
    chatBody.appendChild(p);
    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;
  }
}