/* Alte Adresse envilog.app/app/ (bis 2026-11-10): Abloese-Service-Worker. Wird von make/publish_pages.ps1
 * nach /app/sw.js kopiert.
 *
 * Die alte App unter /app/ fragt beim Start und stuendlich sw.js ab und findet diesen Worker. Er uebernimmt sofort
 * (skipWaiting), dadurch meldet die alte Seite "neue Version" (controllerchange -> bdOnSwUpdate: neu laden bzw. bei
 * verbundenem Logger nur der Knopf "Update verfuegbar"). Er beantwortet keine Anfragen selbst, also kommt beim
 * Neuladen die Weiterleitung /app/index.html -> envilog.app/ aus dem Netz. Danach meldet er sich ab.
 * Alte Caches raeumt der neue Service Worker unter / auf (gleicher Cache-Praefix).
 */
self.addEventListener('install', function () {
    self.skipWaiting();
});

self.addEventListener('activate', function (event) {
    event.waitUntil(self.registration.unregister());
});
