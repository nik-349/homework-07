const inputRef = document.querySelector('#validation-input')

const getMinNum = inputRef.getAttribute('data-length')

const sl = inputRef.addEventListener('blur', callM)

function callM(event) {
    if(event.target.value.length >= minNum){
        inputRef.classList.remove('invalid')
        return inputRef.classList.add('valid')
    } return inputRef.classList.add('invalid')
    
    
}