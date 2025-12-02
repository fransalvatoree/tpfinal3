// VARIABLES
let pantallas = [];
let pantallaActual = 0;
let textos = [];

// PRELOAD: imágenes + textos
function preload() {
  for (let i = 0; i < 14; i++) {
    pantallas[i] = loadImage("./data/pantalla" + i + ".jpeg");
  }

  textos = loadStrings("./data/texto.txt");
}

// CANVAS
function setup() {
  createCanvas(640, 480);
}

// DIBUJO DE PANTALLAS
function draw() {
  background(200);

  // Imagen
  image(pantallas[pantallaActual], 0, 0, 640, 480);

  // Texto
  let textoActual = textos[pantallaActual];

  fill(178, 195, 255);
  rect(20, 45, 610, 60);

  fill(0);
  noStroke();
  textSize(18);
  textAlign(CENTER, CENTER);
  text(textoActual, 25, 50, 600, 50);

  // BOTONES SEGÚN PANTALLA
  if (pantallaActual === 0) {
    mostrarBotonesInicio();
  } else if ([1, 2, 3, 6, 8, 11].includes(pantallaActual)) {
    mostrarBotonAvanzar();
  } else if (pantallaActual === 4) {
    mostrarBotonesLaencuentraNolaencuentra();
  } else if (pantallaActual === 7) {
    mostrarBotonesEspectaculoDesaparece();
  } else if ([5, 9, 10, 12, 13].includes(pantallaActual)) {
    mostrarBotonReiniciar();
  }
}

// BOTONES
function dibujarBoton(x, y, ancho, alto, colorRelleno, colorTexto, texto) {
  fill(colorRelleno);
  rect(x, y, ancho, alto);
  fill(colorTexto);
  textSize(16);
  textAlign(CENTER, CENTER);
  text(texto, x + ancho / 2, y + alto / 2);
}

function mostrarBotonesInicio() {
  dibujarBoton(150, 400, 150, 50, color(255, 0, 0), color(255), "Iniciar aventura");
  dibujarBoton(400, 400, 150, 50, color(0, 255, 78), color(255), "Creditos");
}

function mostrarBotonReiniciar() {
  dibujarBoton(250, 400, 140, 50, color(255, 188, 0), color(0), "Reiniciar");
}

function mostrarBotonesLaencuentraNolaencuentra() {
  dibujarBoton(150, 400, 150, 50, color(255, 0, 0), color(255), "La encuentra");
  dibujarBoton(400, 400, 150, 50, color(0, 255, 44), color(0), "No la encuentra");
}

function mostrarBotonesEspectaculoDesaparece() {
  dibujarBoton(150, 400, 160, 60, color(0, 255, 0), color(255), "Espectáculo\nen el cielo");
  dibujarBoton(400, 400, 160, 60, color(255, 0, 0), color(255), "Llega su madre\ny todo desaparece");
}

function mostrarBotonAvanzar() {
  dibujarBoton(500, 400, 100, 50, color(254, 255, 0), color(0), "Siguiente");
}

// CLICK
function clicEnBoton(x, y, ancho, alto) {
  return mouseX > x && mouseX < x + ancho && mouseY > y && mouseY < y + alto;
}

function mousePressed() {

  // PANTALLA 0
  if (pantallaActual === 0) {
    if (clicEnBoton(150, 400, 150, 50)) pantallaActual = 1;
    else if (clicEnBoton(400, 400, 150, 50)) pantallaActual = 13;
  }

  // AVANZAR
  else if (pantallaActual === 1) pantallaActual = clicEnBoton(500, 400, 100, 50) ? 2 : pantallaActual;
  else if (pantallaActual === 2) pantallaActual = clicEnBoton(500, 400, 100, 50) ? 3 : pantallaActual;
  else if (pantallaActual === 3) pantallaActual = clicEnBoton(500, 400, 100, 50) ? 4 : pantallaActual;

  // ELECCIÓN
  else if (pantallaActual === 4) {
    if (clicEnBoton(150, 400, 150, 50)) pantallaActual = 5;
    else if (clicEnBoton(400, 400, 150, 50)) pantallaActual = 6;
  }

  // FINAL 5
  else if (pantallaActual === 5 && clicEnBoton(250, 400, 140, 50)) pantallaActual = 0;

  // SIGUE 6 → 7
  else if (pantallaActual === 6 && clicEnBoton(500, 400, 100, 50)) pantallaActual = 7;

  // RAMA 7
  else if (pantallaActual === 7) {
    if (clicEnBoton(150, 400, 160, 60)) pantallaActual = 8;
    else if (clicEnBoton(400, 400, 160, 60)) pantallaActual = 9;
  }

  // FINAL 8 → 10
  else if (pantallaActual === 8 && clicEnBoton(500, 400, 100, 50)) pantallaActual = 10;

  // FINAL 9
  else if (pantallaActual === 9 && clicEnBoton(250, 400, 140, 50)) pantallaActual = 0;

  // FINAL 10
  else if (pantallaActual === 10 && clicEnBoton(250, 400, 140, 50)) pantallaActual = 0;

  // SIGUE 11 → 12
  else if (pantallaActual === 11 && clicEnBoton(500, 400, 100, 50)) pantallaActual = 12;

  // FINAL 12
  else if (pantallaActual === 12 && clicEnBoton(250, 400, 140, 50)) pantallaActual = 0;

  // CRÉDITOS
  else if (pantallaActual === 13 && clicEnBoton(250, 400, 140, 50)) pantallaActual = 0;
}





