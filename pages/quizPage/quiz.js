const quiz = document.getElementById('quiz')
const quizSection = document.getElementById('quiz-section')
const questionElement = document.getElementById('question')
const answerButtons = document.getElementById('answer-buttons')
const quizButton = document.getElementById('quiz-button')
const quizScoreButton = document.getElementById('quiz-score-button')
const quizScoreText = document.getElementById('quiz-score-text')
const quizCard = document.getElementById('quiz-card')
const selectionQuizSection = document.getElementById('selection-quiz-section')
const selectionQuiz = document.getElementById('selection-quiz')
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

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
    }
    return array
}

function startQuiz() {
    hideScore()
    createButton('quiz-next-button', 'Proximo', quizButton, handleNextButton)


    const nextButton = document.getElementById('quiz-next-button')

    currentQuestionIndex = 0
    score = 0
    
    nextButton.style.display = 'none'
    showQuestions()
}

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

function showInfoQuest() {
    currentQuestionElement.innerHTML = `${currentQuestionIndex + 1} / 5`
    currentScoreElement.innerHTML = `${score} XP`
    quizCard.style.display = 'flex'

    startCountdown()
}

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

function selectAnswer(e) {
    const selectedBtn = e.target
    const currentButton = parseInt(selectedBtn.getAttribute('btn-id'))
    const isCorrect = currentButton === currentButtonCorrect
    let correctButton = 0
    
    if(isCorrect) {
        selectedBtn.classList.add('correct')
        selectedBtn.classList.remove(`btn-${currentButton}`)
        score += 10
    } else {
        selectedBtn.classList.remove(`btn-${currentButton}`)
        selectedBtn.classList.add('incorrect')
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
    quizButton.firstChild.style.display = 'block'
}

function showScore() {
    resetState()
    stopCountdown()
    resetElements()

    quizScoreText.innerHTML = `Seu score foi de ${score} em ${quizData[currentLevelQuestions].questions[currentQuizQuest].quests.length} questões`

    createButton('quiz-finish-button', 'Continuar', quizScoreButton, handleQuestEndButton)
    
    if(score < 50) {
    createButton('quiz-try-again-button', 'Tentar novamente', quizScoreButton, startQuiz)
    }
}

function hideScore() {
    const finishButton = document.getElementById('quiz-finish-button')
    const tryAgainButton = document.getElementById('quiz-try-again-button')

    if(finishButton) {
        quizScoreButton.removeChild(finishButton)
    }
    if(tryAgainButton) {
        quizScoreButton.removeChild(tryAgainButton)
    }
    quizScoreText.innerHTML = ''
}

function resetElements() {
    quizCard.style.display = 'none'
    quizButton.removeChild(quizButton.firstChild);
    questionElement.innerHTML = ''
    currentQuestionElement.innerHTML = ''
    currentScoreElement.innerHTML = ''
    currentTimerElement.innerHTML = ''
}

function addScoreInXp() {
    let userTemp = JSON.parse(localStorage.getItem('user'));
    let quizDataTemp = JSON.parse(localStorage.getItem('quiz-data'))

    const questId = getQuestId(currentLevelQuestions, currentQuizQuest)
    let previousXp = quizDataTemp[questId]?.score || 0

    if (score > previousXp) {
        userTemp.xp += (score - previousXp)
        quizDataTemp[questId].score = score
    }

    localStorage.setItem('user', JSON.stringify(userTemp));
    localStorage.setItem('quiz-data', JSON.stringify(quizDataTemp));
    getQuizDataAndUpdateLocal()
}

function handleNextButton() {
    currentQuestionIndex++
    if(currentQuestionIndex < quizData[currentLevelQuestions].questions[currentQuizQuest].quests.length) {
        showQuestions()
    } else {
        showScore()
    }
}

function handleQuestEndButton() {
    addScoreInXp()
    stopCountdown()
    getRankAndUpdate()
    updateQuizData(currentLevelQuestions, currentQuizQuest)
    showQuests()
    hideScore()
    show(selectionQuiz)
    hide(quizSection)
    questionElement.innerHTML = ''
    score = 0
    resetState()
}

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

function stopCountdown() {
    clearInterval(countdown)
    countdown = null
    seconds = 300
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`
}

function createButton( id, text, element, func) {
    const button =  document.createElement('button')
    button.classList.add('button')
    button.id = id
    button.textContent = text
    element.appendChild(button)

    button.addEventListener('click', func)
}
