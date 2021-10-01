const hero = document.querySelector('.hero')
const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
const SQUARES = 500

for(let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  hero.appendChild(square)
}