console.log('app.js loaded');

const element = document.querySelector('#radioGroup');
const result = document.querySelector('#result');
const img = document.querySelector('#img');

console.log(element);
console.log(element.radio.value);

element.addEventListener('change', handleChange);

function handleChange(event) {
  const radioValue = element.radio.value;
  console.log(radioValue);
  result.textContent = radioValue;
  img.src = 'img/' + radioValue + '.png'
}

