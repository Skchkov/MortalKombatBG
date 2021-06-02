const Kitana  = {
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['dagger', 'heaert', 'hook'],
    attack() {
        console.log(this.name + ' Fight!')
    }
}


const Scorpion  = {
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dagger', 'heaert', 'hook'],
    attack() {
        console.log(this.name + ' Fight!')
    }
}


const createPlayer = (player, {name ,img}) => {
    const $player = document.createElement('div')
    $player.classList.add(player)

    const $progressbar = document.createElement('div')
    $progressbar.classList.add('progressbar')
    const $character = document.createElement('div')
    $character.classList.add('character')

    $player.appendChild($progressbar)
    $player.appendChild($character)

    const $life = document.createElement('div')
    $life.classList.add('life')
    $life.style.width = '100%'

    const $name = document.createElement('div')
    $name.classList.add('name')
    $name.innerText =  name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $img = document.createElement('img')
    $img.src = img

    $character.appendChild($img)

    const $arenas = document.querySelector('.arenas')
    $arenas.appendChild($player)
}

createPlayer('player1', Scorpion)

createPlayer('player2', Kitana)
