const formulari = document.getElementById('formulari');
const llista = document.getElementById('missatges');

// Carregar dades del localStorage
const missatgesGuardats = JSON.parse(localStorage.getItem('missatges')) || [];
missatgesGuardats.forEach(m => mostrarMissatge(m));

// Manejar el envío
formulari.addEventListener('submit', function (e) {
  e.preventDefault();
  const missatge = {
    nom: this.nom.value,
    email: this.email.value,
    missatge: this.missatge.value
  };
  missatgesGuardats.push(missatge);
  localStorage.setItem('missatges', JSON.stringify(missatgesGuardats));
  mostrarMissatge(missatge);
  this.reset();
});

// Mostrar un missatge a la llista
function mostrarMissatge(m) {
  const li = document.createElement('li');
  li.textContent = `${m.nom} (${m.email}): ${m.missatge}`;
  llista.appendChild(li);
}
