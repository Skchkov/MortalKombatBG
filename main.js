const $arenas = document.querySelector('.arenas')
const $randomButton = document.querySelector('.button')

const player1  = {
    player: 1,
    name: 'Kitana',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/kitana.gif',
    weapon: ['dagger', 'heaert', 'hook'],
    attack() {
        console.log(this.name + ' Fight!')
    }
}


const player2  = {
    player: 2,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['dagger', 'heaert', 'hook'],
    attack() {
        console.log(this.name + ' Fight!')
    }
}

function createElement(tag,className) {
    const $tag = document.createElement(tag)
    if(className) {    $tag.classList.add(className)}
    return $tag
}
const createPlayer = (playerObj) => {
    const $player = createElement('div', 'player'+playerObj.player)

    const $progressbar = createElement('div', 'progressbar')

    const $character =createElement('div', 'character')


    $player.appendChild($progressbar)
    $player.appendChild($character)

    const $life = createElement('div', 'life')

    $life.style.width = playerObj.hp + '%'

    const $name = createElement('div', 'name')

    $name.innerText =  playerObj.name

    $progressbar.appendChild($life)
    $progressbar.appendChild($name)

    const $img = createElement('img')
    $img.src = playerObj.img

    $character.appendChild($img)


    return $player
}

const damage = () => {
    const number = (Math.ceil(Math.random() * 20))
    return number
}

const disableBtn = () => {
    $randomButton.disabled = true
}
$randomButton.addEventListener('click',() => {
    changeHP(player1)
    changeHP(player2)
})


function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player+ ' .life')
    player.hp -= damage();
    $playerLife.style.width = player.hp + '%'

    if (player1.hp <= 0) {
        $arenas.appendChild(playerWins(player2.name))
        player.hp = 0
        disableBtn()
    } else if(player2.hp <= 0) {
        $arenas.appendChild(playerWins(player1.name))
        player.hp = 0
        disableBtn()
    }
}
function playerWins(name) {
    const $loseTitle = createElement('div', 'loseTitle')
    $loseTitle.innerText = name + ' wins'

    return $loseTitle
}

$arenas.appendChild(createPlayer(player1))
$arenas.appendChild(createPlayer(player2))
