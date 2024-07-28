document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-game');
    const grid = document.getElementById('grid');
    const wordsList = document.getElementById('words');
    const timerElement = document.getElementById('timer');
    const scoreElement = document.getElementById('score');

    let gridSize = 12; // Ajustar segons la dificultat
    let words = [];
    let selectedCells = [];
    let score = 0;
    let timer;
    let cells = [];

    startButton.addEventListener('click', startGame);

    function startGame() {
        const difficulty = document.getElementById('difficulty').value;
        const category = document.getElementById('category').value;
        configureGrid(difficulty);
        generateGrid();
        loadWords(category);
        placeWordsInGrid();
        fillEmptyCells();
        startTimer();
    }

    function configureGrid(difficulty) {
        switch (difficulty) {
            case 'easy':
                gridSize = 10;
                break;
            case 'medium':
                gridSize = 12;
                break;
            case 'hard':
                gridSize = 14;
                break;
        }
        grid.style.gridTemplateColumns = `repeat(${gridSize}, 30px)`;
    }

    function generateGrid() {
        grid.innerHTML = '';
        cells = [];
        for (let i = 0; i < gridSize; i++) {
            cells[i] = [];
            for (let j = 0; j < gridSize; j++) {
                const cell = document.createElement('div');
                cell.dataset.row = i;
                cell.dataset.col = j;
                cell.addEventListener('click', () => selectCell(cell));
                grid.appendChild(cell);
                cells[i][j] = cell;
            }
        }
    }

    function loadWords(category) {
        // Load words based on the selected category
        // This is a placeholder; replace with actual word loading logic
                words = ['LLIBRE', 'ESCOLA', 'TAULA', 'CAVALL', 'FINESTRA', 'PAPER', 'TASSA','COTXE', 'CERVOL'];
        wordsList.innerHTML = '';
        words.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            wordsList.appendChild(li);
        });
    }


    function placeWordsInGrid() {
        words.forEach(word => {
            let placed = false;
            while (!placed) {
                const direction = Math.floor(Math.random() * 4);
                const row = Math.floor(Math.random() * gridSize);
                const col = Math.floor(Math.random() * gridSize);
                if (canPlaceWord(word, row, col, direction)) {
                    placeWord(word, row, col, direction);
                    placed = true;
                }
            }
        });
    }

    function canPlaceWord(word, row, col, direction) {
        if (direction === 0 && col + word.length > gridSize) return false;
        if (direction === 1 && row + word.length > gridSize) return false;
        if (direction === 2 && col - word.length < 0) return false;
        if (direction === 3 && row - word.length < 0) return false;

        for (let i = 0; i < word.length; i++) {
            if (direction === 0 && cells[row][col + i].textContent !== '') return false;
            if (direction === 1 && cells[row + i][col].textContent !== '') return false;
            if (direction === 2 && cells[row][col - i].textContent !== '') return false;
            if (direction === 3 && cells[row - i][col].textContent !== '') return false;
        }

        return true;
    }

    function placeWord(word, row, col, direction) {
        for (let i = 0; i < word.length; i++) {
            if (direction === 0) cells[row][col + i].textContent = word[i];
            if (direction === 1) cells[row + i][col].textContent = word[i];
            if (direction === 2) cells[row][col - i].textContent = word[i];
            if (direction === 3) cells[row - i][col].textContent = word[i];
        }
    }

    function fillEmptyCells() {
        const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        for (let i = 0; i < gridSize; i++) {
            for (let j = 0; j < gridSize; j++) {
                if (cells[i][j].textContent === '') {
                    const randomLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
                    cells[i][j].textContent = randomLetter;
                }
            }
        }
    }

    function selectCell(cell) {
        if (cell.classList.contains('selected')) {
            cell.classList.remove('selected');
            selectedCells = selectedCells.filter(c => c !== cell);
        } else {
            cell.classList.add('selected');
            selectedCells.push(cell);
        }

        checkSelectedCells();
    }

    function checkSelectedCells() {
        const selectedWord = selectedCells.map(cell => cell.textContent).join('');
        if (words.includes(selectedWord)) {
            selectedCells.forEach(cell => cell.classList.add('correct'));
            score += 10;
            scoreElement.textContent = score;
            words = words.filter(word => word !== selectedWord);
            updateWordList();
            selectedCells = [];
        }
    }

    function updateWordList() {
        wordsList.innerHTML = '';
        words.forEach(word => {
            const li = document.createElement('li');
            li.textContent = word;
            wordsList.appendChild(li);
        });
    }

    function startTimer() {
        let time = 0;
        clearInterval(timer);
        timer = setInterval(() => {
            time++;
            const minutes = String(Math.floor(time / 60)).padStart(2, '0');
            const seconds = String(time % 60).padStart(2, '0');
            timerElement.textContent = `${minutes}:${seconds}`;
        }, 1000);
    }
});
