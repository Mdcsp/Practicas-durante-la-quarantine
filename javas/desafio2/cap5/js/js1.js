//Funciones Anonimas
var mostrar = document.getElementById("mostrar");

mostrar.onclick = function(){
    let campo1 = f1.c1.value;
    let campo2 = f1.c2.value;

    alert("El valor de campo1 es: "+ campo1 + " el valor de campo2 es: " +campo2);
}
var multiplicar = document.getElementById("multiplicar");

multiplicar.onclick = function(){
    let campo1 = f1.c1.value;
    let campo2 = f1.c2.value;

    let total = parseFloat(campo1)*parseFloat(campo2);
    let descuento;
    if(f1.check.checked){
        total = total * 0.9
    }else{}

    resultado.innerHTML = total;

    f1.reset();
}

//Funciones Arrow

var dividir = document.getElementById("dividir");

dividir.onclick = ()=>{
    let campo1 = f1.c1.value;
    let campo2 = f1.c2.value;
    
    let total = parseFloat(campo1)/parseFloat(campo2);
    
    resultado.innerHTML = total;
    
    document.body.innerHTML+="<p>La division esta hecha</p>";
    f1.reset();
};

var agregarElemento = document.getElementById("element");
agregarElemento.onclick = ()=>{
    var node = document.createElement("h1");
    
    var textnode = document.createTextNode("Nodo Ingresado");
    
    node.appendChild(textnode);
    
    document.getElementById("ingresar").appendChild(node);
};

var cambiarLista = document.getElementById("list");
cambiarLista.onclick = function(){
    var li_new = document.createElement("li");
    var text = document.createTextNode("This is new.");
    li_new.appendChild(text);

    var lista = document.getElementById("lista");
    var li_cambio = document.getElementById("lista").childNodes[0];
    lista.replaceChild(li_new, li_cambio);
    
    var li_eliminar = document.getElementById("lista").childNodes[0].nextSibling;
    lista.removeChild(li_eliminar);
}

/*Les invito a revisar con detenimiento la siguiente documentacion:
https://www.w3schools.com/js/js_htmldom_nodes.asp
https://www.w3schools.com/jsref/prop_node_childnodes.asp
https://www.w3schools.com/jsref/prop_node_nextsibling.asp

Exito....!!!!
*/







/* function mostrar(){
    let campo1 = f1.c1.value;
    let campo2 = f1.c2.value;

    alert("El valor de campo1 es: "+ campo1 + " el valor de campo2 es: " +campo2);
}

function multiplicar(){
    let campo1 = f1.c1.value;
    let campo2 = f1.c2.value;

    
    let total = parseFloat(campo1)*parseFloat(campo2);
    let descuento;
    if(f1.check.checked){
        total = total * 0.9
    }else{
        
    }

    resultado.innerHTML = total;

    f1.reset();
} */