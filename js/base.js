const INDICE = [
 {
  "label": "Cascada (Waterfall)",
  "tipo": "Metodología",
  "url": "cascada.html",
  "texto": "cascada (waterfall) modelo secuencial: cada fase termina por completo antes de empezar la siguiente. lo describió winston royce en 1970. fases lineales, sin traslape entre ellas. documentación completa en cada etapa. requisitos fijados al inicio; el cliente ve el producto al final. fácil de entender y de planificar. costos y tiempos predecibles. deja documentación sólida para el mantenimiento. cambiar algo a mitad del camino es muy costoso. los errores aparecen tarde, en las pruebas. el cliente no ve avances hasta el final."
 },
 {
  "label": "Scrum",
  "tipo": "Metodología",
  "url": "scrum.html",
  "texto": "scrum marco ágil que divide el trabajo en sprints de 1 a 4 semanas y entrega un incremento funcional en cada uno. tres roles: product owner, scrum master y equipo de desarrollo. sprints de duración fija con eventos regulares. equipos pequeños que se autoorganizan. entrega valor al cliente cada pocas semanas. se adapta a los cambios entre sprints. la retrospectiva impulsa la mejora continua. exige disciplina y compromiso de todo el equipo. escala con dificultad a equipos grandes. si el product owner falla, se pierde el rumbo."
 },
 {
  "label": "Kanban",
  "tipo": "Metodología",
  "url": "kanban.html",
  "texto": "kanban método que muestra el trabajo en un tablero y limita las tareas simultáneas para que el flujo no se atasque. nació en toyota y david j. anderson lo adaptó al software. sin roles ni iteraciones obligatorias. límites wip que evitan la multitarea. entrega continua, tarea por tarea. se adopta sobre el proceso que ya existe. hace visibles los cuellos de botella. admite cambios de prioridad en cualquier momento. sin plazos fijos puede faltar sentido de urgencia. un tablero desordenado deja de servir. poca ayuda para planificar a largo plazo."
 },
 {
  "label": "DevOps",
  "tipo": "Metodología",
  "url": "devops.html",
  "texto": "devops cultura y prácticas que unen desarrollo (dev) y operaciones (ops) para entregar software con rapidez, automatización y confiabilidad. colaboración entre desarrollo y operaciones. automatización con ci/cd e infraestructura como código. monitoreo constante y retroalimentación rápida. lanzamientos más frecuentes y con menos errores. recuperación veloz ante fallos. mejor comunicación entre equipos. requiere un cambio cultural profundo. curva de aprendizaje alta en herramientas. necesita inversión inicial en automatización."
 },
 {
  "label": "Scrumban",
  "tipo": "Metodología",
  "url": "scrumban.html",
  "texto": "scrumban combina los roles y reuniones de scrum con el tablero y los límites wip de kanban. nació como puente para equipos que migran de scrum a flujo continuo. mezcla la estructura de scrum con el flujo de kanban. planificación bajo demanda, sin sprints obligatorios. tablero visual con límites wip. flexibilidad sin perder del todo la estructura. buen balance entre planificación y flujo. transición sencilla desde scrum. no existe una guía oficial única. sin reglas claras puede volverse ambiguo. exige equipos con algo de experiencia."
 },
 {
  "label": "Backlog",
  "tipo": "Glosario",
  "url": "glosario.html?q=Backlog",
  "texto": "backlog lista priorizada de tareas o funcionalidades pendientes de un producto."
 },
 {
  "label": "Sprint",
  "tipo": "Glosario",
  "url": "glosario.html?q=Sprint",
  "texto": "sprint periodo fijo, de una a cuatro semanas, en el que scrum entrega un incremento."
 },
 {
  "label": "Incremento",
  "tipo": "Glosario",
  "url": "glosario.html?q=Incremento",
  "texto": "incremento parte funcional del producto terminada al final de una iteración."
 },
 {
  "label": "Product Owner",
  "tipo": "Glosario",
  "url": "glosario.html?q=Product%20Owner",
  "texto": "product owner rol de scrum que representa al cliente y prioriza el backlog."
 },
 {
  "label": "Scrum Master",
  "tipo": "Glosario",
  "url": "glosario.html?q=Scrum%20Master",
  "texto": "scrum master rol que facilita el proceso scrum y elimina obstáculos del equipo."
 },
 {
  "label": "WIP (Work In Progress)",
  "tipo": "Glosario",
  "url": "glosario.html?q=WIP%20(Work%20In%20Progress)",
  "texto": "wip (work in progress) cantidad de tareas en ejecución al mismo tiempo."
 },
 {
  "label": "Cuello de botella",
  "tipo": "Glosario",
  "url": "glosario.html?q=Cuello%20de%20botella",
  "texto": "cuello de botella punto del proceso donde el trabajo se acumula y frena el flujo."
 },
 {
  "label": "Tiempo de ciclo",
  "tipo": "Glosario",
  "url": "glosario.html?q=Tiempo%20de%20ciclo",
  "texto": "tiempo de ciclo tiempo que tarda una tarea desde que inicia hasta que termina."
 },
 {
  "label": "CI/CD",
  "tipo": "Glosario",
  "url": "glosario.html?q=CI%2FCD",
  "texto": "ci/cd integración y entrega continuas: automatizan la compilación, las pruebas y el despliegue."
 },
 {
  "label": "Infraestructura como código",
  "tipo": "Glosario",
  "url": "glosario.html?q=Infraestructura%20como%20c%C3%B3digo",
  "texto": "infraestructura como código gestión de servidores y redes mediante archivos de configuración versionables."
 },
 {
  "label": "Ágil",
  "tipo": "Glosario",
  "url": "glosario.html?q=%C3%81gil",
  "texto": "ágil enfoque que prioriza la adaptación al cambio, la colaboración y las entregas frecuentes."
 },
 {
  "label": "Despliegue",
  "tipo": "Glosario",
  "url": "glosario.html?q=Despliegue",
  "texto": "despliegue proceso de poner una versión del software a disposición de los usuarios."
 }
];

const burger = document.getElementById('burger');
const buscar = document.getElementById('buscar');
const resultados = document.getElementById('resultados');

function menu(abrir) {
  document.body.classList.toggle('menu-abierto', abrir);
  burger.setAttribute('aria-expanded', abrir);
  if (abrir) buscar.focus();
}
burger.addEventListener('click', () => menu(!document.body.classList.contains('menu-abierto')));
document.getElementById('scrim').addEventListener('click', () => menu(false));
document.addEventListener('keydown', e => { if (e.key === 'Escape') menu(false); });

buscar.addEventListener('input', () => {
  const q = buscar.value.trim().toLowerCase();
  if (!q) { resultados.innerHTML = ''; return; }
  const r = INDICE.filter(i => i.texto.includes(q)).slice(0, 8);
  resultados.innerHTML = r.length
    ? r.map(i => '<a href="' + i.url + '"><b>' + i.label + '</b> <small>' + i.tipo + '</small></a>').join('')
    : '<p class="vacio">Sin resultados. Prueba con "sprint" o "WIP".</p>';
});
