const kids = ["Luke", "Alleigh", "Amelia"];

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
]

function group() {
    getReady();
    generateQuote();
};


function getReady() {
 document.getElementById('list').innerHTML = "Congratulations "
 + kids[Math.floor(Math.random()* kids.length)] +
  "! You have the opporutnity to get ready for bed first.";
};

function generateQuote() {
    document.getElementById('quote').innerHTML =
     quotes[Math.floor(Math.random() * quotes.length)];
};
