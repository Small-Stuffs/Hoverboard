const hero = document.querySelector('.hero')
const colors = ['#060606']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  // square.addEventListener('mouseout', removeColor)// event bubbling
  square.addEventListener('mouseout', () => removeColor(square))


  hero.appendChild(square)
}

const setColor = (element) => {
  const color = getRandomColor()
  element.style.background = color



}

const removeColor = (element) => {
  element.style.background = '#000000'
}

const getRandomColor = ()=> {
  return colors[Math.floor(Math.random() * colors.length)]

}
