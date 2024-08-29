/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme*/
const showmeButton = document.querySelector('.showme')
console.log(showmeButton)

/* 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado */
const h1Console = document.querySelector('#pillado')
console.log(h1Console)

/* 1.3 Usa querySelector para mostrar por consola todos los p */
const paragraphs = document.querySelectorAll('p')
for (let i = 0; i < paragraphs.length; i++) {
  const paragraph = paragraphs[i]
  console.log(paragraph)
}
console.log(paragraphs)

/* 1.4 Usa querySelector para mostrar por consola todos los elementos con 
	la clase.pokemon */
const pokemons = document.querySelectorAll('.pokemon')
for (let i = 0; i < pokemons.length; i++) {
  const pokemon = pokemons[i]
  console.log(pokemon)
}

/* 1.5 Usa querySelector para mostrar por consola todos los elementos con 
el atributo data-function="testMe". */
const functions = document.querySelectorAll('[data-function="testMe"]')
for (const tagg of functions) {
  console.log(tagg)
}

/* 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe". */
const functions2 = document.querySelectorAll('[data-function="testMe"]')
console.log(functions2[2])
