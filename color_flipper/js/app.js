let colors = ['red', 'green', 'blue', 'tomato', 'aqua']

const btn = document.querySelector('.button')
const span = document.querySelector('.ptext')
const section = document.querySelector('.sec-clr')

btn.addEventListener('click', () => {
  const randomNumber = getRandomNumber()
  section.style.backgroundColor = colors[randomNumber]
  span.textContent = colors[randomNumber]
})

const getRandomNumber = () => {
  return Math.floor(Math.random() * colors.length)
}
