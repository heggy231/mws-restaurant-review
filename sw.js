self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(
        [
          '/css/styles.css',
          '/js/dbhelper.js',
          '/js/main.js',
          '/js/restaurant_info.js',
          '/index.html',
          '/restaurant.html',
          '/data/restaurant.json'
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log(event);
});