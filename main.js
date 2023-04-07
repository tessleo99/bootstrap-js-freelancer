// --------- PROGRAMMA --------------

//Inizializziamo una variabile per il prezzo
let price = 0;
console.log(price);
//Inizializiamo una variabile per il numero di ore
let howManyHours = 0;

//Codici sconto del 25%
let couponCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
console.log(couponCodes);


// ---------- FUNZIONI ---------------
function calculateWorkPrice(event){
    event.preventDefault();

    //Stabiliamo un prezzo base per il tipo di lavoro
    let selectedTypeOfWork = document.getElementById("type of work").value;
    console.log(selectedTypeOfWork);

    switch(selectedTypeOfWork){
        case "Backend":
            price += 20.50;
            break;
        case "Frontend":
            price += 15.30;
            break;
        case "Analysis-of-a-project":
            price += 33.60;
            break;
    }   

    console.log(price);

    
    //Prendiamoci quante ore di lavoro richiede il cliente
    let howManyHours = document.getElementById("hoursOfWork").value;
    howManyHours = parseInt (howManyHours);
    //Stabiliamo il prezzo in base al numero di ore
    price = price * howManyHours;
    console.log(price);

   
   
   
    //Calcoliamo l'eventuale sconto con i cupon
    let cuponCodeUser = document.getElementById("coupon").value;
    //controlliamo se il cupon inserito esiste
    let isCuponAvaliable = couponCodes.includes(cuponCodeUser);
    
    if(isCuponAvaliable){
        let sales = (price/100) * 25;
        price = price - sales;
        couponCodes = removeElementFromArray(couponCodes, cuponCodeUser);
        console.log(couponCodes);
        document.getElementById("result-applied-cupon").innerHTML = "Il cupon è stato corettamente applicato!";
    } else if (cuponCodeUser != ""){
        document.getElementById("result-applied-cupon").innerHTML = "Il cupon non è valido!";
    } else {
        document.getElementById("result-applied-cupon").innerHTML = "";
    }
    
    console.log(price);


}





















//---------------- FUNZIONI GENERICHE -------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}