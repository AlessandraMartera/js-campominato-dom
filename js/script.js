const container = document.getElementById("container_square");

const play = document.getElementById("play_button");

const clean = document.getElementById("refresh_button");
const mode = document.getElementById("difficulty").value;

// let num1 = 1;
// let num2 = 100;

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click', gridGenerateSquare);

clean.addEventListener('click', cleanContainer)


// play.addEventListener("click", gridGenerateSquare);




// FUNZIONI
// funzione che permette di generare una griglia con gli .square
function gridGenerateSquare() {

    cleanContainer();

const mode = document.getElementById("difficulty").value;

// dichiarazioni delle variabili che uso nella funzione che mi aiutano a capire e a far funzionare le selezione di difficoltà
let num;
let width;
    if ( mode === "normal" ) {
        num = 100;
        width = "width10";
    } else if ( mode === "hard" ){
        num = 81;
        width = "width9";
    }
    else {
        num = 49;
        width = "width7";
    }
    
    
    // Ogni cella ha un numero progressivo, da 1 a 100.
    // Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    for ( let i = 1; i <= num; i++) {

        const newSquare = document.createElement("div");
        newSquare.classList.add("square");
        newSquare.classList.add(width);
        
        newSquare.addEventListener("click",
        function() {
            this.classList.add("active");
            console.log(`Hai clickato il numero ${i}`);
        }
        );

        newSquare.append(i);
        container.append(newSquare);

        
    }
}

// funzione di reset del container 
function cleanContainer (){
    container.innerHTML = "";
}

// attivare la singola cella con il numero e stampare nella console il numero della cella selezionata
