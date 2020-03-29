var arrCards = []; // Global variable for the cards
document.querySelector("#draw").addEventListener("click", function () { //al hacer click se generan las cartas
    document.querySelector(".contenedor").innerHTML = '';
    cardsgenerated = [];
    for (var x = 1; x < newinput; x++) {
        let cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"]; 
        let a = Math.floor(Math.random() * cards.length); // genera al azar un numero de las cartas que son objetos
        let symbols = ['spade', 'cubs', 'hearts', 'diamonds'];
        let b = Math.floor(Math.random() * colors.length); // genera una pinta al azar
        generarCarta(cards[rn1], colors[rn2]); //dibuja la carta
        cardsgenerated.push({"num": cards[rn1], "color": colors[rn2]});
    }
    let cards = document.querySelector(".cards");
    cards.appendChild(drawCard(numbers[a], symbols[b], classColor));
    arrCards.push({ "number": numbers[a], "symbol": symbols[b], "classCol": classColor });
});

const drawCard = (num, color) => {
    let card = document.createElement("div"); //crea un div para poner la carta
    card.classList.add("number");
    card.classList.add(color);
    card.innerHTML = num;

    let card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(number);
}

const OrderNumbers = () => {
    let newArrCards = arrCards.slice();
    bubbleSort(newArrCards);
    console.log(arrCards); // No Ordered
    console.log(newArrCards); // Ordered
}

const bubbleSort = (arr) => {
    console.log(arr.length);
    let wall = arr.length - 1; //we start the wall at the end of the array
    
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            //alert(index + " " + arr);
            if (arr[index].number > arr[index + 1].number) {   
                let aux = arr[index];
                arr[index] = arr[index + 1];
                arr[index + 1] = aux;
                for(let j=0; j<arr.length; j++){
                    console.log(arr[j]);
                    let cards = document.querySelector(".cards2");
                    cards.appendChild(drawCard(arr[j].number, arr[j].symbol, arr[j].classCol));
                    if(j == arr.length-1){
                        let br = document.createElement("br"); 
                        cards.appendChild(br);
                    }
                }
            }
            index++;
        }
        wall--; //decrease the wall for optimization
    }
    //let newdiv = document.createElement("div");
    //newdiv.innerHTML = arr;
    return arr;
};
