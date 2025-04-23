function drawOmikuji() {
  document.getElementById('startImg').style.display = 'none';
  document.getElementById('lotteryImg').style.display = 'block';

  setTimeout(function() {
    document.getElementById('lotteryImg').style.display = 'none';

    const results = ['daikichi.png', 'chukichi.png', 'shokichi.png', 'kyo.png'];

    const result = results[Math.floor(Math.random() * results.length)];

    const resultImg = document.getElementById('resultImg');
    resultImg.src = result;
    resultImg.style.display = 'block';
  }, 2000);
  document.getElementById("again-btn").style.display = "block";
  document.getElementById("again-btn").addEventListener("click", function () {
  location.reload();
    // 結果画像を表示
document.getElementById("result-img").src = selectedResult;
document.getElementById("result-img").style.display = "block";

// 0.8秒後にもう一回ボタンを表示（画像表示後に出るように）
setTimeout(() => {
  document.getElementById("again-btn").style.display = "block";
}, 800);
});
}
