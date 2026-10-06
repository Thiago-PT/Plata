const campo = document.getElementById('gl-q');
const terminos = [...document.querySelectorAll('.glosario dt')];
const vacio = document.getElementById('gl-vacio');

function filtrar() {
  const s = campo.value.toLowerCase();
  terminos.forEach(dt => {
    const dd = dt.nextElementSibling;
    dt.hidden = dd.hidden = !(dt.textContent + ' ' + dd.textContent).toLowerCase().includes(s);
  });
  vacio.hidden = terminos.some(dt => !dt.hidden);
}
campo.addEventListener('input', filtrar);
const q = new URLSearchParams(location.search).get('q');
if (q) { campo.value = q; filtrar(); }
