const form = document.querySelector('form');
const button = document.querySelector('.success-btn');

const main = document.querySelector('.sign-up-window');
const successWindow = document.querySelector('.sign-up-success');

const errorMessage = document.querySelector('.error-message');

const receivedEmail = document.querySelector('#email');

// will select the first input element which is the email
const input = document.querySelector('input');

// to show or hide the success window
function toggleClasses(){
    main.classList.toggle('hidden');
    successWindow.classList.toggle('hidden');
}

// fired on the input element
// starts working after a submit happens
function checkInput(e){
    const emailRegex = /^\w+@\w+\.\w+$/;
    const email = e.target.value;
    if(emailRegex.test(email)){
        errorMessage.classList.add('hidden'); // hides error message
        input.classList.remove('input-error'); // removes the red background on the input
    }else{
        errorMessage.classList.remove('hidden');
        input.classList.add('input-error');
    }
}


// fired on the form element on submit
function handleSubmit(e){
    
    e.preventDefault();

    const emailRegex = /^\w+@\w+\.\w+$/;
    const email = input.value;

    if(emailRegex.test(email)){
        errorMessage.classList.add('hidden');
        input.classList.remove('input-error'); 
        receivedEmail.textContent = email; // updates the text on the success window
        input.value = ''; // reseting the input value
        toggleClasses();
    }else{
        input.addEventListener('input', checkInput);
        errorMessage.classList.remove('hidden');
        input.classList.add('input-error');
    }

}

// this is the button on the success window
button.addEventListener('click', toggleClasses);

// our form
form.addEventListener('submit', handleSubmit);