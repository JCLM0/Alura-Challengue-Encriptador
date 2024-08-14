const btnEncript = document.getElementById('btn-encript');
const btnDesencript = document.getElementById('btn-desencript');
const btnCopy = document.getElementById('btn-copy');

const sectionEncript = document.getElementById('section-encript');
const sectionText = document.getElementById('section-text');

let contador = 0;
let verificadorAcentos = 0;
let verificadorMayusculas = 0;
let verificadorCaracteres = 0;

const caracteresEspeciales = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')',
    '_', '-', '+', '=', '{', '}', '[', ']', '|', '\\',
    ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'
];

const letrasConAcentos = [
    'á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú',
    'à', 'è', 'ì', 'ò', 'ù', 'À', 'È', 'Ì', 'Ò', 'Ù',
    'ä', 'ë', 'ï', 'ö', 'ü', 'Ä', 'Ë', 'Ï', 'Ö', 'Ü',
    'â', 'ê', 'î', 'ô', 'û', 'Â', 'Ê', 'Î', 'Ô', 'Û',
    'ã', 'õ', 'ñ', 'Ã', 'Õ', 'Ñ'
];

const letrasMayusculas = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function originalText() {

    sectionEncript.style.wordBreak = 'normal';
    sectionEncript.style.overflowY = 'auto';

    let img = document.createElement('img');
    img.classList.add('encript-img');
    img.src = '../assets/img/lupa.png';
    sectionEncript.appendChild(img);

    let title = document.createElement('h2');
    title.classList.add('encript-title');
    title.textContent = 'Ningun mensaje fue encontrado';
    sectionEncript.appendChild(title);

    let text = document.createElement('p');
    text.classList.add('encript-text');
    text.textContent = 'Ingresa el texto que desees encriptar o desencriptar';
    sectionEncript.appendChild(text);

    sectionText.placeholder = "Ingresa el texto";

};

function encriptText() {

    validateText();

    if (sectionText.value == '') {
        alert('El campo de texto no puede estar vacio');
    } else {
        if (verificadorAcentos == 1 || verificadorMayusculas == 1 || verificadorCaracteres == 1) {
            verificadorAcentos = 0;
            verificadorMayusculas = 0;
            verificadorCaracteres = 0;
        } else {
            sectionEncript.style.wordBreak = 'break-all';
            sectionEncript.style.overflowY = 'scroll';

            let text = sectionText.value;

            let textEncript = text
            .replaceAll('e', 'enter')
            .replaceAll('i', 'imes')
            .replaceAll('a', 'ai')
            .replaceAll('o', 'ober')
            .replaceAll('u', 'ufat');

            sectionEncript.textContent = textEncript;
            sectionText.value = '';
            sectionText.placeholder = 'Texto encriptado';
        }
    };

    contador++;

};

function desencriptText() {

    validateText();

    if (sectionText.value == '') {
        alert('El campo de texto no puede estar vacio');
    } else {
        if (verificadorAcentos == 1 || verificadorMayusculas == 1 || verificadorCaracteres == 1) {
            verificadorAcentos = 0;
            verificadorMayusculas = 0;
            verificadorCaracteres = 0;
        } else {
            sectionEncript.style.wordBreak = 'break';
            sectionEncript.style.overflowY = 'scroll';

            let text = sectionText.value;

            let textEncript = text
                .replaceAll('enter', 'e')
                .replaceAll('imes', 'i')
                .replaceAll('ai', 'a')
                .replaceAll('ober', 'o')
                .replaceAll('ufat', 'u');

            sectionEncript.textContent = textEncript;
            sectionText.value = '';
            sectionText.placeholder = 'Texto Desencriptado';
        };
    };

    contador++;
};

function copyText() {

    if (contador == 0) {
        alert('Primero debes encriptar o desencriptar un texto');
    } else {
        navigator.clipboard.writeText(sectionEncript.textContent);
        sectionEncript.textContent = '';
        sectionText.value = '';
        alert('Copiado al portapapeles');

        originalText();
    };

};

function validateText() {
    for (let i = 0; i < letrasConAcentos.length; i++) {
        if (sectionText.value.includes(letrasConAcentos[i])) {
            alert('No se permiten acentos');
            verificadorAcentos = 1;
            break;
        };
    };

    for (let i = 0; i < letrasMayusculas.length; i++) {
        if (sectionText.value.includes(letrasMayusculas[i])) {
            alert('No se permiten letras mayúsculas');
            verificadorMayusculas = 1;
            break;
        };
    };

    for (let i = 0; i < caracteresEspeciales.length; i++) {
        if (sectionText.value.includes(caracteresEspeciales[i])) {
            alert('No se permiten caracteres especiales');
            verificadorCaracteres = 1;
            break;
        };
    };
}

btnEncript.addEventListener('click', encriptText);
btnDesencript.addEventListener('click', desencriptText);
btnCopy.addEventListener('click', copyText);