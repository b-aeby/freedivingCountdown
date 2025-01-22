// todo: 'install' event is for old caches deletion. use it?
// todo: split filesToCache in two arrays for easy configuration and merge them
// todo: use typescript. referernces:
// https://github.com/DefinitelyTyped/DefinitelyTyped/tree/HEAD/service_worker_api

var cacheName = 'fridivingCountdown';

var filesToCache = [

  // infrastructure files ----------------------------------------------------------------------------------------------
  '/',
  'index.html',
  'sw.js',
  'manifest.json',
  'favicon.png',
  //--------------------------------------------------------------------------------------------------------------------

  // app files ---------------------------------------------------------------------------------------------------------
  // 'page2.html',
  'css/styles.css',
  // 'img/header.jpg',
  'img/offline-img.png',
  // 'https://fonts.googleapis.com/css?family=Raleway',
  'js/freedivingCountdown.js',
  // -------------------------------------------------------------------------------------------------------------------

  // vendor files ------------------------------------------------------------------------------------------------------
  // - easytimer
  'vendor/easytimer/easytimer.min.js',
  // - jquery
  'vendor/jquery/jquery-3.7.1.min.js',
  // BOOTSTRAP
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js',
  // -------------------------------------------------------------------------------------------------------------------

  // Audio files
  'otm120.mp3',
  'otm90.mp3',
  'otm60.mp3',
  'otm30.mp3',
  'otm20.mp3',
  'otm20.mp3',
  'otm10.mp3',
  'otm5.mp3',
  'otm4.mp3',
  'otm3.mp3',
  'otm2.mp3',
  'otm1.mp3',
  'ot.mp3',
  'otp1.mp3',
  'otp2.mp3',
  'otp3.mp3',
  'otp4.mp3',
  'otp5.mp3',
  'otp6.mp3',
  'otp7.mp3',
  'otp8.mp3',
  'otp9.mp3',
  'otp10.mp3',
  'otp20.mp3',
  'otp25.mp3',
  'otp26.mp3',
  'otp27.mp3',
  'otp28.mp3',
  'otp29.mp3',
  'otp30.mp3',
  'otp31.mp3',

  // fonts:
  'fonts/DigitalNumbers-Regular.ttf',
];

// todo: check if service worker is installed before
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js').then(function() {
    console.log('sw: registration ok');
  }).catch(function(err) {
    console.error(err);
  });
}
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Install' event. Writing files to browser cache
 *
 * @param {string} Event name ('install')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('sw: writing files into cache');
      return cache.addAll(filesToCache);
    })
  )
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Activate' event. Service worker is activated
 *
 * @param {string} Event name ('activate')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('activate', function (event) {
  console.log('sw: service worker ready and activated', event);
});
// ---------------------------------------------------------------------------------------------------------------------
/**
 * 'Fetch' event. Browser tries to get resources making a request
 *
 * @param {string} Event name ('fetch')
 * @param {function} Callback function with event data
 *
 */
self.addEventListener('fetch', function(event) {
  event.respondWith(
    // test if the request is cached
    caches.match(event.request).then(function(response) {
      // 1) if response cached, it will be returned from browser cache
      // 2) if response not cached, fetch resource from network
      return response || fetch(event.request);
    }).catch(function (err) {
      // if response not cached and network not available an error is thrown => return fallback image
      return caches.match('img/offline-img.png');
    })
  )
});
// ---------------------------------------------------------------------------------------------------------------------
async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      const cache = await caches.open("fridivingCountdown");
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || Response.error();
  }
}

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  event.respondWith(networkFirst(event.request));
});
