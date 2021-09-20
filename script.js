let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue'); // 1
const green = document.querySelector('.green'); // 2
const red = document.querySelector('.red'); // 3
const yellow = document.querySelector('.yellow'); // 4

//cria uma ordem aleatoria
let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = clickedOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    selectedColor(elementColor, Number(i) + 1);
  }
} 

// Acende e apaga a cor
let selectedColor = (element, number) => {
  number *= 500;

  setTimeout(() => {
    element.classList.add('selected');
  }, number - 250);

  setTimeout(() => {
    element.classList.remove('selected');
  });
}


let checkOrder = () => {
  for (let i in clickedOrder) {
    if (clickedOrder[i] != order[i]) {
      lose();
      break;
    }
  }
  if (clickOrder.length == order.length) {
    alert('Score: ', score + 1);
    nextLevel();
  }
}

// funcao para tratar o click
let click = (color) => {
  clickedOrder[clickedOrder.length] = color;
  createColorElement(color).classList.add('selected')

  setTimeout(() => {
    createColorElement(color).classList.remove('selected')
  }, 250)

  checkOrder();
}