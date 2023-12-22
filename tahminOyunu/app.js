const startBtnEl = document.getElementById("start");
const startDiv = document.getElementById("start-div");
const gameStartDiv = document.getElementById("game-start-div");
const input_ = document.getElementById("guess");
const input_value = input_.value;
const guessInfo = document.getElementById("guess-info");
const gameFinishDiv = document.getElementById("game-finish-div");
const retry = document.getElementById("retry");
const finishGame = document.getElementById("finish");


let ilkSayi = Math.floor(Math.random() * 1000);
let sonSayi = Math.floor(Math.random() * 1000);
let ilk_;
let son_;
if (ilkSayi >= sonSayi) {
    ilk_ = ilkSayi;
    son_ = sonSayi;
}
else {
    ilk_ = sonSayi;
    son_ = ilkSayi;

}
let dogruSayi = Math.floor(Math.random() * (ilk_ - son_)) + son_;

let can = 10;


startBtnEl.addEventListener("click", () => {
    startGame();
});

function startGame() {
    startDiv.style.display = "none";
    gameStartDiv.style.display = "block";
    tahminEtme();
}

function tahminEtme() {
    let ilk;
    let son;
    if (ilkSayi >= sonSayi) {
        ilk = ilkSayi;
        son = sonSayi;
    }
    else {
        ilk = sonSayi;
        son = ilkSayi;
    }
    gameStartDiv.innerHTML = `<h3 class="game-start-h1" id="game-start-h1">
    ${son} ile ${ilk} araında olan sayıyı tahmin ediniz.
  </h3>
  <input type="number" class="guess" id="guess" max="${ilk}" min="${son}" />
  <p class="guess-info" id="guess-info"></p>`

    const input_ = document.getElementById("guess");
    const guessInfo = document.getElementById("guess-info");
    input_.addEventListener("change", (e) => {
        if (input_.value == dogruSayi) {
            finishDiv();
        }
        else if (input_.value < dogruSayi) {
            guessInfo.innerText = "Yukarı";
            can--;
        }
        else if (input_.value > dogruSayi) {
            guessInfo.innerText = "Aşağı";
            can--;
        }
        if (input_.value < son) {
            guessInfo.innerText = `${son} ile ${ilk} araında sayı giriniz..`
        }
        if (input_.value > ilk) {
            guessInfo.innerText = `${son} ile ${ilk} araında sayı giriniz..`
        }

        if (can == 0) {
            wrongFinishDiv();
        }
    });
}

// console.log(dogruSayi)

function finishDiv() {
    gameStartDiv.style.display = "none";
    gameFinishDiv.style.display = "block";
    gameFinishDiv.innerHTML = `<h3 class="game-start-h1" id="game-finish-h1">Doğru tahmin. Sayı ${dogruSayi}.</h3>
    <button class="retry" id="retry">Yeniden Oyna</button>
    <button class="finish" id="finish">Ana Ekrana Dön</button>`;
    const retry = document.getElementById("retry");
    const finishGame = document.getElementById("finish");

    retry.addEventListener("click", () => {
        gameStartDiv.style.display = "block";
        gameFinishDiv.style.display = "none";
        ilkSayi = Math.floor(Math.random() * 1000);
        sonSayi = Math.floor(Math.random() * 1000);
        ilk_;
        son_;
        if (ilkSayi >= sonSayi) {
            ilk_ = ilkSayi;
            son_ = sonSayi;
        }
        else {
            ilk_ = sonSayi;
            son_ = ilkSayi;

        }
        dogruSayi = Math.floor(Math.random() * (ilk_ - son_)) + son_;

        can = 10;
        startGame();
    })
    finishGame.addEventListener("click", () => {
        window.location.reload();
    })
}


function wrongFinishDiv() {
    gameStartDiv.style.display = "none";
    gameFinishDiv.style.display = "block";
    gameFinishDiv.innerHTML = `<h3 class="game-start-h1" id="game-finish-h1">Hakkın kalmadı. Sayı ${dogruSayi}.</h3>
    <button class="retry" id="retry">Yeniden Oyna</button>
    <button class="finish" id="finish">Ana Ekrana Dön</button>`;
    const retry = document.getElementById("retry");
    const finishGame = document.getElementById("finish");
    retry.addEventListener("click", () => {
        gameStartDiv.style.display = "block";
        gameFinishDiv.style.display = "none";
        ilkSayi = Math.floor(Math.random() * 1000);
        sonSayi = Math.floor(Math.random() * 1000);
        ilk_;
        son_;
        if (ilkSayi >= sonSayi) {
            ilk_ = ilkSayi;
            son_ = sonSayi;
        }
        else {
            ilk_ = sonSayi;
            son_ = ilkSayi;

        }
        dogruSayi = Math.floor(Math.random() * (ilk_ - son_)) + son_;

        can = 10;
        startGame();
    })
    finishGame.addEventListener("click", () => {
        window.location.reload();
    })
}