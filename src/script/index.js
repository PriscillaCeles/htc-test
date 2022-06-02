const $form = document.querySelector(".form");

const $nameInput = document.querySelector(".name");
const $nameError = document.querySelector(".form__information--error-name");

const $emailInput = document.querySelector(".email");
const $emailError = document.querySelector(".form__information--error-email");

const $passwordInput = document.querySelector(".password")
const $passwordField = document.querySelector(".form__information--password")
const $passwordConfirmationField = document.querySelector(".form__information--password-confirmation")
const $passwordConfirmationInput = document.querySelector(".password-confirmation")
const $passwordError = document.querySelector(".form__information--error-password")


const $passwordConfirmationVisibility = document.querySelector(".password-confirmation-visibility")
const $passwordConfirmationError = document.querySelector(".form__information--password-confirmation")

function validationName() {
  if($nameInput.value.length <= 3){
    $nameInput.classList.add("error");
    $nameError.classList.add("active")
  }
}

function resetInputName() {
  $nameInput.addEventListener("click", function(){
    $nameInput.classList.remove("error");
    $nameError.classList.remove("active")
  })
}

function validationEmail() {
  const isEmail = $emailInput.value.includes("@")
  
  if(!isEmail){
    $emailInput.classList.add("error");
    $emailError.classList.add("active")
  }
}

function resetInputEmail() {
  $emailInput.addEventListener("click", function(){
    $emailInput.classList.remove("error");
    $emailError.classList.remove("active")
  })
}

function validationPasswords() {
  if($passwordInput.value != "" && $passwordConfirmationInput != "") {
    if ($passwordInput.value != $passwordConfirmationInput.value) {

      $passwordError.classList.add("active")
      $passwordField.classList.add("error");
      $passwordConfirmationField.classList.add("error");
    }
  }
}

function resetInputPassword() {
  $passwordInput.addEventListener("click", function(){
    $passwordError.classList.remove("active")
    $passwordField.classList.remove("error");
    $passwordConfirmationField.classList.remove("error");
  })
}


$form.addEventListener('submit', function(event){
  event.preventDefault()
  validationPasswords()
  validationName()
  validationEmail()
})

resetInputName()
resetInputEmail()
resetInputPassword()