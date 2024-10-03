// exibe/esconde a sidebar
function openSidebar() {
    const openSidebarButton = document.getElementById('open-sidebar')
    const sidebar = document.getElementById('sidebar-quiz')
    const body = document.body

    openSidebarButton.classList.toggle('opened')
    sidebar.classList.toggle('visible')

    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('hidden')
        body.classList.add('no-scroll')
    } else {
        sidebar.classList.add('hidden')
        body.classList.remove('no-scroll')
    }
}

// esconde a sidebar caso clique fora dela
function handleClickOutsideSidebar() {
    const sidebarContent = document.getElementById('sidebar-content')

    if (!sidebarContent.contains(event.target)) {
        openSidebar()
    }
}

// salva o estado dos switchs no local storage
function saveSwitchsState(isCheckedMusic, isCheckedSound) {
    const switchsValue = {
        switchStateMusic: isCheckedMusic,
        switchStateSound: isCheckedSound
    }

    localStorage.setItem('switchsState', JSON.stringify(switchsValue))
}

// carrega o valor dos switchs no local storage, caso não esteja salvo, retorna como true
function loadSwitchsState() {
    const savedState = localStorage.getItem('switchsState')
    if (savedState) {
        return JSON.parse(savedState)
    }
    
    return { switchStateMusic: true, switchStateSound: true }
}

// define o valor dos switchs no html de acordo com o estado do local storage
function setSwitchsState(isCheckedMusic, isCheckedSound) {
    const musicSwitchInput = document.getElementById('music-switch')
    const soundSwitchInput = document.getElementById('sound-switch')

    musicSwitchInput.checked = isCheckedMusic
    soundSwitchInput.checked = isCheckedSound
}

// verifica o estado dos switchs e se estão salvos no local storage
function checkSwitchsStates() {
    const {switchStateMusic, switchStateSound} = loadSwitchsState()
    setSwitchsState(switchStateMusic, switchStateSound)

    if (!localStorage.getItem('switchsState')) {
        saveSwitchsState(true, true)
        setSwitchsState(true, true)
    } 
    loadMusic()
}

// função que ativa/desativa a musica pelo switch e atualiza o estado
function handleClickMusicSwitch() {
    const musicSwitchState = document.getElementById('music-switch').checked
    const soundSwitchState = document.getElementById('sound-switch').checked
    
    if (musicSwitchState) {
        startMusic()
    } else {
        stopMusic()
    }

    saveSwitchsState(musicSwitchState, soundSwitchState)
}

// função que ativa/desativa os sons pelo switch e atualiza o estado
function handleClickSoundSwitch() {
    const musicSwitchState = document.getElementById('music-switch').checked
    const soundSwitchState = document.getElementById('sound-switch').checked

    saveSwitchsState(musicSwitchState, soundSwitchState)
}