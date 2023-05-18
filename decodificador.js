/*Declaracion de variables*/
let textarea = document.getElementById("input-encriptador");


/*Declaracion de funciones*/
function oculta() {
    let textoinput = textarea.value;
    if(textoinput == ""){
        alert("Primero ingresa un texto")
    }else{
        document.getElementById("textarea-output-1").style.display = "unset";
        document.getElementById("button-copy-output").style.display = "unset";
        document.getElementById("imagen-output-1").style.display = "none";
        document.getElementById("output-titulo-1").style.display = "none";
        document.getElementById("output-texto-1").style.display = "none";
    }
}

function encriptarF() {
    let textoinput = textarea.value;
    let textoEncriptado="";
    /*let textoEncriptado = textoinput.replace(/a/g, "ai")
                                     .replace(/e/g, "enter")
                                     .replace(/i/g, "imes")
                                     .replace(/o/g, "ober")
                                     .replace(/u/g, "ufat");
    return textoEncriptado;*/
    for (let index = 0; index < textoinput.length; index++) {
        switch (textoinput[index]) {
            case 'a':
                textoEncriptado = (textoEncriptado+"ai")
                break;
            
            case 'e':
                textoEncriptado = (textoEncriptado+"enter");
                break;
                
            case 'i':
                textoEncriptado = (textoEncriptado+"imes");
                break;
            
            case 'o':
                textoEncriptado = (textoEncriptado+"ober");
                break;
            
            case 'u':
                textoEncriptado = (textoEncriptado+"ufat");
                break;
        
            default:
                textoEncriptado = (textoEncriptado+textoinput[index]);
                break;
        }
        
    }
    return textoEncriptado;
}
function desencriptarF() {
    let textoinput = textarea.value;
    let textoDesenEncriptado = textoinput.replace(/ai/g, "a")
                                     .replace(/enter/g, "e")
                                     .replace(/imes/g, "i")
                                     .replace(/ober/g, "o")
                                     .replace(/ufat/g, "u");
    return textoDesenEncriptado;

}


// cuerpo

document.addEventListener("DOMContentLoaded", function() {
    let botonEncriptar = document.getElementById("1");
    let botonDesencriptar = document.getElementById("2");
    let botonCopiar = document.getElementById("botonCopiar");
    

    botonEncriptar.onclick = function(){
        let texto;
        oculta();
        texto = encriptarF();
        document.getElementById("output-encriptador").value = "";
        document.getElementById("output-encriptador").value = texto;
    }
    botonDesencriptar.onclick = function(){
        let texto;
        oculta();
        texto = desencriptarF();
        document.getElementById("output-encriptador").value = "";
        document.getElementById("output-encriptador").value = texto;
    }
    botonCopiar.onclick = function() {
        let textarea = document.getElementById("output-encriptador");
        textarea.select();
        navigator.clipboard.writeText(textarea.value).then(function() {
            textarea.setSelectionRange(0, 0); // Deselecciona el texto
            alert("Texto copiado al portapapeles");
          })
          .catch(function(error) {
            console.error("Error al copiar al portapapeles: ", error);
          });
      };
      
  });