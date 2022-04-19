let word;     // Selected catagory
let randomWord;
let categories;
let categoryName;
chooseCategory();
selectCat();
console.log(randomWord);
word = randomWord.toUpperCase();


let revealedLetters = new Array(word.length);
revealedLetters.fill(false);


const maxStrikes = 6; 
let strikes = 0;
let strikeLetters = new Array(maxStrikes);


drawWordProgress(); 
document.getElementById("input-guess").focus();
function reload() {
    location.reload();
}

function chooseCategory() {
    categories = [
        ["dallas-cowboys", "new-england-patriots", "minnesota-vikings", "philadelphia-eagles", "washington-commanders", "cincinnati-bengals", "denver-broncos"],
        ["varsity-blues", "space-jam", "caddyshack", "red-notice", "the-batman", "lethal-weapon", "rush-hour"],
        ["cairo", "istanbul", "barcelona", "dallas", "prague"]
    ];
    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    randomWord = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    randomWord = randomWord.replace(/\s/g, "-");
    console.log(randomWord);
}

// Select Catagory
function selectCat() {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "The Chosen Category Is NFL Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "The Chosen Category Is Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "The Chosen Category Is Cities";
    }
  }

function drawStrikeLetters() {
  let currentStrike = "";
  for(let i = 0; i < strikeLetters.length; i++) {
    if(typeof (strikeLetters[i]) != "undefined") {
        currentStrike += strikeLetters[i];
    }
  }
  document.getElementById("strike-word").innerHTML = currentStrike;
  drawWordProgress(); 
}

function drawWordProgress() {
  let currentWord = "";
  for(let i=0; i<revealedLetters.length; i++) {
    if(revealedLetters[i] === true) {
      currentWord += word.charAt(i);
      currentWord += " ";
    } else {
      currentWord += "_ ";
    }
  }
  document.getElementById("progress-word").innerHTML = currentWord;
}

function drawGallows() {
  document.getElementById("gallows-img").src = "images/strike-" + strikes + ".png";
}

function processGuess(e) {
  e.preventDefault();
  let guess = document.getElementById("input-guess").value.toUpperCase();
  console.log(guess);
  let found = false;
  if(strikes < maxStrikes) {
    console.log(word.length);
    for(let i = 0; i<word.length; i++) {
        console.log(word[i] + " = " + guess);
       if(word[i] === guess) {
         revealedLetters[i] = true;
         found = true;
       } 
    }
    if(found) {
      let counter = 0;
      for(let i=0; i<revealedLetters.length; i++) {
        if(revealedLetters[i] === true) {
          counter++;
        }
      }
      if(counter === word.length) {
        alert("Computer has won!");
        document.getElementById("input-guess").disabled = true;
        document.getElementById("submit").disabled = true;
      }
    } else {
      strikeLetters[strikes++] = guess;
      drawGallows();
      drawStrikeLetters();
    }
    drawWordProgress();
  } else {
    alert("The game is over!");
  }
  document.getElementById("input-guess").value = '';
  document.getElementById("input-guess").focus();
}