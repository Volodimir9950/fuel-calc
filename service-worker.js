self.addEventListener('instal', function (event){
    event.waitUntil(
        caches.open('calc-cache').then(function(cache){
            return cache.addAll([
                'index.html',
                'style.css',
                'mainJs.js',
                'icons/100.png',
                'icons/512.png'
            ]);
        })
    );
});
 self.addEventListener('fetch',function(event){
    event.respondWith(
        caches.match(event.request).then(function (response){
            return response || fetch(event.request);
        })
    );
 });