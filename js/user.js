let user = {
    username: null,
    avatar: null,
    rank: null,
    xp: null
}

// puxa os dados do localstorage e guarda no objeto user
function getUserData() {
    const userJSON = localStorage.getItem("user")
    if(userJSON) {
        const userData = JSON.parse(userJSON)
        user.username = userData.username
        user.avatar = userData.avatar
        user.rank = userData.rank
        user.xp = userData.xp
    }
    loadAllUserContent()
}