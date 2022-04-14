const kids = ["Luke", "Alleigh", "Amelia"]; // array of the OTB

// shuffling the names around
const kidsShuffle = kids.sort((a, b) => 0.5 - Math.random());

// These are encouraging quotes for the kids
const quotes = [
    "We love being your parent!",
    "You are a very important part of our family!",
    "We are proud of who you are!",
    "We like when you share your ideas with us!",
    "We are thankful for you!",
    "We enjoy being around you!",
    "You matter to us!",
    "We appreciate your help!",
    "We love laughing with you!",
];

function group() {
    getReady(kids);
    generateQuote();
};


function getReady() {

  document.getElementById('first').innerHTML = "Well, looky here, " + kidsShuffle[0]
  + "! You get to get ready for bed first! Congratulations to you " + kidsShuffle[0] + "!";
  document.getElementById('second').innerHTML = "Hey, Hey, Hey, "  + kidsShuffle[1] + "! You get to go next! ";
  document.getElementById('third').innerHTML = "Last, but certainly, not least! " + kidsShuffle[2] + ", it is time to get ready for bed!";
 };





function generateQuote() {
    document.getElementById('quote').innerHTML =
     quotes[Math.floor(Math.random() * quotes.length)];
};
