let _new_year = false;
let _interval_campanadas;
let _num_campanadas = 0;

function calcular() {
    console.log("contando...")
    ahora = new Date();
    luego = new Date();
    luego.setHours(23);
    luego.setMinutes(59);
    luego.setSeconds(59);
    console.log(luego.getTime() - ahora.getTime())
    return (_new_year ? 100 : luego.getTime() - ahora.getTime());
}

function abrir() {
    console.log("Abriendo..")
    setTimeout('__dibujar()', 300)
    _interval_campanadas = setInterval('__hola()',2500);
    _new_year = true;
}

function __dibujar () {    
    update();
    draw();
}

function __hola() {
    console.log("hola..");

    audio("audio/campanada.wav");

    _num_campanadas = _num_campanadas + 1;
    if(_num_campanadas >= 6){
        clearInterval(_interval_campanadas);
    }
}

function audio(ruta) {
    let _reproducir = new Audio();
    _reproducir.src = ruta;
    _reproducir.play();
}