
// self.addEventListener('fetch', function (event) { // 操作请求路径
//     console.count('service worker fetch 触发：')
//     if(/\.jpeg$/.test(event.request.url)) {
//         event.respondWith(fetch('0.jpg'))
//     }
// })

const CACHE_VERSION = 'v1'
// self.addEventListener('install', function (event) {
//     event.waitUtil()
// })
self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.open(CACHE_VERSION).then(cache => {
            return cache.match(event.request).then(function (response) {
                var fetchPromise = fetch(event.request).then(function (networkResponse) {
                    cache.put(event.request, networkResponse.clone())
                    return networkResponse
                })
                return response || fetchPromise
            })
        })
    )
})