const stbtn = document.getElementById('start_btn')
const txtbox = document.querySelector('#text_box')

stbtn.addEventListener('click', ()=>{
    alert(20)
    stbtn.style.display = 'none'
    txtbox.innerHTML = '놀이를 시작합니다!'
})