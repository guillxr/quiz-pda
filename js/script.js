// carrega e alimenta com os dados todos as informações do usuario nos elementos html
function loadAllUserContent() {
    loadUserUsername()
    loadUserAvatar()
    loadUserRank()
    loadUserXp()
}

// remove a class hidden que vem por padrão no elemento passado no parametro
function show(e) {
    e.classList.remove('hidden')
}

// adiciona a class hidden no elemento passado no parametro
function hide(e) {
    e.classList.add('hidden')
}

// insere o username nos elementos html que possuem a sua classs
function loadUserUsername() {
    const userUsernameElements = document.getElementsByClassName('user-username-content');

    for (let i = 0; i < userUsernameElements.length; i++) {
        let usernameElement = userUsernameElements[i]
        usernameElement.textContent = user.username
    }
}

// insere o src do avatar nos elementos html que possuem a sua classs
function loadUserAvatar() {
    const userAvatarElements = document.getElementsByClassName('user-avatar-content');
    for (let i = 0; i < userAvatarElements.length; i++) {
        let avatarElement = userAvatarElements[i]
        avatarElement.src = user.avatar
    }
}

// insere o src da badge do e o nome do rank nos elementos html que possuem a sua classs
function loadUserRank() {
    const userRankElements = document.getElementsByClassName('user-rank-content');

    for (let i = 0; i < userRankElements.length; i++) {
        let rankElement = userRankElements[i]

        rankElement.textContent = user.rank
        rankElement.setAttribute('data-rank', user.rank)
    }
    loadUserBadge()
}

function loadUserBadge() {
    const userRankBadge = document.getElementsByClassName('user-avatar-rank');

    for (let i = 0; i < userRankBadge.length; i++) {
        let rankBadge = userRankBadge[i]

        rankBadge.src = `images/ranksBadges/${user.rank}.svg`
    }
}

// insere o valor atual do xp e o valor minimo para o proximo rank nos elementos html que possuem as suas classs
function loadUserXp() {
    const userXpElements = document.getElementsByClassName('user-info-xp');
    const currentUserXp = document.getElementsByClassName('user-xp-current');
    const minXpNextRank = document.getElementsByClassName('user-next-rank-xp');
    const progressContainer = document.querySelector('.xp-progress-container')
    let nextXp = getCurrentAndNextRank()
    
    progressContainer.setAttribute('value', String(user.xp))
    progressContainer.setAttribute('max', String(nextXp.nextRankXp))

    for (let i = 0; i < userXpElements.length; i++) {
        let currentXp = currentUserXp[i]
        let nextXpRank = minXpNextRank[i]

        currentXp.textContent = user.xp
        nextXpRank.textContent = nextXp.nextRankXp
    }
    updateXpProgressBar()
}

// atualiza o valor da barra de progresso a partir da quantidade de xp e o valor minimo do proximo rank
function updateXpProgressBar() {
    const progressContainer = document.querySelector('.xp-progress-container')
    const progressBar = document.querySelector('.xp-progress-bar')

    const value = parseInt(progressContainer.getAttribute('value'))
    const max = parseInt(progressContainer.getAttribute('max'))

    const percentage = value > max ? 100 : (value / max) * 100
    progressBar.style.width = `${percentage}%`
}