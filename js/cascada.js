const elementos = document.querySelectorAll('[data-paso]');
const enDiagrama = document.querySelectorAll('.dg [data-paso]');

function resaltar(numero, activo) {
  elementos.forEach(el => {
    if (el.dataset.paso === numero) el.classList.toggle('on', activo);
  });
}

function irAlPaso(numero) {
  const destino = document.querySelector('.pasos li[data-paso="' + numero + '"]');
  const suave = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  destino.scrollIntoView({ behavior: suave ? 'smooth' : 'auto', block: 'center' });
  destino.classList.remove('destello');
  void destino.offsetWidth;
  destino.classList.add('destello');
  setTimeout(() => destino.classList.remove('destello'), 1900);
}

elementos.forEach(el => {
  el.addEventListener('mouseenter', () => resaltar(el.dataset.paso, true));
  el.addEventListener('mouseleave', () => resaltar(el.dataset.paso, false));
});

enDiagrama.forEach(el => {
  el.tabIndex = 0;
  el.setAttribute('role', 'link');
  el.setAttribute('aria-label', 'Ir al paso ' + (Number(el.dataset.paso) + 1));
  el.addEventListener('click', () => irAlPaso(el.dataset.paso));
  el.addEventListener('keydown', e => { if (e.key === 'Enter') irAlPaso(el.dataset.paso); });
});
