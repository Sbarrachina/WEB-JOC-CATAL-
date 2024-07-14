function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function showContent(contentId) {
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.add('hidden');
    });
    document.getElementById(contentId).classList.remove('hidden');
}

function checkAnswer(inputId, resultId) {
    var answer = document.getElementById(inputId).value.toLowerCase();
    var correctAnswer = "correcte"; // Aquí poses la resposta correcta
    if (answer === correctAnswer) {
        document.getElementById(resultId).classList.remove('hidden');
    } else {
        alert("Resposta incorrecta. Torna a provar-ho.");
    }
}
// paraules 
function checkImageAnswer(inputId, resultId) {
    var answer = document.getElementById(inputId).value.toLowerCase();
    var correctAnswers = {
        'input1': 'gat', // Canvia 'correcte' per la resposta correcta de l'objecte 1
        'input2': 'guitarra',  // Canvia 'correcte' per la resposta correcta de l'objecte 2
        'input3': 'jaqueta'  // Canvia 'correcte' per la resposta correcta de l'objecte 3

    };
    if (answer === correctAnswers[inputId]) {
        document.getElementById(resultId).classList.remove('hidden');
    } else {
        alert("Resposta incorrecta. Torna a provar-ho.");
    }
}


