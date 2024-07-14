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

function checkAnswer(inputId, resultId, correctAnswerId) {
    var answer = document.getElementById(inputId).value.toLowerCase().trim();
    var correctAnswer = `Ara que ja tenia setze anys es veia capaç de fer-ho. Havia estat enfonsat durant molt temps, però ara no tenia cap dubte i n'estava ben convençut.

Ho havia de dir a casa i això era el més difícil. A la germana, que vivia a Suïssa, li havia explicat com se sentia ja feia temps per videotrucada, però li feia por dir-ho al pare. Potser li explicaria tot el que el preocupava diumenge, quan tornés de cacera amb els amics. Quan la caça anava bé era quan estava més content. Potser era tan senzill com dir: "Pare, t'he de dir una cosa molt important: soc transsexual". Però sabia que hi ha coses que poden ser fàcils i les persones les fem difícils, i pensava que la comunicació és una d'aquestes coses.`;

    var normalizedAnswer = answer.replace(/[\n\r\s]+/g, ' ').trim();
    var normalizedCorrectAnswer = correctAnswer.replace(/[\n\r\s]+/g, ' ').trim();

    if (normalizedAnswer === normalizedCorrectAnswer.toLowerCase()) {
        document.getElementById(resultId).classList.remove('hidden');
    } else {
        alert("Resposta incorrecta. Torna a provar-ho.");
    }

    // Mostrar el text correcte
    var correctAnswerElement = document.getElementById(correctAnswerId);
    correctAnswerElement.textContent = `Text correcte: ${correctAnswer}`;
    correctAnswerElement.classList.remove('hidden');
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}


function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
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


