console.log('app.js loaded');

const tuningFrequency = document.getElementById("tuningFrequency");

// const element = document.querySelector('#radioGroup');
const element = document.querySelector('#keyGroupSharp');
const result = document.querySelector('#result');
const img = document.querySelector('#img');

const buttonRoot = document.getElementById("buttonRoot");
const buttonThird = document.getElementById("buttonThird");
const buttonFifth = document.getElementById("buttonFifth");
const buttonOff = document.getElementById("buttonOff");

console.log(tuningFrequency.value);
let frequency01 = tuningFrequency.value;

let rootOn = false;

console.log(element);
console.log(element.key.value);

tuningFrequency.addEventListener("change", () => {
  frequency01 = tuningFrequency.value
  console.log(frequency01);
  // updateFrequencies();
});

element.addEventListener('change', handleChange);

function handleChange(event) {
  const keyValue = element.key.value;
  console.log(keyValue);
  result.textContent = keyValue;
  img.src = 'img/' + keyValue + '.png'
}

// オシレーターを生成
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
let oscillator01 = audioCtx.createOscillator();

// ゲインノードの設定
gainNode.gain.value = 0.1;

// 出力先に接続して、再生開始(gainNodeは音量を調整するオブジェクト)
gainNode.connect(audioCtx.destination);

buttonRoot.addEventListener('click', function() {
  console.log('buttonRoot');
  rootOn = !rootOn;
  if (rootOn) {
    oscillator01.frequency.value = frequency01;
    oscillator01.type = "sine";
    oscillator01.connect(gainNode);
    oscillator01.start();
  } else {
    resetButtonRoot();
  }
});

// ボタン初期化
function resetButtonRoot() {
  rootOn = false;
  oscillator01.stop();
  buttonRoot.classList.remove("btn-danger");
  buttonRoot.classList.add("btn-secondary");
  oscillator01 = audioCtx.createOscillator();
};
