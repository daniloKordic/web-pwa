if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration){
      console.log(registration);
    }, function(err) {
      console.log(err);
    })
  })
}