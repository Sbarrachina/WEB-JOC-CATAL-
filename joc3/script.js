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

document.addEventListener("DOMContentLoaded", function () {
    var correctAnswers = {
        answer1: `Ara que ja tenia setze anys es veia capaç de fer-ho. Havia estat enfonsat durant molt temps, però ara no tenia cap dubte i n'estava ben convençut.

        Ho havia de dir a casa i això era el més difícil. A la germana, que vivia a Suïssa, li havia explicat com se sentia ja feia temps per videotrucada, però li feia por dir-ho al pare. Potser li explicaria tot el que el preocupava diumenge, quan tornés de cacera amb els amics. Quan la caça anava bé era quan estava més content. Potser era tan senzill com dir: "Pare, t'he de dir una cosa molt important: soc transsexual". Però sabia que hi ha coses que poden ser fàcils i les persones les fem difícils, i pensava que la comunicació és una d'aquestes coses.`,
       
        answer2: `Dissabte va haver de tornar a venir l'electricista a casa. Passa alguna cosa amb la instal·lació elèctrica de l'edifici i cada dos per tres tenim sorpreses. I, com si amb això no en tinguéssim prou, fa quatre dies es va embussar el lavabo i encara no hem pogut localitzar el nostre lampista. La veritat és que estem una mica nerviosos perquè la setmana vinent hem d'anar a França a visitar el meu germà, però si les coses continuen així potser ens haurem de quedar a Barcelona.`,
        
        answer3: `1. La ceba és una hortalissa més aviat dolça.

        2. Va deixar la cigarreta encesa al cendrer.
        
        3. La Mercè em va donar la seva adreça de Niça.
        
        4. La dolçor de les cireres m'encanta.
        
        5. Demà passat desaré les camises a l'armari.`,
       
        answer4: `1. A la plaça hi ha onze cases de pisos.

        2. Dissabte farem arròs a la cassola amb pèsols i trossets de conill.
        
        3. L'Ignasi pensa passar les vacances a França.
        
        4. Aquestes panses són massa dolces.
        
        5. En aquesta església la missa solemne és a les dotze.`,
        
        answer5: `Hi havia una vegada una zebra i un ase que es van enamorar. A la zebra li va agradar de seguida la sensibilitat i la generositat de l'ase. A l'ase el va fascinar la gràcia i la bellesa de la zebra. Però ell era molt tossut i ella molt orgullosa. Després del casament, ell va voler tant sí com no entrar a la seva nova casa amb ella en braços; ella no ho volia de cap manera perquè se sentia ridícula. Amb el temps van decidir ser comprensius i respectuosos entre ells. Les diferències, al cap i a la fi, no són insalvables. Només cal centrar-se en allò que ens uneix, i no en allò que ens separa.`
    };

    function normalizeText(text) {
        return text
            .toLowerCase()
            .replace(/\s+/g, ' ')
            .trim();
    }

    window.checkAnswer = function (inputId, resultId, correctAnswerId) {
        var answer = document.getElementById(inputId).value;
        var normalizedAnswer = normalizeText(answer);
        var correctAnswer = normalizeText(correctAnswers[inputId]);

        if (normalizedAnswer === correctAnswer) {
            document.getElementById(resultId).classList.remove('hidden');
        } else {
            alert("Resposta incorrecta. Torna a provar-ho.");
        }

        var correctAnswerElement = document.getElementById(correctAnswerId);
        correctAnswerElement.textContent = `Text correcte: ${correctAnswers[inputId]}`;
        correctAnswerElement.classList.remove('hidden');
    };
});

function checkImageAnswer(inputId, resultId) {
    var answer = document.getElementById(inputId).value.toLowerCase();
    var correctAnswers = {
        'input1': 'gat',
        'input2': 'guitarra',
        'input3': 'jaqueta',
        'input4': 'amanida',
        'input5': 'ànec',
        'input6': 'cullera',
        'input7': 'enciam',
        'input8': 'forquilla',
        'input9': 'esquirol',
        'input10': 'ganivet',
        'input11': 'cogombre',
        'input12': 'maduixa',
        'input13': 'mirall',
        'input14': 'taula',
        'input15': 'préssec',
        'input16': 'pèsols',
        'input17': 'papallona',
        'input18': 'mitjons',
        'input19': 'galleda',
        'input20': 'entrepà'

    };
    if (answer === correctAnswers[inputId]) {
        document.getElementById(resultId).classList.remove('hidden');
    } else {
        alert("Resposta incorrecta. Torna a provar-ho.");
    }
}
