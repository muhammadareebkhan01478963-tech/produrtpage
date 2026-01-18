let productImg = document.getElementById("productImg");
let btns = document.getElementsByClassName("btn");

let images = [
    "img/boy1.jpeg",
    "img/boy2.jpeg",
    "img/boy3.jpeg"
];

for (let i = 0; i < btns.length; i++) {
    btns[i].onclick = function () {
        productImg.src = images[i];

        for (let bt of btns) {
            bt.classList.remove("active");
        }

        this.classList.add("active");
    };
}
