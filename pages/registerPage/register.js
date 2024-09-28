const registerSection = document.getElementById('register')
const registerForm = document.getElementById('register-form')
const usernameField = document.getElementById('username-field')
const usernameInput = document.getElementById('username-input')
const avatarOptions = document.querySelectorAll('.avatar-input')

let avatarInputValue;
let usernameInputValue;

// adiciona o evento de clique nos avatares para ser capturado o id e adicionar a borda de "selecionado"
avatarOptions.forEach(avatar => {
    avatar.addEventListener('click', () => {
        const id = avatar.getAttribute('id')
        avatarOptions.forEach(c => c.classList.remove('avatar-selected'))
        avatar.classList.add('avatar-selected')
        avatarInputValue = `images/avatars/${id}.svg`
    })
})


// adiciona o evento de submit no formulario para ser concluido o cadastro
registerForm.addEventListener('submit', () => {
    event.preventDefault()
    if(checkInputUsername()) {
        saveData()
        loadUserHome()
        insertFirstAcessElements()
    }
})

// checa se o usuario esta salvo no localstorage e chama as funções necessarias
function checkDataStorage() {
    if (localStorage.getItem("user")) {
        loadUserHome()
        insertButtonHomeText('Continuar')
    }
}

function loadUserHome(message) {
    registerSection.remove()
    getRankAndUpdate()
    show(homeSection)
    if(!localStorage.getItem('quiz-data')) {
        setQuizDataInLocalStorage()
    } else {
        getQuizDataAndUpdateLocal()
    }
}
// checa o valor inserido no input, caso não seja digitado nada ou tenha menos que 3 caracteres chama a função errorInput()
function checkInputUsername() {
    const usernameValue = usernameInput.value
    
    if (usernameValue === '') {
        errorInput("Nome de úsuario obrigatório!")
    } else if (usernameValue.length < 3) {
        errorInput("Deve conter pelo menos 3 caracteres!")
    } else {
        return true
    }
}

// checa se o avatar foi selecionado, caso não, define um avatar aleatorio
function checkInputAvatar() {
    if(!avatarInputValue) {
        avatarInputValue = `images/avatars/avatar-${Math.floor(Math.random() * 8)}.svg`
    }
}

// adiciona uma mensagem de erro no html
function errorInput(message) {
    const formItem = usernameInput.parentElement
    const error = document.getElementById('error-element')

    if(!error) {
        let a = document.createElement('span')
        a.id = 'error-element'
        a.innerHTML = message
        formItem.className = "error" 
        usernameField.appendChild(a)
    } else {
        error.innerHTML = message
    }
}

// salva os dados do usuario no localstorage
function saveData() {
    checkInputAvatar()
    usernameInputValue = usernameInput.value
    
    let userTemp = {
        username: usernameInputValue,
        avatar: avatarInputValue,
        rank: 'bronze',
        xp: 0
    }

    localStorage.setItem("user", JSON.stringify(userTemp))
    hide(registerSection)
}

checkDataStorage()