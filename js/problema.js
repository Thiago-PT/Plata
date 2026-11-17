(function () {
    const caja = document.getElementById('video-pitch');
    if (!caja) return;
    const url = (caja.dataset.url || '').trim();
    const m = url.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    if (!m) return;
    const f = document.createElement('iframe');
    f.src = 'https://www.youtube.com/embed/' + m[1];
    f.title = 'Elevator pitch de RutaYa';
    f.loading = 'lazy';
    f.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    f.allowFullscreen = true;
    caja.replaceChildren(f);
})();
