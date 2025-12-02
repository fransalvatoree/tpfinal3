//variables
let pantallas = [];
let pantallaActual = 0;
let mySound;
let textos = [];

let botonContinuar;
let botonJugar;
let botonCreditos;
let botonVolver;
let botonInstrucciones;

function preload() {
  // Cargar pantallas (0 a 13)
  for (let i = 0; i < 14; i++) {
    pantallas[i] = loadImage("trabajoFran1/data/pantalla" + i + ".jpg");
  }

  // Cargar música
  mySound = loadSound("trabajoFran1/data/cancion.mp3");

  // Cargar textos
  textos = loadStrings("trabajoFran1/data/texto.txt");
}

function setup() {
  createCanvas(800, 600);

  // Botones
  botonContinuar = createButton("CONTINUAR");
  botonContinuar.position(50, 520);
  botonContinuar.mousePressed(() => cambiarPantalla(1));

  botonJugar = createButton("JUGAR");
  botonJugar.position(50, 520);
  botonJugar.mousePressed(() => cambiarPantalla(1));

  botonCreditos = createButton("CRÉDITOS");
  botonCreditos.position(200, 520);
  botonCreditos.mousePressed(() => cambiarPantalla(2));

  botonInstrucciones = createButton("INSTRUCCIONES");
  botonInstrucciones.position(350, 520);
  botonInstrucciones.mousePressed(() => cambiarPantalla(3));

  botonVolver = createButton("VOLVER");
  botonVolver.position(500, 520);
  botonVolver.mousePressed(() => cambiarPantalla(0));

  // Música automática
  mySound.setVolume(0.5);
  mySound.loop();
}

function draw() {
  background(0);

  // Mostrar pantalla actual
  image(pantallas[pantallaActual], 0, 0, width, height);

  // Mostrar texto si existe
  if (textos[pantallaActual]) {
    fill(255);
    textSize(20);
    text(textos[pantallaActual], 30, 50);
  }

  actualizarBotones();
}

// Cambiar pantalla de forma segura
function cambiarPantalla(nuevaPantalla) {
  // nunca ir a una pantalla que no existe
  if (nuevaPantalla >= 0 && nuevaPantalla <= 13) {
    pantallaActual = nuevaPantalla;
  }
}

function actualizarBotones() {
  // Ocultar todos
  botonJugar.hide();
  botonContinuar.hide();
  botonCreditos.hide();
  botonInstrucciones.hide();
  botonVolver.hide();

  // Según pantalla
  if (pantallaActual === 0) {
    botonJugar.show();
    botonCreditos.show();
    botonInstrucciones.show();
  }

  if (pantallaActual >= 1 && pantallaActual <= 12) {
    botonContinuar.show();
  }

  if (pantallaActual === 2 || pantallaActual === 3) {
    botonVolver.show();
  }

  if (pantallaActual === 13) {
    botonVolver.show();
  }
}




