const inputRef = document.querySelector('#font-size-control')
const spanRef = document.querySelector('#text')
const ol = inputRef.addEventListener('input', callFriend)


function callFriend(event) {
        spanRef.setAttribute('style', `font-size: ${event.target.value}% `)
}