console.log('app.js loaded');

const tuningFrequency = document.getElementById("tuningFrequency");
const radioGroup = document.querySelector('#radioGroup');
const buttonRoot = document.getElementById("buttonRoot");
const buttonThird = document.getElementById("buttonThird");
const buttonFifth = document.getElementById("buttonFifth");
const buttonOff = document.getElementById("buttonOff");

// 基準音の周波数
let referenceTone = tuningFrequency.value;

// 初期値を設定
let halfStep = -9;
let selectedTonality = 'Major';
let rootFrequency = referenceTone * Math.pow(2, halfStep / 12);
let thirdFrequency = rootFrequency * 5 / 4;
let fifthFrequency = rootFrequency * 3 / 2;

// 初期値表示
console.log(halfStep, selectedTonality, rootFrequency, thirdFrequency, fifthFrequency);


// rootOnフラグ
let rootOn = false;
let thirdOn = false;
let fifthOn = false;

const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();

let rootOscillator = audioCtx.createOscillator();
let thirdOscillator = audioCtx.createOscillator();
let fifthOscillator = audioCtx.createOscillator();

gainNode.gain.value = 0.1;
gainNode.connect(audioCtx.destination);


// 基準音の変更
tuningFrequency.addEventListener('change', function() {
  resetAll();
  referenceTone = tuningFrequency.value;
  console.log(referenceTone);
  calcFrequency(referenceTone, halfStep, selectedTonality);
});

// 調を選択した時に、(音が鳴っていれば)音を消して、根音が何か(Aから半音いくつ離れているか)、長調・短調か判別
radioGroup.addEventListener('change', keySelect);

function keySelect(event) {
  resetAll();
  halfStep = event.target.value;
  selectedTonality = event.target.id;
  selectedTonality = selectedTonality.slice(-5);
  calcFrequency(referenceTone, halfStep, selectedTonality);
};

// 基準の周波数・根音・長短から、根音・3度・5度の周波数を計算
function calcFrequency(referenceTone, halfStep, selectedTonality) {
  rootFrequency = referenceTone * Math.pow(2, halfStep / 12);
  if (selectedTonality === 'Major') {
    thirdFrequency = rootFrequency * 5 / 4;
  } else {
      thirdFrequency = rootFrequency * 6 / 5;
  };
  fifthFrequency = rootFrequency * 3 / 2;
  console.log(halfStep, selectedTonality, rootFrequency, thirdFrequency, fifthFrequency);
};

// Rootボタンクリック
buttonRoot.addEventListener('click', function() {
  console.log('buttonRoot');
  rootOn = !rootOn;
  if (rootOn) {
    rootOscillator.frequency.value = rootFrequency;
    rootOscillator.type = "sine";
    rootOscillator.connect(gainNode);
    rootOscillator.start();
  } else {
    resetRoot();
  }
  console.log(rootOn);
});

// Thirdボタンクリック
buttonThird.addEventListener('click', function() {
  console.log('buttonThird');
  thirdOn = !thirdOn;
  if (thirdOn) {
    thirdOscillator.frequency.value = thirdFrequency;
    thirdOscillator.type = "sine";
    thirdOscillator.connect(gainNode);
    thirdOscillator.start();
  } else {
    resetThird();
  }
});

// Fifthボタンクリック
buttonFifth.addEventListener('click', function() {
  console.log('buttonFifth');
  fifthOn = !fifthOn;
  if (fifthOn) {
    fifthOscillator.frequency.value = fifthFrequency;
    fifthOscillator.type = "sine";
    fifthOscillator.connect(gainNode);
    fifthOscillator.start();
  } else {
    resetFifth();
  }
});

//Offボタンクリック
buttonOff.addEventListener("click", function() {
  console.log("Off");
  resetAll();
});

// 各音初期化
function resetRoot() {
  rootOn = false;
  rootOscillator.stop();
  // buttonRoot.classList.remove("btn-danger");
  // buttonRoot.classList.add("btn-secondary");
  rootOscillator = audioCtx.createOscillator();
};

function resetThird() {
    thirdOn = false;
    thirdOscillator.stop();
    // buttonThird.classList.remove("btn-danger");
    // buttonThird.classList.add("btn-secondary");
    thirdOscillator = audioCtx.createOscillator();
};

function resetFifth() {
    fifthOn = false;
    fifthOscillator.stop();
    // buttonFifth.classList.remove("btn-danger");
    // buttonFifth.classList.add("btn-secondary");
    fifthOscillator = audioCtx.createOscillator();
};

function resetAll() {
  if (rootOn) {
    resetRoot();
  }
  if (thirdOn) {
    resetThird();
  }
  if (fifthOn) {
    resetFifth();
  }
};
