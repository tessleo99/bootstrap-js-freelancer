// --------- PROGRAMMA --------------

//Inizializiamo una variabile per il numero di ore
let howManyHours = 0;

//Codici sconto del 25%
let couponCodes = ["YHDNU32", "JANJC63", "PWKCN25", "SJDPO96", "POCIE24"];
console.log(couponCodes);


// ---------- FUNZIONI ---------------
function calculateWorkPrice(event){
    event.preventDefault();

    //Inizializziamo una variabile per il prezzo
    let price = 0;
    console.log(price);

    //Stabiliamo un prezzo base per il tipo di lavoro
    let selectedTypeOfWork = document.getElementById("typeOfWork").value;
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
    if(isNaN (howManyHours) || howManyHours == ""){
        document.getElementById("hourValidate").innerHTML= "Inserisci un numero!";
        document.getElementById("hourValidate").classList.add("text-danger");
        document.getElementById("hoursOfWork").classList.add("text-danger");
       } 
    howManyHours = parseInt (howManyHours);
    //Stabiliamo il prezzo in base al numero di ore
    price = price * howManyHours;
    console.log(price);

   
   
   
    //Calcoliamo l'eventuale sconto con i cupon
    let couponCodeUser = document.getElementById("coupon").value;
    //controlliamo se il cupon inserito esiste
    let isCouponAvaliable = couponCodes.includes(couponCodeUser);

    if(isCouponAvaliable){
        let sales = (price/100) * 25;
        price = price - sales;
        couponCodes = removeElementFromArray(couponCodes, couponCodeUser);
        console.log(couponCodes);
        document.getElementById("result-applied-coupon").innerHTML = "Il coupon è stato corettamente applicato!";
    } else if (couponCodeUser != ""){
        document.getElementById("result-applied-coupon").innerHTML = "Il coupon non è valido!";
        document.getElementById("result-applied-coupon").classList.add("text-danger");
        document.getElementById("coupon").classList.add("text-danger");
    } else {
        document.getElementById("result-applied-coupon").innerHTML = "";
    }
    
    console.log(price);


    //Facciamo visualizzare il prezzo all'utente
    document.getElementById("price").innerHTML = price.toFixed(2);

}





















//---------------- FUNZIONI GENERICHE -------------
function removeElementFromArray(array, elementToRemove){

    const index = array.indexOf(elementToRemove);

    array.splice(index, 1);

    return array;

}