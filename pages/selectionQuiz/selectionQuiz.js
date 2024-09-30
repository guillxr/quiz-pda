function showQuests() {
    getQuizDataAndUpdateLocal()
    const lockIcon = `<svg class="lock-icon" fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 330 330" xml:space="preserve">
                        <g id="XMLID_509_">
                        <path id="XMLID_510_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
                        S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M180,234.986V255c0,8.284-6.716,15-15,15
                        s-15-6.716-15-15v-20.014c-6.068-4.565-10-11.824-10-19.986c0-13.785,11.215-25,25-25s25,11.215,25,25
                        C190,223.162,186.068,230.421,180,234.986z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"/>
                        </g>
                        </svg>`
    
    for (let i = 0; i < quizData.length; i++) {
        const quest = quizData[i].questions
        for (let questNum = 0; questNum < quest.length; questNum++) {
            const button = document.createElement('button')
            let nameQuiz = checkNameQuiz(questNum)
            let currentScore = quest[questNum].score
            let currentRankId = checkRankId(user.rank)

            button.textContent = `Quiz ${nameQuiz}`
            button.classList.add('button')
            button.classList.add(`${verifyQuizAccess(i + 1) ? 'open-quiz' : 'locked-quiz'}`)
            button.disabled = verifyQuizAccess(i + 1) ? false : true;
            button.innerHTML += verifyQuizAccess(i + 1) ? '' : `${lockIcon}`;
            button.setAttribute('level', i)
            button.setAttribute('quest', questNum)
            selectionQuizSection.appendChild(button)
            
            

            if(quest[questNum].completed === true) {
                const percentage = getPercentage(currentScore)
                const scoreIcon = getScoreIcon(currentScore)

                button.classList.remove('open-quiz')
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

function checkRankId(rank) {
    switch(rank) {
        case 'bronze':
            return 1
        case 'silver':
            return 2
        case 'gold':
            return 3
        case 'platinum':
            return 4
        case 'diamond':
            return 5
    }
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

function verifyQuizAccess(QuizRank) {
    userRankID = checkRankId(user.rank);
    
    if (userRankID >= QuizRank) {
        return true
    }
    return false
}