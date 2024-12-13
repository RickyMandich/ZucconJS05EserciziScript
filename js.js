// Esercizio 1: Selezionare un Elemento per ID
let elemento1 = document.getElementById("miaClasse");
elemento1.innerHTML = "Nuovo contenuto per l'elemento con ID 'miaClasse'!";

// Esercizio 2: Selezionare Elementi per Classe
let elementi2 = document.getElementsByClassName("miaClasse");
for (let i = 0; i < elementi2.length; i++) {
    elementi2[i].style.backgroundColor = "yellow";
}

// Esercizio 3: Selezionare Elementi per Tag
let paragrafi = document.getElementsByTagName("p");
for (let i = 0; i < paragrafi.length; i++) {
    paragrafi[i].innerText = "Testo modificato!";
}

// Esercizio 4: Selezionare Elementi con querySelector
let elemento4 = document.querySelector(".miaClasse");
elemento4.innerHTML = "Contenuto modificato con querySelector!";

// Esercizio 5: Selezionare Elementi con querySelectorAll
let elementi5 = document.querySelectorAll(".miaClasse");
elementi5.forEach(elemento => {
    elemento.style.color = "blue";
});

// Esercizio 6: Navigare tra i Figli
let elementoPadre = document.getElementById("contenitore");
let figli = elementoPadre.children;
for (let i = 0; i < figli.length; i++) {
    figli[i].innerHTML = "Nuovo contenuto del figlio";
}

// Esercizio 7: Navigare tra i Genitori
let elementoFiglio = document.getElementById("figlio");
let genitore = elementoFiglio.parentElement;
genitore.style.backgroundColor = "green";

// Esercizio 8: Selezionare il Primo e l’Ultimo Elemento Figlio
let contenitore8 = document.getElementById("contenitore");
let primoFiglio = contenitore8.firstElementChild;
let ultimoFiglio = contenitore8.lastElementChild;
primoFiglio.innerHTML = "Primo figlio modificato!";
ultimoFiglio.innerHTML = "Ultimo figlio modificato!";

// Esercizio 9: Navigare tra i Fratelli
let elemento9 = document.getElementById("elemento");
let fratelloSuccessivo = elemento9.nextElementSibling;
let fratelloPrecedente = elemento9.previousElementSibling;

if (fratelloSuccessivo) fratelloSuccessivo.style.color = "red";
if (fratelloPrecedente) fratelloPrecedente.style.color = "blue";

// Esercizio 10: Aggiungere e Rimuovere Classi
let elemento10 = document.getElementById("miaClasse");
elemento10.classList.add("nuovaClasse");  // Aggiungi una classe
elemento10.classList.remove("vecchiaClasse");  // Rimuovi una classe