// Paraules en català per al joc del penjat
const words = [
    "lluna",
    "gat",
    "aventura",
    "biblioteca",
    "somriure",
    "quadre",
    "ocell",
    "xocolata",
    "ballarina",
    "cotó",
    "matalàs",
    "vaixell",
    "ganivet",
    "forquilla",
    "papallona",
    "pessigolles",
    "maduixa",
    "guineu",
    "tafaner",
    "clatell",
    "llesca",
    "entrepà",
    "ganyota",
    "trencaclosques",
    "ocell",
    "filferro",
    "endoll",
    "galleda",
    "llampec",
    "granota",
    "raspall",
    "esquirol",
    "groc"
  ];
  
  let chosenWord = ""; // Paraula a endevinar
  let guessedLetters = []; // Lletres endevinades
  let guessesLeft = 6; // Intents restants
  
  const wordContainer = document.getElementById("word-container");
  const letterInput = document.getElementById("letter-input");
  const guessButton = document.getElementById("guess-button");
  const hangmanDisplay = document.getElementById("hangman-display");
  const message = document.getElementById("message");
  const resetButton = document.getElementById("reset-button");
  
  // Funció per triar una paraula aleatòria de la llista
  function chooseWord() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
  }
  
  // Funció per inicialitzar el joc
  function initGame() {
    chooseWord();
    guessedLetters = [];
    guessesLeft = 6;
    updateWordContainer();
    updateHangmanDisplay();
    message.textContent = "";
    letterInput.value = "";
    letterInput.disabled = false;
    guessButton.disabled = false;
    resetButton.style.display = "none";
  }
  
  // Funció per actualitzar el contenidor de paraula
  function updateWordContainer() {
    let wordDisplay = "";
    let allLettersGuessed = true;
    for (let char of chosenWord) {
      if (guessedLetters.includes(char)) {
        wordDisplay += char + " ";
      } else {
        wordDisplay += "_ ";
        allLettersGuessed = false; // Hi ha alguna lletra no endevinada
      }
    }
    wordContainer.textContent = wordDisplay.trim();
    
    // Comprova si s'han endevinat totes les lletres
    if (allLettersGuessed) {
      message.textContent = "Has guanyat!";
      disableInput();
    }
  }
  
  // Funció per actualitzar el display del penjat
  function updateHangmanDisplay() {
    hangmanDisplay.innerHTML = `
      Intents restants: ${guessesLeft}
      <br><br>
      <img src="https://www.joguinessomnis.cat/24592-product_zoom/joc-del-penjat.jpg" alt="Penjat">
    `;
  }
  
  // Funció per comprovar si la lletra endevinada és correcta
  function checkGuess(letter) {
    if (!chosenWord.includes(letter)) {
      guessesLeft--;
    }
  }
  
  // Event listener per endevinar la lletra
  guessButton.addEventListener("click", function() {
    let letter = letterInput.value.toLowerCase();
    if (letter.match(/[a-z]/) && letter.length === 1) {
      if (!guessedLetters.includes(letter)) {
        guessedLetters.push(letter);
        checkGuess(letter);
        updateWordContainer();
        updateHangmanDisplay();
        if (guessesLeft === 0) {
          message.textContent = `Has perdut. La paraula era "${chosenWord}".`;
          disableInput();
        }
      }
    }
    letterInput.value = "";
  });
  
  // Funció per deshabilitar l'entrada de lletres i el botó d'endevina
  function disableInput() {
    letterInput.disabled = true;
    guessButton.disabled = true;
    resetButton.style.display = "block";
  }
  
  // Event listener per reiniciar el joc
  resetButton.addEventListener("click", function() {
    initGame();
  });
  
  // Iniciar el joc quan la pàgina està carregada
  document.addEventListener("DOMContentLoaded", function() {
    initGame();
  });
  