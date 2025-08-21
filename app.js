// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Crear un array para almacenar los nombres
let amigos = [];

// Obtener los elementos
const nombreAmigoInput = document.getElementById('amigo');
const agregarBtn = document.querySelector('.button-add');
const listaAmigosOl = document.getElementById('listaAmigos');
const sortearBtn = document.querySelector('.button-draw'); // Botón para sortear
const resultadoP = document.getElementById('resultado'); // Elemento donde se muestra el resultado

// Implementa una función para agregar amigos

function agregarAmigo() {
    const nombre = nombreAmigoInput.value.trim();

    if (nombre === '') {
        alert('!Por favor inserte el siguiente nombre¡');
        return;
    }

    // Evitar nombres duplicados
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado.');
        nombreAmigoInput.value = '';
        return;
    }

    amigos.push(nombre);

    mostrarAmigos();

    nombreAmigoInput.value = '';
}

// Implementa una función para mostrar amigos
function mostrarAmigos() {
    listaAmigosOl.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosOl.appendChild(li);
    });
}

//Implementa una función para sortear los amigos

function sortearAmigo() {
     // Se valida que haya amigos disponibles
     if (amigos.length === 0) {
        alert('No hay amigos para sortear si desea agregue al menos uno, si no, de click en aceptar y observe cual amigo fue elegido');
        return;
    }

    // Se Genera un índice aleatorio, Math.random() genera un número decimal entre 0 (incluido) y 1 (excluido)
    // Math.random() * amigos.length genera un número entre 0 y el tamaño del array
    // Math.floor() redondea el número hacia abajo para obtener un índice entero válido
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Se obtiene el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Se muestra el resultado
    resultadoP.textContent = `¡El amigo secreto sorteado es: ${amigoSorteado}!`;

    // Limpiar el array después de sortear si es necesario 
    amigos = [];
    mostrarAmigos();
}

// Se Conectan las funciones a los eventos de los botones
agregarBtn.addEventListener('click', agregarAmigo);
sortearBtn.addEventListener('click', sortearAmigo); 