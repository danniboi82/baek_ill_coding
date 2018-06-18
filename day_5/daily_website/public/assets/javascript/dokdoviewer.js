window.addEventListener('DOMContentLoaded', function () {
    var gallery = document.getElementById('dokdo-img-section');
    var viewer = new Viewer(gallery, {
      url: 'data-original',
      toolbar: {
        oneToOne: true,
        prev: function() {
          viewer.prev(true);
        },
        play: true,
        next: function() {
          viewer.next(true);
        },
        download: function() {
          const a = document.createElement('a');

          a.href = viewer.image.src;
          a.download = viewer.image.alt;
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
      },
    });
  });