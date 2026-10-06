const boton = document.getElementById('copiar');
boton.addEventListener('click', async () => {
  const texto = [...document.querySelectorAll('.refs li')].map(li => li.textContent).join('\n\n');
  try { await navigator.clipboard.writeText(texto); boton.textContent = 'Copiadas'; }
  catch { boton.textContent = 'Selecciona y copia manualmente'; }
});
