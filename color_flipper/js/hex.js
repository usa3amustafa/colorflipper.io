let hex = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
]

const btn = document.querySelector('.button')
const span = document.querySelector('.ptext')
const section = document.querySelector('.sec-clr')

btn.addEventListener('click', () => {
  let hexC = '#'
  for (let i = 0; i < 6; i++) {
    hexC += hex[getRandomNumber()]
  }
  console.log(hexC)
  section.style.backgroundColor = hexC
  span.textContent = hexC
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * hex.length)
}
