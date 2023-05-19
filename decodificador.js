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
function desencriptarFpersonal() {
    let textoinput = textarea.value;
    let textoDesenEncriptado = textoinput.replace(/fa/g, "")
                                     .replace(/fe/g, "")
                                     .replace(/fi/g, "")
                                     .replace(/fo/g, "")
                                     .replace(/fu/g, "");
    return textoDesenEncriptado;

}

function encriptarFpersonal() {
    let textoinput = textarea.value;
    let textoEncriptado="";
    for (let index = 0; index < textoinput.length; index++) {
        switch (textoinput[index]) {
            case 'a':
                textoEncriptado = textoEncriptado+(textoinput[index]+"fa")
                break;
            
            case 'e':
                    textoEncriptado = textoEncriptado+(textoinput[index]+"fe")
                break;
                
            case 'i':
                textoEncriptado = textoEncriptado+(textoinput[index]+"fi")
                break;
            
            case 'o':
                textoEncriptado = textoEncriptado+(textoinput[index]+"fo")
                break;
            
            case 'u':
                if (textoinput[index-1]=="q") {
                    textoEncriptado = (textoEncriptado+textoinput[index]);
                }else{
                    textoEncriptado = textoEncriptado+(textoinput[index]+"fu")
                }
                break;
        
            default:
                textoEncriptado = (textoEncriptado+textoinput[index]);
                break;
        }
        
    }
    return textoEncriptado;
}

// cuerpo

document.addEventListener("DOMContentLoaded", function() {
    let botonEncriptar = document.getElementById("1");
    let botonDesencriptar = document.getElementById("2");
    let botonCopiar = document.getElementById("botonCopiar");
    

    botonEncriptar.onclick = function(){
        let texto;
        oculta();
        texto = encriptarFpersonal();
        document.getElementById("output-encriptador").value = "";
        document.getElementById("output-encriptador").value = texto;
    }
    botonDesencriptar.onclick = function(){
        let texto;
        oculta();
        texto = desencriptarFpersonal();
        document.getElementById("output-encriptador").value = "";
        document.getElementById("output-encriptador").value = texto;
    }
    botonCopiar.onclick = function() {
        let textarea = document.getElementById("output-encriptador");
        let textareainput = document.getElementById("input-encriptador");
        textarea.select();
        navigator.clipboard.writeText(textarea.value).then(function() {
            textarea.setSelectionRange(0, 0); // Deselecciona el texto
            textareainput.value=""
            textareainput.focus;
          })
          .catch(function(error) {
            
            console.error("Error al copiar al portapapeles: ", error);
          });
      };
      
  });