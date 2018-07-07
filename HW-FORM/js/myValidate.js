console.log("test");

function onChangeEmailField (e) {

    const field = e.target;

    const value = field.value;

    const isValid = value.includes('@');
    
    const parent = field.parentElement;

    const errorSpan = parent.querySelector('.error');

if (isValid) {
       parent.classList.remove('invalid');

} else {
       parent.classList.add('invalid');
       errorSpan.innerHTML = 'Your card number is invalid.';
       
   }
}

document.querySelector ('#email-field').addEventListener('change', onChangeEmailField);