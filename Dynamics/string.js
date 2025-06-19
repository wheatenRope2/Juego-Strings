let textoIn = "     documento get         element javascript      ";
console.log(textoIn.length);

let textoLimpio = textoIn.trim();
textoLimpio = textoLimpio + " ";
let textose = textoIn.replaceAll(" ","");
console.log(textose.length);

let cantidadPalabras = 0;

for(let i = 0; i < textoLimpio.length; i++){
    if(textoLimpio[i]===" "){
        if(textoLimpio[i+1]!=" "){
            cantidadPalabras++;
            i-1;
        }
       
    }
    
}

console.log("Cantidad de palabras: " + cantidadPalabras);