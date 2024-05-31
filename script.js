var images = [
  "IMG-20240512-WA0017.jpg",
  "IMG-20240512-WA0006.jpg",
  "image3.jpg"
];

var stas = [
  "4",
  "5",
  "7"
];

var startingI = 0;
var currentIndex = 0;

function displayImage() {
  var cardImage = document.querySelector('.card img');
  cardImage.src = images[currentIndex];
}

displayImage();

function displaystats() {
  var cardstat = document.querySelector('.card-overlay');
  cardstat.textContent = stas[startingI]; // Set text content instead of src
}

displaystats();

document.getElementById('next-button').addEventListener('click', function() {
  currentIndex = (currentIndex + 1) % images.length;
  displayImage();
  startingI = (startingI + 1) % stas.length; // Corrected typo
  displaystats();
});

var modal = document.getElementById("bid-modal");

var btn = document.getElementById("set-amount-button");

var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

document.getElementById("bid-form").onsubmit = function(event) {
  event.preventDefault();
  var selectedTeam = document.getElementById("team-select").value;
  var bidAmount = document.getElementById("amount-input").value;
  // Here you can handle saving the bid amount for the selected team
  console.log("Selected Team:", selectedTeam);
  console.log("Bid Amount:", bidAmount);
  // Close the modal after submission
  modal.style.display = "none";
}
