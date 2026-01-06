const stbtn = document.getElementById('start_btn')
const txtbox = document.querySelector('#text_box')
const ai_cardbox = document.getElementById('ai_card_space')
const my_cardbox = document.getElementById('my_card_space')
const ai_total = document.getElementById('ai_total')
const my_total = document.getElementById('my_total')
stbtn.addEventListener('click', startGame)
let ai_num = 0
let my_num = 0
let ai_card_count = 0

function startGame() {
    ai_num = 0
    my_num = 0
    ai_card_count = 0
    ai_cardbox.textContent = ''
    my_cardbox.textContent = ''
    stbtn.style.display = 'none'
    txtbox.textContent = '숫자 카드를 배분합니다...'
    setTimeout(() => {
        addCard()
    }, 1500)
}

function ai_randomCard() {
    let rannum = Math.floor(Math.random() * 13) + 1
    if (ai_num <= 13) {
        ai_cardbox.innerHTML += `<div class="card">
        <h2>${rannum}</h2>
        </div>`
        ai_num += rannum
        ai_card_count += 1
    } else if (ai_num < my_num) {
        ai_cardbox.innerHTML += `<div class="card">
            <h2>${rannum}</h2>
            </div>`
        ai_num += rannum
        ai_card_count += 1
    }
    ai_total.textContent = `숫자 총합 : ${ai_num}`
}

function my_randomCard() {
    let rannum = Math.floor(Math.random() * 13) + 1
    if (my_num < 21) {
        my_cardbox.innerHTML += `<div class="card">
        <h2>${rannum}</h2>
        </div>`
        my_num += rannum
    }
    my_total.textContent = `숫자 총합 : ${my_num}`
}

const resetBtn = document.createElement('button')
resetBtn.textContent = '다시시작'
resetBtn.addEventListener('click', startGame)
const homeBtn = document.createElement('button')
homeBtn.textContent = '메인화면'

function msg() {
    homeBtn.addEventListener('click', () => {
        location.href = "index.html";
    })
    if (ai_num > 21) {
        txtbox.innerHTML = ''
        txtbox.textContent = "플레이어의 승리로 게임종료!"
        txtbox.appendChild(homeBtn)
        txtbox.appendChild(resetBtn)
    } else if (my_num > 21) {
        txtbox.innerHTML = ''
        txtbox.textContent = "진행자의 승리로 게임종료!"
        txtbox.appendChild(homeBtn)
        txtbox.appendChild(resetBtn)
    } else if (my_num == 21 && ai_num == 21) {
        txtbox.innerHTML = ''
        txtbox.textContent = "비겼습니다!"
        txtbox.appendChild(homeBtn)
        txtbox.appendChild(resetBtn)
    } else {
        const msg = document.createElement('p')
        msg.textContent = '숫자 카드를 더 받으시겠어요?'

        const yesbtn = document.createElement('button')
        yesbtn.textContent = '네'
        yesbtn.addEventListener('click', addCard)

        const nobtn = document.createElement('button')
        nobtn.textContent = '아니오'
        nobtn.addEventListener('click', () => {
            if (ai_num < my_num) {
                aiGetCardUntilWin()
            } else if (ai_num > my_num) {
                showDealerWin()
            } else {
                showDraw()
            }
        })

        txtbox.appendChild(yesbtn)
        txtbox.appendChild(msg)
        txtbox.appendChild(nobtn)
    }
}

function showDealerWin() {
    txtbox.innerHTML = ''
    txtbox.textContent = "진행자의 승리로 게임종료!"
    txtbox.appendChild(homeBtn)
    txtbox.appendChild(resetBtn)
    ai_total.textContent = `숫자 총합 : ${ai_num}`
    return
}


function showDraw() {
    txtbox.innerHTML = ''
    txtbox.textContent = "비겼습니다!"
    txtbox.appendChild(homeBtn)
    txtbox.appendChild(resetBtn)
    return
}

function aiGetCardUntilWin() {

    txtbox.textContent = '진행자가 카드 받는중...'

    setTimeout(() => {
        let rannum = Math.floor(Math.random() * 13) + 1
        ai_cardbox.innerHTML += `
            <div class="card"><h2>${rannum}</h2></div>
        `
        ai_num += rannum
        if (ai_num > 21) {
            txtbox.innerHTML = ''
            txtbox.textContent = "플레이어의 승리로 게임종료!"
            txtbox.appendChild(homeBtn)
            txtbox.appendChild(resetBtn)
            ai_total.textContent = `숫자 총합 : ${ai_num}`
            return
        }
        if (ai_num > my_num) {
            txtbox.innerHTML = ''
            txtbox.textContent = "진행자의 승리로 게임종료!"
            txtbox.appendChild(homeBtn)
            txtbox.appendChild(resetBtn)
            ai_total.textContent = `숫자 총합 : ${ai_num}`
            return
        }
        if (ai_num == my_num) {
            txtbox.innerHTML = ''
            txtbox.textContent = "비겼습니다!"
            txtbox.appendChild(homeBtn)
            txtbox.appendChild(resetBtn)
            return
        }
        aiGetCardUntilWin()

    }, 1500)
}


function addCard() {
    txtbox.textContent = "숫자 카드를 배분합니다.."
    setTimeout(() => {
        txtbox.innerHTML = ''
        ai_randomCard()
        my_randomCard()
        msg()
    }, 1500)
}
