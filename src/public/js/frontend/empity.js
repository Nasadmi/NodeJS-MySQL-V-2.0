const indicator = document.getElementsByClassName('empity')

const card = document.getElementsByClassName('minicard')

if (card.length > 0) {
    indicator[0].style.display = 'none'
}else {
    indicator[0].style.display = 'block'
}