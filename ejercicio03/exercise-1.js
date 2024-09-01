/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises. */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']
let ul = document.createElement('ul')

for (let i = 0; i < countries.length; i++) {
  const country = countries[i]
  let li = document.createElement('li')
  li.textContent = country
  ul.appendChild(li)
}

document.body.appendChild(ul)
console.log(ul)

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removing = document.querySelector('.fn-remove-me')
document.body.removeChild(removing)

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere". */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']
const divData = document.querySelector('div[data-function="printHere"]')
let ulDiv = document.createElement('ul')

for (const car of cars) {
  let li = document.createElement('li')
  li.textContent = car
  ulDiv.appendChild(li)
}

divData.appendChild(ulDiv)

/* 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen. */
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
]

for (let i = 0; i < countries2.length; i++) {
  const country = countries2[i]
  let divImage = document.createElement('div')
  divImage.classList.add('images')
  let h4 = document.createElement('h4')
  h4.textContent = country.title
  let img = document.createElement('img')
  img.src = country.imgUrl
  divImage.appendChild(h4)
  divImage.appendChild(img)
  document.body.appendChild(divImage)
}

/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la serie de divs. */
const rmvLastButton = document.createElement('button')
rmvLastButton.textContent = 'Borrar última imagen de la lista'

function rmvLastElement() {
  const divs = document.querySelectorAll('div.images')
  if (divs.length > 0) {
    const lastDiv = divs[divs.length - 1]
    document.body.removeChild(lastDiv)
  } else {
    console.log('Todas las imágenes han sido borradas')
  }
}

rmvLastButton.addEventListener('click', rmvLastElement)
document.body.appendChild(rmvLastButton)

/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
divs que elimine ese mismo elemento del html. */

function rmvImageButton(div) {
  div.remove()
}

let divsImages = document.querySelectorAll('div.images')
for (const div of divsImages) {
  const rmvEachButton = document.createElement('button')
  rmvEachButton.textContent = 'Eliminar imagen'
  rmvEachButton.addEventListener('click', function () {
    rmvImageButton(div)
  })
  div.appendChild(rmvEachButton)
}
