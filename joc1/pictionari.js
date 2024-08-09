// Paraules en català
const paraules = [
    "casa", "gat", "gos", "arbre", "muntanya", "sol", "lluna", "cotxe", "llibre", "taula", 
    "flor", "ocell", "peix", "poma", "nau", "estrella", "platja", "pont", "clau", "finestra"
];

const wordDisplay = document.getElementById('word-display');
const newWordBtn = document.getElementById('new-word-btn');
const clearCanvasBtn = document.getElementById('clear-canvas-btn'); // Botó d'esborrar dibuix
const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

// Ajustar mida del canvas
canvas.width = 600;
canvas.height = 400;

let dibuixant = false;

// Funció per començar a dibuixar
function iniciarDibuix(e) {
    dibuixant = true;
    ctx.beginPath(); 
    ctx.moveTo(e.offsetX, e.offsetY); 
}

// Funció per parar el dibuix
function pararDibuix() {
    dibuixant = false;
    ctx.closePath();
}

// Funció per dibuixar
function dibuixar(e) {
    if (!dibuixant) return;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#007bff';

    ctx.lineTo(e.offsetX, e.offsetY); 
    ctx.stroke();
}

// Esdeveniments per dibuixar amb el ratolí
canvas.addEventListener('mousedown', iniciarDibuix);
canvas.addEventListener('mouseup', pararDibuix);
canvas.addEventListener('mousemove', dibuixar);

// Funció per esborrar el canvas
function esborrarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Event listener pel botó d'esborrar dibuix
clearCanvasBtn.addEventListener('click', esborrarCanvas);

// Funció per generar una nova paraula
function novaParaula() {
    const paraula = paraules[Math.floor(Math.random() * paraules.length)];
    wordDisplay.textContent = paraula;
}

// Event listener pel botó de nova paraula
newWordBtn.addEventListener('click', novaParaula);
