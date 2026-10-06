const chips = document.querySelectorAll('.chip');
const tarjetas = document.querySelectorAll('.tarj');
chips.forEach(chip => chip.addEventListener('click', () => {
  chips.forEach(c => c.setAttribute('aria-pressed', 'false'));
  chip.setAttribute('aria-pressed', 'true');
  tarjetas.forEach(t => { t.hidden = chip.dataset.g !== 'Todas' && t.dataset.grupo !== chip.dataset.g; });
}));
