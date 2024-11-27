// Selecciona el botón y el párrafo
const button = document.getElementById("myfistbutton");
const message = document.getElementById("message");

// Agrega un evento de clic
button.addEventListener("click", function () {
  message.textContent = "¡Botón presionado!";
});
