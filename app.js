ocultarElemento('btnCopiar');

//Funcion encriptar
function encriptar(){
    let msjInicial = document.getElementById("msjDer").value;
    let msjFinal = "";

    let arrayAEncriptar = formateoMsj(msjInicial);        //Convirtiendo el texto a un array
    
    ocultarElemento("areaMsj");
    /*
    e = enter
    i = imes
    a = ai
    o = ober
    u = ufat
    -implementar el ctrl + c
    */

    //Logica de encriptacion
    for(let i=0; i<arrayAEncriptar.length; i++){

        if(arrayAEncriptar[i].includes("e")){
            arrayAEncriptar[i] = "enter";
        }
        else if(arrayAEncriptar[i].includes("i")){
            arrayAEncriptar[i] = "imes";
        }
        else if(arrayAEncriptar[i].includes("a")){
            arrayAEncriptar[i] = "ai";
        }
        else if(arrayAEncriptar[i].includes("o")){
            arrayAEncriptar[i] = "ober";
        }
        else if(arrayAEncriptar[i].includes("u")){
            arrayAEncriptar[i] = "ufat";
        }
    }

    //Convirtiendo el array encriptado y mostrandolo en el area correspondiente
    msjFinal = arrayAEncriptar.join('');

    //Justificar y acomodar texto en pantalla
    document.getElementById('mainEncriptado').style.alignItems = "flex-start";
    document.getElementById("msjFinal").classList.remove('centrar-texto');
    editarTexto("msjFinal", msjFinal);
    mostrarElemento('btnCopiar');


}

//Editar texto de un elemento mediante su id
function editarTexto(id, texto){
    let htmlEtiqueta = document.getElementById(id);
    htmlEtiqueta.innerHTML = texto;
}

//Oculta un elemento mediante su id
function ocultarElemento(id){
    document.getElementById(id).style.display = "none";
}

//Muestra un elemento mediante su id
function mostrarElemento(id){
    document.getElementById(id).style.display = "initial";
}

//Retorna un array apartir de un string dado
function formateoMsj(msj){
    msj = msj.toLowerCase();        //convirtiendo el mensaje a minusculas
    return msj.split('');           //Convirtiendo el texto a un array
}



//Funcion desencriptar
function desencriptar(){

}

//Funcion copiar
function copiarTexto(){

}
