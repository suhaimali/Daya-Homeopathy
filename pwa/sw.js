const CACHE_NAME = 'daya-v3';

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/pwa/manifest.json',
  '/schema/schema.json',

  // Images
  '/images/logo.png',
  '/images/dh_logo.png',
  '/images/daya_about_medical_ui_1777310895553.png',
  '/images/online.jpg',
  '/images/poster daya.jpg',
  '/images/dr ashraf.jpg',
  '/images/dr jesyy m.jpeg',

  // Specialty icons
  '/images/specialties/lungs.svg',
  '/images/specialties/migraine.svg',
  '/images/specialties/child.svg',
  '/images/specialties/female.svg',
  '/images/specialties/fertility.svg',
  '/images/specialties/eczema.svg',
  '/images/specialties/depression.svg',
  '/images/specialties/acidity.svg',
  '/images/specialties/arthritis.svg',
  '/images/specialties/cancer.svg',
  '/images/specialties/oldage.svg',
  '/images/specialties/hairfall.svg',
  '/images/specialties/epilepsy.svg',
  '/images/specialties/piles.svg',
  '/images/specialties/kidney.svg',
  '/images/specialties/bph.svg',
  '/images/specialties/pcod.svg',
  '/images/specialties/counselling.svg'
];

const EXTERNAL_ASSETS = [
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@300;400;600;700&family=Plus+Jakarta+Sans:wght@300;400;600;800&family=Poppins:wght@300;400;600&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css'
];

// ─── Install: Cache all static assets ────────────────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      // Cache local assets (fail-fast on error)
      cache.addAll(STATIC_ASSETS).catch(err => console.warn('Static cache partial fail:', err));
      // Cache external assets (best-effort)
      EXTERNAL_ASSETS.forEach(url => {
        fetch(url).then(res => cache.put(url, res)).catch(() => {});
      });
    })
  );
  self.skipWaiting();
});

// ─── Activate: Remove old caches ─────────────────────────────────────────────
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => {
          console.log('Deleting old cache:', k);
          return caches.delete(k);
        })
      )
    )
  );
  self.clients.claim();
});

// ─── Fetch: Network first, cache fallback ────────────────────────────────────
self.addEventListener('fetch', event => {
  // Skip non-GET and chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) return;

  // For Google Maps (always network)
  if (event.request.url.includes('maps.googleapis.com') || event.request.url.includes('google.com/maps')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Only cache valid responses
        if (response && response.status === 200 && response.type !== 'opaque') {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        return caches.match(event.request).then(cached => {
          if (cached) return cached;
          // Offline fallback for HTML pages
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});
