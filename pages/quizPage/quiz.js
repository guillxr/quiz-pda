const quiz = document.getElementById('quiz')
const quizSection = document.getElementById('quiz-section')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const quizButton = document.getElementById('quiz-button')
const quizScoreButton = document.getElementById('quiz-score-button')
const quizScoreText = document.getElementById('quiz-score-text')
const quizCard = document.getElementById('quiz-card')
const quizScore = document.getElementById('quiz-score')
const selectionQuest = document.getElementById('selection-quest')
const currentQuestionElement = document.getElementById('current-question')
const currentScoreElement = document.getElementById('current-score')
const currentTimerElement = document.getElementById('current-time')

let currentLevelQuestions = 0
let currentQuizQuest = 0
let currentQuestionIndex = 0
let currentButtonCorrect = -1
let score = 0
let countdown;
let seconds = 300

// retorna um novo array randomizado
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

// função que inicia o quiz 
function startQuiz() {
    hideScore()
    stopMusic()
    createButton('quiz-next-button', 'Próximo', quizButton, handleNextButton)


    const nextButton = document.getElementById('quiz-next-button')

    currentQuestionIndex = 0
    score = 0
    
    nextButton.style.display = 'none'
    showQuestions()
}

// mostra as questions de acordo com o level e quest capturado pelo botão de seleção de quest/quiz
function showQuestions() {
    resetState()
    showInfoQuest()

    let currentQuestion = quizData[currentLevelQuestions].questions[currentQuizQuest].quests[currentQuestionIndex]
    let currentButton = 0
    const shuffledAnswers = shuffle([...currentQuestion.answers]);
    questionElement.innerHTML = currentQuestion.question

    currentButtonCorrect = -1

    for (const answer of shuffledAnswers) {
        const button = document.createElement('button')

        button.textContent = answer.text
        button.className = `button btn-${currentButton}`
        button.setAttribute('btn-id', currentButton)
        answerButtons.appendChild(button)

        if(answer.isCorrect) {
            currentButtonCorrect = currentButton
        }

        button.addEventListener('click', selectAnswer)
        currentButton++
    }
}

// exibe as informações atuais sobre a quest/quiz
function showInfoQuest() {
    currentQuestionElement.innerHTML = `${currentQuestionIndex + 1} / 5`
    currentScoreElement.innerHTML = `${score} XP`
    quizCard.style.display = 'flex'

    startCountdown()
}

// reseta/remove os botões da quest/quiz
function resetState() {
    if(quizButton.firstChild) {
        if(quizButton.firstChild.id === 'quiz-next-button') {
            quizButton.firstChild.style.display = 'none'
        } else {
            quizButton.removeChild(quizButton.firstChild)
        }
    }
    
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

// função que verifica a seleção da resposta
function selectAnswer(e) {
    const selectedBtn = e.target
    const currentButton = parseInt(selectedBtn.getAttribute('btn-id'))
    const isCorrect = currentButton === currentButtonCorrect
    let correctButton = 0
    
    if(isCorrect) {
        selectedBtn.classList.add('correct')
        selectedBtn.classList.remove(`btn-${currentButton}`)
        playSounds('correct')
        score += 10
    } else {
        selectedBtn.classList.remove(`btn-${currentButton}`)
        selectedBtn.classList.add('incorrect')
        playSounds('incorrect')
    }

    for (const button of answerButtons.children) {
        const buttonIndex = parseInt(button.getAttribute('btn-id'))
        if(buttonIndex === currentButtonCorrect) {
            button.classList.add('correct')
            button.classList.remove(`btn-${correctButton}`)
        } else if (!button.classList.contains('incorrect') && button !== selectedBtn) {
            button.classList.add('unselected-incorrect');
            button.classList.remove(`btn-${correctButton}`)
        }

        button.disabled = true
        correctButton++
    }
    quizButton.firstChild.style.display = 'flex'
}

// exibe o score da quest/quiz
function showScore() {
    resetState()
    stopCountdown()
    resetElements()

    showStars(score)

    quizScore.style.display = 'flex'

    quizScoreText.innerHTML = `Seu score foi de ${score} em ${quizData[currentLevelQuestions].questions[currentQuizQuest].quests.length} questões`

    createButton('quiz-finish-button', 'Continuar', quizScoreButton, handleQuestEndButton)
    
    if(score < 50) {
    createButton('quiz-try-again-button', 'Tentar novamente', quizScoreButton, startQuiz)
    }
    playSounds('finish')
}

// reseta/remove o score da quest/quiz
function hideScore() {
    const finishButton = document.getElementById('quiz-finish-button')
    const tryAgainButton = document.getElementById('quiz-try-again-button')

    quizScore.style.display = 'none'

    if(finishButton) {
        quizScoreButton.removeChild(finishButton)
    }
    if(tryAgainButton) {
        quizScoreButton.removeChild(tryAgainButton)
    }
    quizScoreText.innerHTML = ''
}

// reseta/remove as informações atuais sobre a quest/quiz
function resetElements() {
    quizCard.style.display = 'none'
    quizButton.removeChild(quizButton.firstChild);
    questionElement.innerHTML = ''
    currentQuestionElement.innerHTML = ''
    currentScoreElement.innerHTML = ''
    currentTimerElement.innerHTML = ''
}

// adiciona o xp ao finalizar a quest/quiz e atualiza o local storage
function addScoreInXp() {
    let userTemp = JSON.parse(localStorage.getItem('user'));
    let quizDataTemp = JSON.parse(localStorage.getItem('quiz-data'))

    const questId = getQuestId(currentLevelQuestions, currentQuizQuest)
    let previousXp = quizDataTemp[questId]?.score || 0

    if (score > previousXp) {
        userTemp.xp += (score - previousXp)
        quizDataTemp[questId].score = score
    }

    localStorage.setItem('user', JSON.stringify(userTemp))
    localStorage.setItem('quiz-data', JSON.stringify(quizDataTemp))
    getQuizDataAndUpdateLocal()
}

// função do botão de next/proximo dentro da quest/quiz
function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < quizData[currentLevelQuestions].questions[currentQuizQuest].quests.length) {
        showQuestions()
    } else {
        showScore()
    }
}

