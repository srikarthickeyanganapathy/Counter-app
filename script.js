const count = document.getElementById('counter');
const message = document.getElementById('message');
// const warning = document.getElementById('warning');

message.addEventListener('input', () => {
    const length = message.value.length;
    counter.textContent = length;

    if(length > 100) {
        count.style.color = 'red';
        warning.style.color = 'red';
        warning.textContent = '⚠️Oops! You have exceeded the character limit!';
    } else {
        count.style.color = 'black';
        warning.textContent = '';
    }
})