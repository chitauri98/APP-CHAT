const controller = {}
controller.register = (data) => {
  if (data.firstName.trim() === '' ) {
    document
    .getElementById('first-name-error')
    .innerText = 'Please input first name'
  } else {
    document.getElementById('first-name-error')
    .innerText = ''
  }
  if (data.lastName.trim() === '' ) {
    document
    .getElementById('last-name-error')
    .innerText = 'Please input last name'
  } else {
    document.getElementById('last-name-error')
    .innerText = ''
  }
  if (data.email.trim() === '' ) {
    document
    .getElementById('email-error')
    .innerText = 'Please input email'
  } else {
    document.getElementById('email-error')
    .innerText = ''
  }
  if (data.password.trim() === '' ) {
    document
    .getElementById('password-error')
    .innerText = 'Please input password'
  } else {
    document.getElementById('password-error')
    .innerText = ''
  }
  if (data.confirmPassword.trim() === '' ) {
    document
    .getElementById('confirm-password-error')
    .innerText = 'Please input confirm password'
  } else if(data.password !== data.confirmPassword) {
    document.getElementById('confirm-password-error')
    .innerText = "Password didn't match"
  } else {
    document.getElementById('confirm-password-error')
    .innerText = ''
  }
  if( data.firstName !== '' &&
      data.lastName !== '' &&
      data.email !== '' &&
      data.password !== '' &&
      data.confirmPassword !== '' &&
      data.password === data.confirmPassword
  ) {
    model.register(data)
  }
}

controller.login = (dataLogin) => {
  if(dataLogin.email === '') {
    document.getElementById('email-error')
    .innerText = 'Please input email'
  } else {
    document.getElementById('email-error')
    .innerText = ''
  }
  if(dataLogin.password === '') {
    document.getElementById('password-error')
    .innerText = 'Please input password'
  } else {
    document.getElementById('password-error')
    .innerText = ''
  }
  if(dataLogin.email !== '' &&
    dataLogin.password !== ''
  ) {
    model.login(dataLogin)
  } 
}
controller.chat = (user) => {
  if(user.email !== '' && user.password !== ''){
    model.chat(user)
  }
}