console.log("app.js loaded");
// getUserMediaでカメラから映像を取得する
navigator.mediaDevices.getUserMedia(
    //マイクはオフ, カメラの設定   背面カメラを希望する 640×480を希望する
    {"audio":false,"video":{"facingMode":"environment","width":{"ideal":640},"height":{"ideal":480}}}
)
.then(function(stream) {
  // Video要素にカメラからの映像ストリームをセットする
  var video = document.getElementById('camera-stream');
  video.srcObject = stream;
  video.play();
})
.catch(function(err) {
  console.log('getUserMediaでカメラの取得に失敗しました：', err);
});
