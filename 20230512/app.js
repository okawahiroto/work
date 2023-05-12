console.log('app.js loaded');

// const halfStepValue = document.getElementById("C");
// console.log(halfStepValue.value)

// フォーム要素を取得
const form = document.querySelector('form');

// halfStepの初期値を設定
let halfStep = -9;

// ラジオボタンの変更を監視し、選択された値をコンソールに表示する
form.addEventListener('change', (event) => {
  if (event.target.name === 'keys') {
    halfStep = event.target.value

    // rootFrequency関数に、基準音の周波数,Aからどれだけ離れているかを
    // 引数で渡す。
    rootFrequency(referenceTone, halfStep);
  }
});

// 基準音の周波数(本番はセレクトで選ばせる)
let referenceTone = 440;

// Aから半音いくつ分離れているか(-9～+3)
let Cdur = {
  halfStep : -9,
};

// // 調整(各音)ごとの周波数を計算する。
function rootFrequency(referenceTone, halfStep) {
  let freq = referenceTone * Math.pow(2, halfStep / 12);
  console.log(referenceTone, halfStep, freq);
}