

let price = 0;
console.log(price);

function calculateWorkPrice(event){
    event.preventDefault();

    console.log("funziona");

    let selectedTypeOfWork = document.getElementById("type of work").value;
    console.log(selectedTypeOfWork);

    switch(selectedTypeOfWork){
        case "Backend":
            price += 20.50;
            break;
        case "Frontend":
            price += 15.30;
            break;
        case "Analysis of a project":
            price += 33.60;
            break;
    }   

    console.log(price);





}