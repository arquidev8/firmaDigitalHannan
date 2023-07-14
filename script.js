const $canvas = document.querySelector("#canvas"),
    $btnDescargar = document.querySelector("#btnDescargar"),
    $btnLimpiar = document.querySelector("#btnLimpiar"),
    $btnGenerarDocumento = document.querySelector("#btnGenerarDocumento");

const contexto = $canvas.getContext("2d");
const COLOR_PINCEL = "black";
const COLOR_FONDO = "white";
const GROSOR = 2;
let xAnterior = 0, yAnterior = 0, xActual = 0, yActual = 0;
const obtenerXReal = (clientX) => clientX - $canvas.getBoundingClientRect().left;
const obtenerYReal = (clientY) => clientY - $canvas.getBoundingClientRect().top;
let haComenzadoDibujo = false; // Bandera que indica si el usuario está presionando el botón del mouse sin soltarlo

const $canvas2 = document.querySelector("#canvas2");
const contexto2 = $canvas2.getContext("2d");

// $canvas.width = 250;
// $canvas.height = 120;
const limpiarCanvas = () => {
    // Colocar color blanco en fondo de canvas
    contexto.fillStyle = COLOR_FONDO;
    contexto.fillRect(0, 0, $canvas.width, $canvas.height);
    
};
limpiarCanvas();
$btnLimpiar.onclick = limpiarCanvas;
// Escuchar clic del botón para descargar el canvas
$btnDescargar.onclick = () => {
    const enlace = document.createElement('a');
    // El título
    enlace.download = "Firma.png";
    // Convertir la imagen a Base64 y ponerlo en el enlace
    enlace.href = $canvas.toDataURL();
    // Hacer click en él
    enlace.click();
};

window.obtenerImagen = () => {
    return $canvas.toDataURL();
};

window.obtenerImagen2 = () => {
    return $canvas2.toDataURL();
};


// Lo demás tiene que ver con pintar sobre el canvas en los eventos del mouse
$canvas.addEventListener("mousedown", evento => {
    // En este evento solo se ha iniciado el clic, así que dibujamos un punto
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR_PINCEL;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();
    // Y establecemos la bandera
    haComenzadoDibujo = true;
});

$canvas.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    // El mouse se está moviendo y el usuario está presionando el botón, así que dibujamos todo

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.clientX);
    yActual = obtenerYReal(evento.clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR_PINCEL;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
});
["mouseup", "mouseout"].forEach(nombreDeEvento => {
    $canvas.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});



const limpiarCanvas2 = () => {
    // Colocar color blanco en fondo de canvas
    contexto2.fillStyle = COLOR_FONDO;
    contexto2.fillRect(0, 0, $canvas2.width, $canvas2.height);
};
limpiarCanvas2();

const obtenerXReal2 = (clientX) => clientX - $canvas2.getBoundingClientRect().left;
const obtenerYReal2 = (clientY) => clientY - $canvas2.getBoundingClientRect().top;



$btnLimpiar.onclick = function() {
    limpiarCanvas2();
    limpiarCanvas();
};



$btnGenerarDocumento.onclick = () => {
    window.open("documento.html");
};

$canvas2.addEventListener("mousedown", evento => {
    // En este evento solo se ha iniciado el clic, así que dibujamos un punto
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal2(evento.clientX);
    yActual = obtenerYReal2(evento.clientY);
    contexto2.beginPath();
    contexto2.fillStyle = COLOR_PINCEL;
    contexto2.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto2.closePath();
    // Y establecemos la bandera
    haComenzadoDibujo = true;
});

$canvas2.addEventListener("mousemove", (evento) => {
    if (!haComenzadoDibujo) {
        return;
    }
    // El mouse se está moviendo y el usuario está presionando el botón, así que dibujamos todo

    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal2(evento.clientX);
    yActual = obtenerYReal2(evento.clientY);
    contexto2.beginPath();
    contexto2.moveTo(xAnterior, yAnterior);
    contexto2.lineTo(xActual, yActual);
    contexto2.strokeStyle = COLOR_PINCEL;
    contexto2.lineWidth = GROSOR;
    contexto2.stroke();
    contexto2.closePath();
});

