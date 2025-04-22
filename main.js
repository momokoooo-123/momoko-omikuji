function drawOmikuji() {
  document.getElementById('startImg').style.display = 'none';
  document.getElementById('lotteryImg').style.display = 'block';

  // 抽選のように見せるために2秒待つ
  setTimeout(function() {
    document.getElementById('lotteryImg').style.display = 'none';

    // 結果のパターンをランダムに選ぶ
    const results = ['daikichi.gif', 'kichi.gif', 'kyou.gif'];
    const result = results[Math.floor(Math.random() * results.length)];

    // 結果画像の表示
    const resultImg = document.getElementById('resultImg');
    resultImg.src = result;
    resultImg.style.display = 'block';
  }, 2000);
}