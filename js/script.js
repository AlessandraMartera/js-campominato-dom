const container = document.getElementById("container_square");

const play = document.getElementById("play_button");

const clean = document.getElementById("refresh_button");
const mode = document.getElementById("difficulty").value;

let score = 0;
// let num1 = 1;
// let num2 = 100;

// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
play.addEventListener('click', gridGenerateSquare);

clean.addEventListener('click', cleanContainer)


// play.addEventListener("click", gridGenerateSquare);



// FUNZIONI
// funzione che permette di generare una griglia con gli .square
function gridGenerateSquare() {

// usa la dunzione clean per pulire il contenitore delle square
cleanContainer();

// prendi il valore della difficoltà e mettila in mode
const mode = document.getElementById("difficulty").value;


// dichiarazioni delle variabili che uso nella funzione che mi aiutano a capire e a far funzionare le selezione di difficoltà

let num; //num degli sq
let width;

// numero di bombe che devono essere presenti nella griglia
let numOfBoomContained = 16;
       
// Array per provare il fuzionamento 
let numBoom = [13, 20, 11, 4, 5, 8];
        

// controlla la difficolta immmessa e cambia i valori di conseguenza
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
        
        newSquare.append(i);
        container.append(newSquare);


        // attivare la singola cella con il numero e stampare nella console il numero della cella selezionata
        newSquare.addEventListener("click",
        function() {

            
            

            // attivo la casella
            this.classList.add("active");

            // stampo il numero all'interno della casella cliccata
            console.log(`Hai clickato il numero ${i}`);

            // controllo se il numero dalla casella è icluso nell'array dei numeri bomba
            // se numero boom stamppo hai perso, altrimenti incremento il contatre dello score
            if (  numBoom.includes(i)) {
                this.classList.add("boom");
                console.log(`Hai perso il tuo punteggio è ${score}`);
            }

            score++;
             

            console.log(`il tuo punteggio è ${score}`);
        }
        );
    }
}

// funzione per creare randomicamene numeri bomba
function randomNumBoom ( num, numOfBoomContained ) {

    const arraySquaresBoom = [];

    // creo un numero casuale per ilnumero di numeri boom contenuti di volte
    while ( arraySquaresBoom.length <= numOfBoomContained ){
        randomNum = Math.floor((Math.random () * num ) + 1 );
        

        let randomNum = randomNumBoom ( num, numOfBoomContained );
    
        if ( !arraySquaresBoom.includes(randomNum) ) {
            arraySquaresBoom.push(randomNum);
        }
    
        console.log(arraySquaresBoom);
    }
    
    return randomNum
    
}

// funzione di reset del container 
function cleanContainer (){
    container.innerHTML = "";
}


