console.log("app.js loaded");
// getUserMediaでカメラから映像を取得する
navigator.mediaDevices.getUserMedia({video: true})

.then(function(stream) {
  // Video要素にカメラからの映像ストリームをセットする
  var video = document.getElementById('camera-stream');
  video.srcObject = stream;
  video.play();
})
.catch(function(err) {
  console.log('getUserMediaでカメラの取得に失敗しました：', err);
});
