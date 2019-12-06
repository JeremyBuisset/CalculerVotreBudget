var addChamp = document.getElementsByClassName("btnAdd");
var stockDiv;
var stockPara;
var stockInput;
var stockSpan;
var champSpend = document.getElementById("champSpend");
var champIncome = document.getElementById("champIncome");
var pName;
var stockSpends;
var spends = 0;
var spendsTotal = 0;
var stockIncomes;
var incomes = 0;
var incomesTotal = 0;
var bank;
var stockBank;
var bankTotal;
var total;
var display = document.getElementById("calculDisplay");

function createInput (P1){
    stockDiv = document.createElement("div");
    stockDiv.className = "champ";
    stockPara = document.createElement("p");
    pName = prompt("Saisissez le nom de votre champ");
    stockPara.innerHTML = pName;
    stockInput = document.createElement("input");
    stockInput.type = "number";
    if (P1 === champSpend){
        stockInput.className = "inputSpend";
    } else {
        stockInput.className = "inputIncome";
    }
    stockSpan = document.createElement("span");
    stockSpan.innerHTML = "€ par mois";
    P1.appendChild(stockDiv);
    stockDiv.appendChild(stockPara);
    stockDiv.appendChild(stockInput);
    stockDiv.appendChild(stockSpan);
}

for (var i =0; i < 1; i++){
    addChamp[0].addEventListener("click", function () {
        createInput (champSpend);

    });
    addChamp[1].addEventListener("click", function () {
        createInput (champIncome);
    });
}

function calculSpends () {
    stockSpends = document.getElementsByClassName("inputSpend");
    for (var j=0; j < stockSpends.length; j++) {
        if (stockSpends[j].value < 0){
            alert("Toute valeur négative est considérée égale à 0");
            stockSpends[j].value = 0
        } else if (j === 2) {
            spends = parseFloat(stockSpends[j].value);
            spendsTotal = spendsTotal + (spends * 4);
        } else if (j === 3) {
            spends = parseFloat(stockSpends[j].value);
            spendsTotal = spendsTotal + (spends / 12);
        } else {
            spends = parseFloat(stockSpends[j].value);
            spendsTotal = spendsTotal + spends;
        }
    }
}

//P1 : className, P2 : stock, P3 : value, P4 : total
function incomesValue (){
    stockIncomes = document.getElementsByClassName("inputIncome");
    for (var i = 0; i < stockIncomes.length; i++){
        if (parseInt(stockIncomes[i].value) < 0){
            alert("Toute valeur négative est considérée égale à 0");
            stockIncomes[i].value = 0
        } else {
            incomes = parseFloat(stockIncomes[i].value);
            incomesTotal = incomesTotal + incomes;
        }
    }
    return incomesTotal
}

function bankValue () {
    bank = document.getElementById("inputBank");
    if (bank.value < 0){
        alert("Toute valeur négative est considérée égale à 0");
        bank.value = 0
    } else {
        bankTotal = parseFloat(bank.value);
        return bankTotal;
    }

}

function calcul() {
    calculSpends();
    incomesValue();
    bankValue();
    console.log(spendsTotal, incomesTotal, bankTotal);
    total = (incomesTotal + bankTotal) - spendsTotal;
    console.log(total);
    spendsTotal = 0;
    incomesTotal = 0;
    bankTotal = 0;
}

function resetSpends() {
    stockSpends = document.getElementsByClassName("inputSpend");
    for (var j = 0; j < stockSpends.length; j++) {
        stockSpends[j].value = "";
    }
}

function resetIncomes () {
    stockIncomes = document.getElementsByClassName("inputIncome");
    for (var k=0; k < stockIncomes.length; k++) {
        stockIncomes[k].value = ""
    }
}

function reset (){
    resetSpends();
    resetIncomes();
    bank = document.getElementById("inputBank");
    bankTotal = "";
    bank.value = bankTotal;
}

document.getElementById("reset").addEventListener("click", function () {
    reset();
});

document.getElementById("validate").addEventListener("click", function () {
    calcul ();
    display.innerHTML = "Il vous reste "+total+ " €";

    if (total > 1000){
        display.innerHTML += "<br><br>De quoi acheter de jolies choses";
    } else if (total < 1000 && total > 500){
        display.innerHTML += "<br><br>Vous pouvez vous faire plaisir";
    } else if (total < 500 && total > 100){
        display.innerHTML += "<br><br>Attention aux excès !";
    } else if (isNaN(total)){
        total = 0;
    } else if (total < 100 && total > 10) {
        display.innerHTML += "<br><br>Faudrait mieux les garder à ce niveau là ...";
    } else if (total < 10 && total > 0){
            display.innerHTML += "<br><br>Au moins, vous pouvez acheter un Kebab";
    } else if (total === 0){
        display.innerHTML += "<br><br>Votre compte à la forme de votre ventre après noel";
    } else {
        display.innerHTML += "<br><br>Le découvert est votre meilleur ami à présent ...";
    }
    console.log(spendsTotal, incomesTotal, bankTotal)
});








