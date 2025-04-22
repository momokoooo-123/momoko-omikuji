function drawOmikuji() {
  document.getElementById('startImg').style.display = 'none';
  document.getElementById('lotteryImg').style.display = 'block';

  setTimeout(function() {
    document.getElementById('lotteryImg').style.display = 'none';

    const results = ['daikichi.png', 'chukichi.png', 'shoukichi.png', 'kyou.png'];

    const result = results[Math.floor(Math.random() * results.length)];

    const resultImg = document.getElementById('resultImg');
    resultImg.src = result;
    resultImg.style.display = 'block';
  }, 2000);
}
