self.addEventListener('install', (e)=>{
    e.waitUntil(
        caches
            .open('pwa-cache')
            .then(function(cache){
                return cache.add('index.html')
            })
    )
        
});

self.addEventListener('fetch', (e) =>{
    e.repondWith(
        caches 
        .match(e.request)
        .then((response) =>{
            return response || fetch(e.request);
        })
    )
})