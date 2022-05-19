const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;
const colors = ['#90FF3D80', '#3852FF80', '#FF0F8680', '#FFA1BD80', '#FF030380', '#D8FF4080',
  '#514A6B80', '#E0992D80']


for (let i = 0; i < SQUARE_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseover', setColor)

  square.addEventListener('mouseleave', removeColor)
  
  board.append(square)
}

function setColor(event) {
  const element = event.target
  const color = getRandomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = `0 0 2px ${color},
  0 0 10px ${color}`
}

function removeColor(event) {
  const element = event.target
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}