// função do botão de continuar/finalizar a quest/quiz que chama as funções dependentes
function handleQuestEndButton() {
    addScoreInXp()
    stopCountdown()
    getRankAndUpdate()
    updateQuizData(currentLevelQuestions, currentQuizQuest)
    showQuests()
    hideScore()
    startMusic()
    show(selectionQuest)
    hide(quizSection)
    questionElement.innerHTML = ''
    score = 0
    resetState()
}

// inicia o timer/cronometro
function startCountdown() {
    if (!countdown) {
        countdown = setInterval(() => {
            if (seconds >= 0) {
                currentTimerElement.textContent = formatTime(seconds)
                seconds--
            } else {
                showScore()
            }
        }, 1000)
    }
}

// para o timer/cronometro
function stopCountdown() {
    clearInterval(countdown)
    countdown = null
    seconds = 300
}

// retorna o valor do timer/cronometro formatado
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

// função para criação de botões, contendo seus atributos e funções passados no parametro
function createButton( id, text, element, func) {
    const button =  document.createElement('button')
    const nextSvg =`
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" class="bi bi-arrow-right-short" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"/>
        </svg>
    `
    const repeatSvg = `
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="32" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
            <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/>
            <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/>
        </svg>
    `

    button.classList.add('button')
    button.id = id
    button.textContent = text
    button.innerHTML += id === 'quiz-try-again-button' ? repeatSvg : nextSvg
    element.appendChild(button)

    button.addEventListener('click', func)
}

// exibe as estrelas dentro do score de acordo com a pontuação da quest/quiz
function showStars(currentScore) {
    const stars = document.getElementById('quiz-stars')
    let index = 0

    for (const star of stars.children) {
        const starValue = parseInt(star.getAttribute('data-value'))

        if(star.classList.contains('completed')) {
            star.classList.remove('completed')
        }

        if (starValue <= currentScore) {
            setTimeout(() => {
                star.classList.add('completed')
            }, index * 300)
        } else {
            star.classList.remove('completed')
        }
        index++
    }
}

// função que inicia um som de acordo com o parametro passado
function playSounds(sound) {
    const audioCorrectAnswer = document.getElementById('audio-correct-answer')
    const audioIncorrectAnswer = document.getElementById('audio-incorrect-answer')
    const audioFinishQuiz = document.getElementById('audio-finish-quiz')
    const { switchStateSound } = JSON.parse(localStorage.getItem('switchsState'))

    if(switchStateSound === true) {
        switch(sound) {
            case 'correct':
                audioCorrectAnswer.play()
                break
            case 'incorrect':
                audioIncorrectAnswer.play()
                break
            case 'finish':
                audioFinishQuiz.play()
                break
        }
    }
}

// evento para confirmação de reload dentro do quiz
window.addEventListener('beforeunload', function (event) {
    if(!quizSection.classList.contains('hidden')) {
        event.preventDefault()
    }
})