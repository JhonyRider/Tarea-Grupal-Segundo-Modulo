// Seleccionamos elementos del DOM
const titulo = document.getElementById("titulo-principal");
const parrafo = document.getElementById("parrafo");
const footerText = document.getElementById("footer-text");
const btnColor = document.getElementById("btn-cambiar-color");
const btnAgregar = document.getElementById("btn-agregar-item");
const btnEliminar = document.getElementById("btn-eliminar-item");
const lista = document.getElementById("lista-dinamica");

// 1️⃣ Cambiar el contenido del título después de 2 segundos
setTimeout(() => {
  titulo.textContent = "¡Título actualizado dinámicamente con JavaScript!";
}, 2000);

// 2️⃣ Cambiar atributos de un elemento (en este caso el footer)
footerText.style.color = "gray";

// 3️⃣ Agregar interactividad para cambiar el color de fondo
btnColor.addEventListener("click", () => {
  document.body.style.backgroundColor = 
    document.body.style.backgroundColor === "lightblue" ? "white" : "lightblue";
});

// 4️⃣ Agregar un nuevo elemento a la lista
btnAgregar.addEventListener("click", () => {
  const nuevoItem = document.createElement("li");
  nuevoItem.textContent = `Nuevo elemento ${lista.children.length + 1}`;
  lista.appendChild(nuevoItem);
});

// 5️⃣ Eliminar el último elemento de la lista
btnEliminar.addEventListener("click", () => {
  if (lista.children.length > 0) {
    lista.removeChild(lista.lastElementChild);
  } else {
    alert("No hay elementos para eliminar.");
  }
});
