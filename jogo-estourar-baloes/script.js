function addBola(){
    var bola = document.createElement("div");
    bola.setAttribute("class", "bola");


    var p1 = Math.floor(Math.random() * 1200);

    var p2 = Math.floor(Math.random() * 600);

    bola.setAttribute("style", "left:"+p1+"px; top:"+p2+"px;");

    bola.setAttribute("onclick", "estourar(this)");

    document.body.appendChild(bola);
}

function estourar(elemento){

    document.body.removeChild(elemento);
}

function iniciar(){
    setInterval(addBola, 2000);
}