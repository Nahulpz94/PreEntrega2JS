// Intento de juego para adivinar//
// Base de datos
const actoresFamosos = [
    { nombre: "Jennifer Aniston", pistas: ["Protagonista de varias comedias romanticas", "Estuvo casada con Brad Pitt", "Protagonista de FRIENDS"] },
    { nombre: "Jennifer Lawrence", pistas: ["Ganadora de un Oscar", "Protagonista de Los Juegos del Hambre", "Actuó en El lado bueno de las cosas"] },
    { nombre: "Tom Hanks", pistas: ["Ganador de dos Oscars", "Protagonista de Forrest Gump", "Actuó en Naufrago"] }
];

const cantantesFamosas = [
    { nombre: "Beyoncé", pistas: ["Cantante y actriz estadounidense", "Ex integrante de Destiny's Child", "Uno de sus grandes exitos es 'Single Ladies'"] },
    { nombre: "Adele", pistas: ["Cantante británica", "Álbum exitoso '21'", "Entre sus exitos están 'Someone Like You'"]},
    { nombre: "Miley Cyrus", pistas: ["Cantante y actriz estadounidense", "Entre sus exitos está 'Wrecking Ball'" ,"Protagonista de 'Hannah Montana'", ] }
];

const peliculasAnimadas = [
    { nombre: "Lilo y Stitch", pistas: ["Película de Disney", "Hay un pez llamado Pato" , "Protagonizada por nena hawaiana y un extraterrestre" ] },
    { nombre: "Frozen", pistas: ["Película de Disney", "Conocemos a la primera Reina de Disney", "Protagonizada por Elsa y Anna"] },
    { nombre: "Shrek", pistas: ["Película animada de DreamWorks", "Parodia a los cuentos de hadas" , "Protagonizada por un ogro y un burro"] }
];

// Función para adivinar el nombre
const adivinarNombre = (categoria) => {
    let baseDatos;

    switch (categoria) {
    case "actores":
        baseDatos = actoresFamosos;
        break;
    case "peliculas":
        baseDatos = peliculasAnimadas;
        break;
    case "cantantes":
        baseDatos = cantantesFamosas;
        break;
    default:
        return alert("Categoría no válida");
    }

    let seguirAdivinando = true;
    let indice = Math.floor(Math.random() * baseDatos.length); // Elegir un índice random

    while (seguirAdivinando) {
    const persona = baseDatos[indice];
    let pistaInicio = 0;

    while (pistaInicio < persona.pistas.length) {
        const respuesta = prompt(`Pista: ${persona.pistas[pistaInicio]}\n¿Quién es? (escribe 'pista' para recibir otra pista o 'salir' para dejar de jugar)`);

        if (respuesta.toLowerCase() === "pista") {
        pistaInicio++;
        } else if (respuesta.toLowerCase() === "salir") {
        seguirAdivinando = false;
        break;
        } else if (respuesta.toLowerCase() === persona.nombre.toLowerCase()) {
        alert("¡Bien ahí, le pegaste!");
        seguirAdivinando = false;
        break;
        } else {
        alert("Incorrecto. Seguí participando rey!");
        break;
        }
    }
    // Si se acabaron las pistas y el usuario no le pegó, mostrar respuesta y salir
    if (pistaInicio === persona.pistas.length) {
        alert(`Te quedaste sin pistas. La respuesta correcta era: ${persona.nombre}`);
        seguirAdivinando = false;
    }
    }
};

// Llamada a la función principal
const iniciarJuego = () => {
    const categoriaElegida = prompt("Elige una categoría para adivinar ('actores', 'peliculas' o 'cantantes'):");

    if (["actores", "peliculas", "cantantes"].includes(categoriaElegida)) {
    adivinarNombre(categoriaElegida);
    } else {
    alert("Categoría no válida. El juego ha terminado.");
    }
};

// Iniciar juego
iniciarJuego();