function showQuests() {
    updateQuizData(currentLevelQuestions, currentQuizQuest)
    getQuizDataAndUpdateLocal()
    
    for (let i = 0; i < quizData.length; i++) {
        const quest = quizData[i].questions
        for (let questNum = 0; questNum < quest.length; questNum++) {
            const button = document.createElement('button')
            let nameQuiz = checkNameQuiz(questNum)
            let currentScore = quest[questNum].score

            button.textContent = `Quiz ${nameQuiz}`
            button.classList.add('button')
            button.setAttribute('level', i)
            button.setAttribute('quest', questNum)
            selectionQuizSection.appendChild(button)
            
            if(quest[questNum].completed === true) {
                const percentage = getPercentage(currentScore)
                const scoreIcon = getScoreIcon(currentScore)

                button.classList.add('correct')
                button.innerHTML += `<span>${percentage}% ${scoreIcon}</span>`
            }

            if(currentScore >= 50) {
                button.disabled = true
            } else {
                button.addEventListener('click', startQuizButton)
            }

        }
    }
}

function startQuizButton(e) {
    let button = e.target.closest('button')
    
    currentLevelQuestions = parseInt(button.getAttribute('level'))
    currentQuizQuest = parseInt(button.getAttribute('quest'))

    while(selectionQuizSection.firstChild) {
        selectionQuizSection.removeChild(selectionQuizSection.firstChild)
    }

    hide(selectionQuiz)
    show(quizSection)
    startQuiz()
}

function checkNameQuiz(num) {
    switch(num) {
        case 0:
            return 'HTML'
        case 1:
            return 'CSS'
        case 2:
            return 'JavaScript'
    }
}

function getPercentage(value) {
    return (value / 50) * 100
}

function getScoreIcon(score) {
    if (score < 50) {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 200 200"><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="currentColor" stroke="currentColor" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>`;
    } else {
        return `
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z"/>
            </svg>`;
    }
}

showQuests()