let contadorInput = document.getElementById("contador-input");
let botonContadorExe = document.getElementById("ejecutar-contador");
let resultadoCaracteresCon = document.getElementById("resultCaracteresCon");
let resultadoCaracteresSin = document.getElementById("resultCaracteresSin");
let resultadoPalabras = document.getElementById("resultPalabras");
let resultadoMasLarga = document.getElementById("resultMasLargas");

let acronimoInput = document.getElementById("acronimo-input");
let botonAcronimosExe = document.getElementById("ejecutar-acronimo");
let resultadoAcronimo = document.getElementById("acronimo");

botonContadorExe.addEventListener("click", function(){
    let strContador = contadorInput.value;
    console.log(strContador);
    
    let strContadorLimpio = strContador.trim();
    resultadoCaracteresCon.innerHTML = "Cantidad de caracteres con espacios: " + strContadorLimpio.length;
    resultadoCaracteresSin.innerHTML = "Cantidad de caracteres sin espacios: " + strContadorLimpio.replaceAll(" ","").length;
    console.log("Cantidad de caracteres con espacios: " + strContadorLimpio.length);
    console.log("Cantidad de caracteres sin espacios: " + strContadorLimpio.replaceAll(" ","").length);

    let cantidadPalabras = 0;
    let strContadorPalabras = strContadorLimpio + " ";

    for(let i = 0; i <= strContadorPalabras.length; i++){
        if(strContadorPalabras[i]===" "){
            if(strContadorPalabras[i+1]!==" "){
                cantidadPalabras++;
                i-1;
            }
        }
    }
    resultadoPalabras.innerHTML = "Número de palabras: " + cantidadPalabras;
    console.log("Número de palabras: " + cantidadPalabras);

    let strContadorSplit = strContadorLimpio.split(" ");

    let longitudMaxima = 0;
    let palabraMasLarga = [];

    for(let j = 0; j < strContadorSplit.length; j++){

        let palabra = strContadorSplit[j];
        let longitud = strContadorSplit[j].length;

        if(longitudMaxima < longitud){
            longitudMaxima = longitud;
            palabraMasLarga = [palabra];
        }
        else if(longitud == longitudMaxima){
            palabraMasLarga.push(strContadorSplit[j]);
        }
        console.log("Probando palabra: " + strContadorSplit[j] + " con longitud " + strContadorSplit[j].length);
    }
    resultadoMasLarga.innerHTML = "La(s) palabra(s) más larga(s) es(son): " + palabraMasLarga;
    console.log("La(s) palabra(s) más larga(s) es/son: " + palabraMasLarga);
});

botonAcronimosExe.addEventListener("click", function(){
    let strAcronimo = acronimoInput.value;
    strAcronimo = strAcronimo.trim();
    let palabrasAcronimo = strAcronimo.split(" ");
    let palabrasIgnoradas = ["de", "la", "y", "del"]
    let acronimo = "";

    for(let x = 0; x < palabrasAcronimo.length; x++){
        if(!palabrasIgnoradas.includes(palabrasAcronimo[x].toLowerCase())){
            acronimo += palabrasAcronimo[x].slice(0,1);
        }
    }
    acronimo = acronimo.toUpperCase();
    console.log(acronimo);
    resultadoAcronimo.innerHTML = "El acrónimo es: " + acronimo;
});
