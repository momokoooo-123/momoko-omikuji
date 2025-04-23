window.onload = function () {
  const tapBtn = document.getElementById("tap-btn");
  const resultImg = document.getElementById("result-img");
  const againBtn = document.getElementById("again-btn");

  const results = [
    "daikichi.png",
    "chukichi.png",
    "shoukichi.png",
    "kyou.png"
  ];

  // 初期状態
  resultImg.style.display = "none";
  againBtn.style.display = "none";

  tapBtn.addEventListener("click", function () {
    // TAPボタンを非表示にする
    tapBtn.style.display = "none";

    // 抽選中のGIFを表示（省略可能）
    resultImg.src = "lottery.gif"; // 抽選中の画像（なければこの行削除OK）
    resultImg.style.display = "block";

    // 少し待ってから結果表示
    setTimeout(() => {
      const selectedResult = results[Math.floor(Math.random() * results.length)];
      resultImg.src = selectedResult;

      // 結果が表示されたあとに「もう一回」ボタン表示
      setTimeout(() => {
        againBtn.style.display = "block";
      }, 800); // ←この数字で表示タイミングを調整！
    }, 1200); // 抽選中の画像表示時間
  });

  // もう一回引くボタンでページリロード
  againBtn.addEventListener("click", function () {
    location.reload();
  });
};
