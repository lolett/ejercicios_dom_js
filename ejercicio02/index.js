// 2.1 Inserta dinamicamente en un html un div vacio con javascript.
let div = document.createElement('div')
document.body.appendChild(div)

// 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
let div_p = document.createElement('div')
let p = document.createElement('p')
p.textContent = 'Este párrafo va insertado en un div'
div_p.appendChild(p)
document.body.appendChild(div_p)

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un 
	loop con javascript. */
let div6 = document.createElement('div')

for (let i = 0; i < 6; i++) {
  let p = document.createElement('p')
  p.textContent = `Paragraph ${i + 1}`
  div6.appendChild(p)
}

document.body.appendChild(div6)

/* 2.4 Inserta dinamicamente con javascript en un html una p con el 
	texto 'Soy dinámico!'. */
let p_html = document.createElement('p')
p_html.textContent = 'Soy dinámico'
document.body.appendChild(p_html)

// 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2_message = document.getElementsByClassName('fn-insert-here')[0]
h2_message.textContent = 'Wubba Lubba dub dub'

/* 2.6 Basandote en el siguiente array crea una lista ul > li con 
los textos del array. */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']
const ul = document.createElement('ul')

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement('li')
  li.textContent = apps[i]
  ul.appendChild(li)
}

document.body.appendChild(ul)

// 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const classRmvElements = document.getElementsByClassName('fn-remove-me')

// aquí realizo un loop para eliminar cada uno de los elementos de la clase
// después recorro el array a la inversa ya para que el índex no genere problemas
for (let i = classRmvElements.length - 1; i >= 0; i--) {
  const element = classRmvElements[i]
  document.body.removeChild(element)
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
let p_middle = document.createElement('p')
p_middle.textContent = 'Voy en medio!'
const divs = document.querySelectorAll('div')

document.body.insertBefore(p_middle, divs[1])

/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase 
	.fn-insert-here */
let divs_fn = document.querySelectorAll('.fn-insert-here')

for (let i = 0; i < divs_fn.length; i++) {
  let p_inside = document.createElement('p')
  p_inside.textContent = 'Voy dentro!'
  divs_fn[i].appendChild(p_inside)
}
