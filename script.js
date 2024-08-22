let toggle = document.getElementById('toggle');
let passwordField = document.getElementById('psw');

toggle.addEventListener("click", () => {
    if (passwordField.type==="password") {
        if (toggle.innerText === "Show") {
            toggle.innerText = 'Hide';
        } else if (toggle.innerText === "Показать") {
            toggle.innerText = 'Скрыть'
        }
        passwordField.type = 'text';
    } else {
        if (toggle.innerText === "Hide") {
            toggle.innerText = 'Show';
        } else if (toggle.innerText === "Скрыть") {
            toggle.innerText = 'Показать'
        }
        passwordField.type = 'password';
    }

    if (toggle.innerText === "Показать") {
        passwordField.style.width = "60%";
    } else if (toggle.innerText === "Скрыть")
        passwordField.style.width = "65%";

    if (toggle.innerText === "Show") {
        passwordField.style.width = "70%";
    } else if (toggle.innerText === "Hide")
        passwordField.style.width = "72%";
    
})
const form = document.querySelector('form'); 
 
form.addEventListener('submit', function(event) { 
  event.preventDefault(); 
}); 

let english = document.getElementById('en-lang');
let russian = document.getElementById('ru-lang');
let emailField = document.getElementById('user-email');
let loginText = document.getElementById('login-text');
let langSeletion = document.getElementById('lab-lang');
let regButton = document.getElementById('reg');
let forgotPasswordButton = document.getElementById('pass');
let submitButton = document.getElementById('button');

english.addEventListener('click', () => {
    if (passwordField.type==="password" && toggle.innerText === "Показать") {
        toggle.innerText = 'Show';
    } else if (passwordField.type==="text" && toggle.innerText === "Скрыть") {
        toggle.innerText = 'Hide';
    }
    english.innerText = "ENG";
    russian.innerText = "RUS";
    emailField.placeholder = "Your e-mail";
    passwordField.placeholder = "Password";
    loginText.innerText = "LOGIN";
    langSeletion.innerText = "Select language:";
    regButton.innerText = "Register";
    forgotPasswordButton.innerText = "Forgot password?";
    submitButton.innerText = "SUBMIT";
    passwordField.style.width = "70%";
})

russian.addEventListener('click', () => {
    if (passwordField.type === "password" && toggle.innerText === "Show") {
        toggle.innerText = 'Показать';
    } else if (passwordField.type === "text" && toggle.innerText === "Hide") {
        toggle.innerText = 'Скрыть';
    }
    english.innerText = "АНГ";
    russian.innerText = "РУС";
    emailField.placeholder = "Почта";
    passwordField.placeholder = "Пароль";
    loginText.innerText = "ВХОД";
    langSeletion.innerText = "Выбор языка:";
    regButton.innerText = "Зарегистрироваться";
    forgotPasswordButton.innerText = "Забыли пароль?"; 
    submitButton.innerText = "ОТПРАВИТЬ";
    passwordField.style.width = "60%";
})


let one = document.getElementsByClassName("num one");
let two = document.getElementsByClassName("two");
let three = document.getElementsByClassName("three");
let four = document.getElementsByClassName("four");
let five = document.getElementsByClassName("five");
let six = document.getElementsByClassName("six");
let seven = document.getElementsByClassName("seven");
let eight = document.getElementsByClassName("eight");
let nine = document.getElementsByClassName("nine");
let zero = document.getElementsByClassName("zero");

let clear = document.getElementsByClassName("clear");
let divide = document.getElementsByClassName("division");
let multiply = document.getElementsByClassName("multiplication");
let subtract = document.getElementsByClassName("subtraction");
let add = document.getElementsByClassName("addition");