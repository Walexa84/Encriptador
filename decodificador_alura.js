/*Declaracion de variables*/
let textarea = document.getElementById("texto_encriptar");


/*Declaracion de funciones*/

function ocultaAlura() {
    let textoinput = textarea.value;
    if(textoinput == ""){
        alert("Primero ingresa un texto")
    }else{
        document.getElementById("texto_desencriptar").style.display = "unset";
        document.getElementById("3").style.display = "unset";
        document.getElementById("imagen_alura").style.display = "none";
        document.getElementById("mensaje_alura").style.display = "none";
        document.getElementById("mensajito_alura").style.display = "none";
    }
}

function encriptarF() {
    let textoinput = textarea.value;
    let textoEncriptado="";
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

window.onload= function() {
    let botonEncriptar = document.getElementById("1");
    let botonDesenncriptar = document.getElementById("2");
    let botonCopiar = document.getElementById("3");
    

    botonEncriptar.onclick = function(){
        let texto;
        ocultaAlura();
        texto = encriptarF();
        document.getElementById("texto_desencriptar").value = "";
        document.getElementById("texto_desencriptar").value = texto;
    }
    botonDesenncriptar.onclick = function(){
        let texto;
        ocultaAlura();
        texto = desencriptarF();
        document.getElementById("texto_desencriptar").value = "";
        document.getElementById("texto_desencriptar").value = texto;
    }

    botonCopiar.onclick = function() {
        let textarea = document.getElementById("texto_desencriptar");
        let textareainput = document.getElementById("texto_encriptar");
        textarea.select();
        navigator.clipboard.writeText(textarea.value).then(function() {
            textarea.setSelectionRange(0, 0); // Deselecciona el texto
            textareainput.value=""
            textareainput.select;
          })
          .catch(function(error) {
            
            console.error("Error al copiar al portapapeles: ", error);
          });
      };
      
  };