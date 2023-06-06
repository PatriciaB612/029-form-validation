let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let username = id('username'),
  email = id('email'),
  password = id('password'),
  form = id('form'),
  errorMsg = classes('error'),
  successIcon = classes('success-icon'),
  failureIcon = classes('failure-icon')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  validation(username, 0, 'Username cannot be blank')
  validation(email, 1, 'Email cannot be blank')
  validation(password, 2, 'Password cannot be blank')
})

let validation = (id, i, message) => {
  if (id.value.trim() === '') {
    errorMsg[i].textContent = message
    failureIcon[i].style.opacity = '1'
    successIcon[i].style.opacity = '0'
  } else {
    errorMsg[i].textContent = ''
    failureIcon[i].style.opacity = '0'
    successIcon[i].style.opacity = '1'
  }
}
