// Service worker mínimo: habilita la instalación como PWA sin cachear
// contenido, así la app siempre carga la última versión publicada.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
