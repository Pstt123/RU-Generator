importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.0.0/workbox-sw.js');

if (workbox) {
    workbox.routing.registerRoute(
        new RegExp('https://randomuser.me/api/'),
        new workbox.strategies.NetworkFirst()
    );
}