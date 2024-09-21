const ranks = [
    { name: 'bronze', minXp: 0 },
    { name: 'silver', minXp: 100 },
    { name: 'gold', minXp: 150 },
    { name: 'platinum', minXp: 225 },
    { name: 'diamond', minXp: 338 }
]

// retorna o nome do rank atual pelo xp e o valor minimo do proximo rank
function getCurrentAndNextRank() {
    let currentRank = ranks[0].name
    let nextRankXp = null
    
    for (let i = 0; i < ranks.length; i++) {
        const rank = ranks[i]
        if (user.xp >= rank.minXp) {
            currentRank = rank.name
            if (ranks[i + 1]) {
                nextRankXp = ranks[i + 1].minXp
            } else {
                nextRankXp = 'Max.'
            }
        } else {
            break
        }
    }
    return { currentRank, nextRankXp }
}

// atualiza o valor do rank na local storage
function updateUserRankInLocalStorage(newRank) {
    let userTemp = JSON.parse(localStorage.getItem('user'))
    userTemp.rank = newRank
    
    localStorage.setItem('user', JSON.stringify(userTemp))
}

// gera o rank atual e atualiza o valor das propriedades que contém o rank
function getRankAndUpdate() {
    let newRank = getCurrentAndNextRank()
    if(newRank.currentRank != user.rank) {
        user.rank = newRank.currentRank
        updateUserRankInLocalStorage(newRank.currentRank)
    }
    loadUserRank()
    loadUserXp()
}