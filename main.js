let cardsgenerated = [];
document.querySelector("#draw").addEventListener("click", function () {
    let numberDraw = document.querySelector("#numberDraw").value;
    document.querySelector(".contenedor").innerHTML = '';
    cardsgenerated = [];
    for (let i = 0; i < numberDraw; i++) {
        let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
        let rn1 = Math.floor(Math.random() * cards.length);
        let colors = ['spade', 'cubs', 'hearts', 'diamonds'];
        let rn2 = Math.floor(Math.random() * colors.length);
        generarCarta(cards[rn1], colors[rn2]);
        cardsgenerated.push({"num": cards[rn1], "color": colors[rn2]});
    }
});

function generarCarta(num, color) {
    let number = document.createElement("div");
    number.classList.add("number");
    number.classList.add(color);
    number.innerHTML = num;

    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(number);

    document.querySelector(".contenedor").appendChild(card);
}

document.querySelector("#sort").addEventListener("click", function(){
    console.log(cardsgenerated);
})