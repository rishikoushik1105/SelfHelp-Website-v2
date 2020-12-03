const email = document.getElementById('email')
const name = document.getElementById('name')
const query = document.getElementById('query')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')
form.addEventListener('submit',(e) => {
  let messages = []
  if (email.value === ''|| email.value === null){
    messages.push ('Email is Required')
  }

  if (name.value === ''|| name.value === null){
    messages.push ('Name is Required')
  }
  
  if (query.value === ''|| query.value === null){
    messages.push ('Query is Required')
  }



  if (messages.length > 0){

    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})