const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    checkPassword();
});

function checkPassword() {
    if(password1.value !== password2.value) {
        document.querySelectorAll('[type="password"]').forEach(el => {
            el.className = 'error';
        })
    }
}


