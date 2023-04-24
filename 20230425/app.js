console.log('app.js loaded');

const text = document.getElementById('text');
const textContent = text.textContent;

// ボタンをクリックするとクリップボードにコピーする
const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  console.log('クリップボードにコピー');

  // マウスで選択したテキストをクリップボードにコピー
  // const selectedText = window.getSelection().toString();
  // navigator.clipboard.writeText(selectedText);
  // console.log(selectedText);

  // テキストをクリップボードにコピー
  navigator.clipboard.writeText(textContent);
  console.log(textContent);

});