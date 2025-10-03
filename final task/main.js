    var allQuestions = [
    {
        q: "What is 5 + 3?",
        options: ["6", "7", "8", "9"],
        answer: "8"
    },
    {
        q: "Which is a prime number?",
        options: ["4", "6", "7", "8"],
        answer: "7"
    },
    {
        q: "what is the largest mamal?",
        options: ["Ziraffe", "Cow", "Blue wale", "Zebra"],
        answer: "Blue wale"
    },
    {
        q: "What key is used to copy a text?",
        options: ["ctrl+V", "ctrl+A", "ctrl+C", "ctrl+X"],
        answer: "ctrl+C"
    },
    {
        q: "What is 12 / 4?",
        options: ["2", "3", "4", "6"],
        answer: "3"
    }
];

var selectedQuestions = [];
var userInfo = {};
window.onload = function() {
    var regForm = document.getElementById('regForm');
    var quizForm = document.getElementById('quizForm');
    var errorDiv = document.getElementById('regError');
    regForm.onsubmit = function(e) {
        e.preventDefault();
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var age = document.getElementById('age').value;
        errorDiv.textContent = '';
        if (name === '' || email === '' || age === '') {
            errorDiv.textContent = 'Please fill in all fields.';
            return;
        }
        if (parseInt(age) < 12) {
            errorDiv.textContent = 'Sorry, you must be at least 12 years old to participate.';
            return;
        }
        userInfo = { name: name, email: email, age: age };
        regForm.classList.add('hidden');
        showQuiz();
    };
    quizForm.onsubmit = function(e) {
        e.preventDefault();
        document.getElementById('quizMsg').textContent = "Calculating your result… Please wait!";
        quizForm.querySelector('button').disabled = true;
        setTimeout(function() {
            var score = 0;
            var answers = [];
            for (var i = 0; i < selectedQuestions.length; i++) {
                var radios = document.getElementsByName('q' + i);
                var selected = '';
                for (var j = 0; j < radios.length; j++) {
                    if (radios[j].checked) {
                        selected = radios[j].value;
                    }
                }
                answers.push(selected);
                if (selected === selectedQuestions[i].answer) {
                    score++;
                }
            }
            var percentage = Math.round((score/selectedQuestions.length)*100);
            var grade = '';
            var feedback = '';
            if (score === 3) {
                grade = 'A';
                feedback = 'Excellent! You got all correct!';
            } else if (score === 2) {
                grade = 'B';
                feedback = 'Great job! Just one away from perfect.';
            } else if (score === 1) {
                grade = 'C';
                feedback = 'Good effort! Review and try again.';
            } else {
                grade = 'D';
                feedback = 'Don’t worry, keep practicing!';
            }
        
            var resultObj = {
                name: userInfo.name,
                email: userInfo.email,
                age: userInfo.age,
                answers: answers,
                score: score,
                percentage: percentage,
                grade: grade,
            
            };
            document.getElementById('quizSection').classList.add('hidden');
            document.getElementById('resultSection').classList.remove('hidden');
            document.getElementById('resultDisplay').innerHTML =
                '<b>Name:</b> ' + userInfo.name + '<br>' +
                '<b>Email:</b> ' + userInfo.email + '<br>' +
                '<b>Age:</b> ' + userInfo.age + '<br>' +
                '<b>Score:</b> ' + score + ' / 3<br>' +
                '<b>Percentage:</b> ' + percentage + '%<br>' +
                '<b>Grade:</b> ' + grade + '<br>' +
                '<b>Feedback:</b> ' + feedback;
            document.getElementById('jsonDisplay').textContent = JSON.stringify(resultObj, null, 2);
        }, );
    };
};

function showQuiz() {
    selectedQuestions = [];
    var used = [];
    while (selectedQuestions.length < 3) {
        var idx = Math.floor(Math.random() * allQuestions.length);
        if (used.indexOf(idx) === -1) {
            used.push(idx);
            selectedQuestions.push(allQuestions[idx]);
        }
    }
    var questionsDiv = document.getElementById('questions');
    questionsDiv.innerHTML = '';
    
    for (var i = 0; i < selectedQuestions.length; i++) {
        var q = selectedQuestions[i];
        var html = '<div><b>Q' + (i+1) + ': ' + q.q + '</b><br>';
        for (var j = 0; j < q.options.length; j++) {
            html += '<label><input type="radio" name="q' + i + '" value="' + q.options[j] + '" required> ' + q.options[j] + '</label> ';
        }
        html += '<br></div><br>';
        questionsDiv.innerHTML += html;
    }
    document.getElementById('quizSection').classList.remove('hidden');
    document.getElementById('quizMsg').textContent = "Answer the questions below.";
}

