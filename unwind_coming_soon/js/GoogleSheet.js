

const scriptURL = 'https://script.google.com/macros/s/AKfycbzPrOOPofn_Q5umAm1zPchyh6FCFJC8GnhJm2A8NS9aWLioZAGQN70SPis0mdKiujE4VA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
  form.reset()
})