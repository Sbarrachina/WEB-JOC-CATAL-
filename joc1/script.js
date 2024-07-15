document.addEventListener('DOMContentLoaded', function() {
  const board = document.getElementById('board');
  const numCells = 30; // Nombre total de caselles
  
  // Funció per obtenir una paraula aleatòria
  function getRandomWord() {
    const words = ['platja', 'galeta', 'gat', 'xocolata', 'porta', 'màquina', 'groc', 'presència', 'complex', 'relació'];
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  
  // Funció per obtenir un verb aleatori
  function getRandomVerb() {
    const verbs = ['caminar', 'saltar', 'cantar', 'ballar', 'menjar', 'dormir', 'estudiar', 'parlar', 'menjar', 'correr'];
    const randomIndex = Math.floor(Math.random() * verbs.length);
    return verbs[randomIndex];
  }
  
  // Funcions per a les caselles
  function casellaNormal(num) {
    switch(num) {
      case 2:
        return "Pronuncia les paraules: 'aigua', 'avui', 'aire'.";
      case 3:
        return "Utilitza el verb '" + getRandomVerb() + "' en una frase en català.";
      case 4:
        return "Forma una frase amb el verb '" + getRandomVerb() + "' conjugat en passat.";
      case 5:
        return "Escriu una frase en català amb el verb '" + getRandomVerb() + "' en futur.";
      case 6:
        return "Comença una conversa imaginària utilitzant el verb '" + getRandomVerb() + "' en present.";
      case 7:
        return "Fes una pregunta en català que inclogui el verb '" + getRandomVerb() + "'.";
      case 8:
        return "Explica què fas habitualment utilitzant el verb '" + getRandomVerb() + "' en present.";
      case 9:
        return "Escriu una frase en català amb el verb '" + getRandomVerb() + "' conjugat en imperatiu.";
      case 10:
        return "Pronuncia la paraula '" + getRandomWord() + "' clarament en català.";
      case 11:
        return "Intenta pronunciar les paraules: 'llibre', 'llum', 'llista' amb una entonació clara.";
      case 12:
        return "Pronuncia les paraules: 'mentida', 'mitjana', 'mà' amb una pronunciació precisa.";
      case 13:
        return "Utilitza el verb '" + getRandomVerb() + "' en una frase en català.";
      case 14:
        return "llegeix un text curt en català.";
      case 15:
        return "Llegeix en veu alta aquesta frase: 'La nit és fosca però amb lluna plena'.";
      case 16:
        return "Endevina la paraula ";
      case 17:
        return "Escriu una frase en català amb el verb '" + getRandomVerb() + "' en subjuntiu.";
      case 18:
        return "Pronuncia les paraules: 'poma', 'pinta', 'exercici' amb una entonació clara.";
      case 19:
        return "Utilitza el verb '" + getRandomVerb() + "' en una frase en català.";
      case 20:
        return "Conta una anècdota viscuda amb un amic utilitzant el verb '" + getRandomVerb() + "'.";
      case 21:
        return "Escriu una frase en català amb el verb '" + getRandomVerb() + "' en present perfecte.";
      case 22:
        return "Pronuncia les paraules: 'soc', 'fetge', 'préssec' amb una entonació clara.";
      case 23:
        return "Utilitza el verb '" + getRandomVerb() + "' en una frase en català.";
      case 24:
        return "Forma una frase amb el verb '" + getRandomVerb() + "' conjugat en condicional.";
      case 25:
        return "Escriu una pregunta en català que inclogui el verb '" + getRandomVerb() + "'.";
      case 26:
        return "Conta una anècdota viscuda durant les vacances en una frase.";
      case 27:
        return "Utilitza el verb '" + getRandomVerb() + "' en una frase en català.";
      case 28:
        return "Intenta pronunciar les paraules: 'mar', 'muntanya', 'menjar'.";
      case 29:
        return "llegeix un text curt en català.";
      default:
        return "Forma una frase amb un verb en català.";
    }
  }
  
  // Funció per crear el tauler
  function createBoard() {
    for (let i = 0; i < numCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      
      if (i === 0) {
        cell.classList.add('start');
        cell.textContent = 'Inici';
      } else if (i === numCells - 1) {
        cell.classList.add('finish');
        cell.textContent = 'Fi';
      } else {
        cell.textContent = i + 1;
        cell.addEventListener('click', function() {
          openModal(casellaNormal(i + 1)); // Obrir la finestra modal amb el contingut específic
        });
      }
      
      board.appendChild(cell);
    }
  }
  
  // Crear el tauler quan la pàgina està carregada
  createBoard();
  
  // Selecciona el botó de tancar i la finestra modal
  const closeButton = document.querySelector('.close');
  const modal = document.querySelector('.custom-modal');
  const modalContent = document.querySelector('.custom-modal-content');
  
  // Assigna l'esdeveniment clic al botó de tancar per tancar la finestra modal
  closeButton.addEventListener('click', function() {
    closeModal();
  });

  // Funció per obrir la finestra modal amb un contingut específic
  function openModal(content) {
    modalContent.innerHTML = content; // Assigna el contingut a la finestra modal
    modal.style.display = 'block'; // Mostra la finestra modal
  }

  // Funció per tancar la finestra modal
  function closeModal() {
    modal.style.display = 'none'; // Amaga la finestra modal
  }

  // Funció per tancar la finestra modal quan es fa clic fora de la finestra o a la creu
  window.addEventListener('click', function(event) {
    if (event.target === modal || event.target.classList.contains('close')) {
      closeModal();
    }
  });
});
