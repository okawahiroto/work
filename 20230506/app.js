console.log('app.js loaded');

// const element = document.querySelector('#radioGroup');
const element = document.querySelector('#keyGroupSharp');
const result = document.querySelector('#result');
const img = document.querySelector('#img');

const buttonRoot = document.getElementById("buttonRoot");
const buttonThird = document.getElementById("buttonThird");
const buttonFifth = document.getElementById("buttonFifth");
const buttonOff = document.getElementById("buttonOff");

console.log(element);
console.log(element.key.value);

element.addEventListener('change', handleChange);

function handleChange(event) {
  const keyValue = element.key.value;
  console.log(keyValue);
  result.textContent = keyValue;
  img.src = 'img/' + keyValue + '.png'
}

