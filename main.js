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
  const againBtn = document.getElementById("againBtn");

againBtn.addEventListener("click", () => {
  // 初期状態に戻す
  resultImg.style.display = "none";
  againBtn.style.display = "none";
  tapBtn.style.display = "block";
  title.style.display = "block";
});

// 結果を表示したあとに、再抽選ボタンを表示
function showResult(again.png) {
  resultImg.src = result;
  resultImg.style.display = "block";
  tapBtn.style.display = "none";
  title.style.display = "none";
  againBtn.style.display = "block";
}
}
