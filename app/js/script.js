const form = document.forms[0]

function register() {
  var data = {}

  if (form.name.value) data.name = form.name.value
  if (form.email.value) data.email = form.email.value
  if (form.classYear.value) data.classYear = form.classYear.value
  if (form.phone.value) data.phoneNumber = form.phone.value
  if (form.phoneProvider.value) data.phoneProvider = form.phoneProvider.value
  if (form.password.value) data.password = form.password.value
  fetch('/register', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(res) {
    res.json()
    .then(function(user) {
      alert(JSON.stringify(user))
    })
  }).catch(function(err) {
    console.error(err)
  })
}

function createItem() {
  var data = {}

  if (form.name.value) data.name = form.name.value
  if (form.description.value) data.description = form.description.value
  if (form.price.value) data.price = form.price.value
  if (form.quantity.value) data.quantity = form.quantity.value
  fetch('/createItem', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  }).then(function(res) {
    res.json()
    .then(function(item) {
      alert(JSON.stringify(item))
    })
  }).catch(function(err) {
    console.error(err)
  })
}