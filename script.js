
var images = [
    "IMG-20240512-WA0017.jpg",
    "IMG-20240512-WA0006.jpg",
    "image3.jpg"
  ];
  

  var currentIndex = 0;
  

  function displayImage() {
    var cardImage = document.querySelector('.card img');
    cardImage.src = images[currentIndex];
  }
  displayImage();
  document.getElementById('next-button').addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % images.length;
    displayImage();
  });
    