/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */
const button = document.createElement('button')
button.id = 'btnToClick'
button.textContent = 'Console log info'

function getEventInfo(event) {
  console.log('Event info: ', event)
}

button.addEventListener('click', getEventInfo)
document.body.appendChild(button)

// 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const inputs = document.querySelectorAll('input')

function focusEvent(event) {
  console.log(event.target.value)
}

for (const input of inputs) {
  input.addEventListener('focus', focusEvent)
}

// 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
function inputEvent(event) {
  console.log(event.target.value)
}

for (const input of inputs) {
  input.addEventListener('input', inputEvent)
}

/* Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html 
que imprima cada uno de los albums. */

const albums = [
  'De Mysteriis Dom Sathanas',
  'Reign of Blood',
  'Ride the Lightning',
  'Painkiller',
  'Iron Fist'
]

let ul = document.createElement('ul')

albums.forEach((album) => {
  let li = document.createElement('li')
  li.textContent = album
  ul.appendChild(li)
})

document.body.appendChild(ul)
