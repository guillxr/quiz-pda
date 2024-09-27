const homeSection = document.getElementById('home')
const btnHomeNextText = document.getElementById('home-button-text')

// insere uma mensagem e texto no botão caso seja o primeiro acesso
function insertFirstAcessElements() {
    insertButtonHomeText('Começar')
    insertHomeMessageText()
}

// insere um texto no botão
function insertButtonHomeText(text) {
    btnHomeNextText.textContent = text
}

// insere a mensagem caso seja chamado
function insertHomeMessageText() {
    const homeMessage = document.getElementById('home-message')
    homeMessage.textContent = `Olá, ${user.username}. Você está pronto para começar?`
}

function nextButtonHome() {
    hide(homeSection)
    show(selectionQuiz)
}