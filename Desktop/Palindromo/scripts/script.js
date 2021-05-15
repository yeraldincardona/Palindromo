
//creamos la funcion que se va activar cuando hagamos click en el boton 

function palinDrome() {
    //asignamos el contenido del input a la variable textval
    var textval = document.getElementById("somTxt").value;
    //iniciamos una variable vacia para usarla para guardae los caracteres que se ingresaron el el input
    todoMinuscula = textval.toLowerCase();
    limpiarFrase = todoMinuscula.normalize('NFD').replace(/[^a-zA-Z0-9s]/g, '');
   
    var resulttxt = "";
    //se crea un for que evalua los caracteres de la variable 
    for (i =  limpiarFrase.length - 1; i >= 0; i--) {
    resulttxt +=  limpiarFrase.charAt(i);
    }
  
    if (limpiarFrase === resulttxt) {
    document.getElementById("result8").innerHTML = textval + " is a palindrome";
    }
    else {
    document.getElementById("result8").innerHTML = textval + " is not a palindrome";
    }
    }
    
    document.getElementById("boton").addEventListener("click", palinDrome);
