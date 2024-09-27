// Função para inicializar os dados do quiz no localStorage
function setQuizDataInLocalStorage() {
    let id = 0
    const completedUserQuests = {}

    for (const quiz of quizData) {
        for (const quest of quiz.questions) {
            completedUserQuests[id] = { completed: quest.completed, score: 0 }
            id++
        }
    }

    localStorage.setItem('quiz-data', JSON.stringify(completedUserQuests))
}

// Função para atualizar dados no localStorage
function updateQuizDataInLocalStorage(questId) {
    const quizDataTemp = JSON.parse(localStorage.getItem('quiz-data'))

    if (quizDataTemp && quizDataTemp[questId]) {
        quizDataTemp[questId].completed = true
        
        localStorage.setItem('quiz-data', JSON.stringify(quizDataTemp))
    }
}

// Função para verificar e atualizar o progresso do quiz
function updateQuizData(level, quest) {
    const questId = getQuestId(level, quest)
    updateQuizDataInLocalStorage(questId)
}

// Função auxiliar para obter o ID do quest
function getQuestId(level, questNum) {
    let id = 0

    for (let i = 0; i < level; i++) {
        id += quizData[i].questions.length;
    }

    return id + questNum
}

// Função para sincronizar os dados do localStorage com o quizData
function getQuizDataAndUpdateLocal() {
    const quizDataTemp = JSON.parse(localStorage.getItem('quiz-data'))

    let id = 0

    for (const quiz of quizData) {
        for (const quest of quiz.questions) {
            const { completed, score } = quizDataTemp[id];
            quest.completed = completed;
            quest.score = score;
            id++
        }
    }
}