["mouseup", "mouseout"].forEach(nombreDeEvento => {
    $canvas2.addEventListener(nombreDeEvento, () => {
        haComenzadoDibujo = false;
    });
});









$canvas.addEventListener("touchstart", evento => {
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.touches[0].clientX);
    yActual = obtenerYReal(evento.touches[0].clientY);
    contexto.beginPath();
    contexto.fillStyle = COLOR_PINCEL;
    contexto.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto.closePath();
    haComenzadoDibujo = true;
});

$canvas.addEventListener("touchmove", evento => {
    if (!haComenzadoDibujo) {
        return;
    }
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal(evento.touches[0].clientX);
    yActual = obtenerYReal(evento.touches[0].clientY);
    contexto.beginPath();
    contexto.moveTo(xAnterior, yAnterior);
    contexto.lineTo(xActual, yActual);
    contexto.strokeStyle = COLOR_PINCEL;
    contexto.lineWidth = GROSOR;
    contexto.stroke();
    contexto.closePath();
    

  
    evento.preventDefault();


});

$canvas.addEventListener("touchend", () => {
    haComenzadoDibujo = false;
});


$canvas2.addEventListener("touchstart", evento => {
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal2(evento.touches[0].clientX);
    yActual = obtenerYReal2(evento.touches[0].clientY);
    contexto2.beginPath();
    contexto2.fillStyle = COLOR_PINCEL;
    contexto2.fillRect(xActual, yActual, GROSOR, GROSOR);
    contexto2.closePath();
    haComenzadoDibujo = true;
});

$canvas2.addEventListener("touchmove", evento => {
    if (!haComenzadoDibujo) {
        return;
    }
    xAnterior = xActual;
    yAnterior = yActual;
    xActual = obtenerXReal2(evento.touches[0].clientX);
    yActual = obtenerYReal2(evento.touches[0].clientY);
    contexto2.beginPath();
    contexto2.moveTo(xAnterior, yAnterior);
    contexto2.lineTo(xActual, yActual);
    contexto2.strokeStyle = COLOR_PINCEL;
    contexto2.lineWidth = GROSOR;
    contexto2.stroke();
    contexto2.closePath();
    evento.preventDefault();
});

$canvas2.addEventListener("touchend", () => {
    haComenzadoDibujo = false;
});



const $nombre = document.querySelector("#nombre"),
    $referencia = document.querySelector("#referencia"),
    $direccion = document.querySelector("#direccion"),
    $poblacion = document.querySelector("#poblacion"),
    $precio = document.querySelector("#precio"),
    $pasaporte = document.querySelector("#pasaporte"),
    $ciudad = document.querySelector("#ciudad"),
    $pais = document.querySelector("#pais"),
    $observaciones = document.querySelector("#observaciones"),
    $visita = document.querySelector("#visita");

$btnGenerarDocumento.onclick = () => {
    const nombre = $nombre.value,
          referencia = $referencia.value,
          direccion = $direccion.value,
          poblacion = $poblacion.value,
          precio = $precio.value,
          pasaporte = $pasaporte.value,
          ciudad = $ciudad.value,
          pais = $pais.value,
          observaciones = $observaciones.value,
          visita = $visita.value;
    
    if (nombre && referencia && direccion && poblacion && precio && pasaporte && ciudad && pais && observaciones && visita) {
        window.open("documento.html");
    } else {
        alert("Por favor, completa todos los campos correctamente.");
    }
};

// function ValidateEmail(mail) 
// {
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
//   {
//     return (true)
//   }
//     alert("Has introducido una dirección de correo electrónico no válida!")
//     return (false)
// }


