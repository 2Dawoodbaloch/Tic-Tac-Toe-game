let ring = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";
let isgameover = false;
function change() {
    if (turn === "x") {
        return "0";
    } else {
        return "x";
    }
};
btn.addEventListener("click", function () {
    let boxtext = document.getElementsByClassName("box");

    Array.from(boxtext).forEach(element => {
        element.innerText = "";
    });
    turn = "x";
    document.querySelector('.Turn-info').innerText = "Turn for " + turn;
    isgameover = false;
    document.querySelector(".info-img img").style.width = "0px";

});
const checkwin = () => {
    let btntext = document.getElementsByClassName('box');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    wins.forEach(e => {
        if ((btntext[e[0]].innerText === btntext[e[1]].innerText) && (btntext[e[2]].innerText === btntext[e[1]].innerText) && (btntext[e[0]].innerText !== "")) {
            document.querySelector('.Turn-info').innerText = btntext[e[0]].innerText + " Won";
            gameover.play();
            document.querySelector(".info-img img").style.width = "30%";
            isgameover = true;
        }
    })
};
ring.play();
let boxtext = document.getElementsByClassName("box");
for (let i = 0; i < boxtext.length; i++) {
    boxtext[i].addEventListener('click', function () {
        if (boxtext[i].innerText === "") {
            boxtext[i].innerText = turn;
            turn = change();
            ting.play();
            checkwin();
            if (!isgameover) {
                document.getElementsByClassName("Turn-info")[0].innerText = "Turn for " + turn;
            }
        }
    });
}