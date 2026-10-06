const filas = document.querySelectorAll('tr');

function columna(i, activa) {
  filas.forEach(tr => { if (tr.cells[i]) tr.cells[i].classList.toggle('on', activa); });
}

document.querySelectorAll('thead th, tbody td').forEach(celda => {
  if (celda.cellIndex === 0) return;
  celda.addEventListener('mouseenter', () => columna(celda.cellIndex, true));
  celda.addEventListener('mouseleave', () => columna(celda.cellIndex, false));
});
