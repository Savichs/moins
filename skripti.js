//alert("Čau")
console.log("test");

var logs = document.querySelector(".chataZinas");
var vards =document.querySelector("#vards");
var zina =document.querySelector("#zina");


function sutitZinu(){
    console.log("Poga Darbojas");
    console.log("ziņu ir: "+zina.value);

    logs.innerHTML = logs.innerHTML + "</br>"+zina.value;
    
}

async function ieladetZinas(){
    let datiNoServera = await fetch("ziinas.txt");
    let dati = await datiNoServera.text();
    console.log(dati);

    logs.innerHTML = dati;

}

//reizi 1 sekundē izpilda funkciju ieladetZinas()
setInterval(ieladetZinas, 1000)