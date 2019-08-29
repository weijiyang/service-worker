self.addEventListener('fetch', function (event) {
    console.count('service worker fetch 触发：')
    if(/\.jpeg$/.test(event.request.url)) {
        event.respondWith(fetch('0.jpg'))
    }
})