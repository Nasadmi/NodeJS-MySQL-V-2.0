const id = document.querySelector('#id')

const names = document.querySelector('#name')

const age = document.querySelector('#age')

const email = document.querySelector('#email')

const number = document.querySelector('#number')

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    window.location.href = `/update/${id?.value}/${names?.value}/${age?.value}/${email?.value}/${number?.value}`
})