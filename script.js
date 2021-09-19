let order = [];
let clickedOrder = [];
let score = 0;

const blue = document.querySelector('.blue'); // 1
const green = document.querySelector('.green'); // 2
const red = document.querySelector('.red'); // 3
const yellow = document.querySelector('.yellow'); // 4

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order[order.length] = clickedOrder;
  clickedOrder = [];

  for (let i in order) {
    let elementColor = createColorElement(order[i]);
    selectedColor(elementColor, Number(i) + 1);
  }
} 

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
  
}