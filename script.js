const formulario = document.getElementById('formulario');
const lista = document.getElementById('mensajes');

// Cargar datos del localStorage
const mensajesGuardados = JSON.parse(localStorage.getItem('mensajes')) || [];
mensajesGuardados.forEach(m => mostrarMensaje(m));

// Manejar el envío
formulario.addEventListener('submit', function (e) {
  e.preventDefault();
  const mensaje = {
    nombre: this.nombre.value,
    email: this.email.value,
    mensaje: this.mensaje.value
  };
  mensajesGuardados.push(mensaje);
  localStorage.setItem('mensajes', JSON.stringify(mensajesGuardados));
  mostrarMensaje(mensaje);
  this.reset();
});

// Mostrar un mensaje en la lista
function mostrarMensaje(m) {
  const li = document.createElement('li');
  li.textContent = `${m.nombre} (${m.email}): ${m.mensaje}`;
  lista.appendChild(li);
}
