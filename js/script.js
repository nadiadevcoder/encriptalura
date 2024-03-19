document.addEventListener('DOMContentLoaded', function() {
    const textInput = document.getElementById("text-a1");
    const outputDisplay = document.getElementById("text-out");
    const encryptButton = document.getElementById("btn-encrypt");
    const decryptButton = document.getElementById("btn-decrypt");
    const copyButton = document.getElementById("btn-copy");
    const cleanButton = document.getElementById("btn-clean1");

    encryptButton.addEventListener('click', function() {
        const inputText = textInput.value.trim();
        if (!inputText || !validate(inputText)) {
            showMessage("Ingrese un texto válido (solo minúsculas sin acentos).");
            return;
        }
        const encryptedText = encryptText(inputText);
        outputDisplay.value = encryptedText;
    });

    decryptButton.addEventListener('click', function() {
        const inputText = textInput.value.trim();
        if (!inputText || !validate(inputText)) {
            showMessage("Ingrese un texto válido (solo minúsculas sin acentos).");
            return;
        }
        const decryptedText = decryptText(inputText);
        outputDisplay.value = decryptedText;
    });

    copyButton.addEventListener('click', function() {
        if (outputDisplay.value) {
            outputDisplay.select();
            document.execCommand("copy");
            showMessage("Texto copiado al portapapeles.");
        } else {
            showMessage("No hay texto para copiar.");
        }
    });

    cleanButton.addEventListener('click', function() {
        textInput.value = "";
        outputDisplay.value = "";
    });

    // Función para validar el texto ingresado
    function validate(text) {
        return /^[a-z]+$/.test(text);
    }

    // Función para cifrar el texto
    function encryptText(text) {
        return text.replace(/e/g, "enter")
                   .replace(/i/g, "imes")
                   .replace(/a/g, "ai")
                   .replace(/o/g, "ober")
                   .replace(/u/g, "ufat");
    }

    // Función para descifrar el texto
    function decryptText(text) {
        return text.replace(/ufat/g, "u")
                   .replace(/ober/g, "o")
                   .replace(/ai/g, "a")
                   .replace(/imes/g, "i")
                   .replace(/enter/g, "e");
    }

    // Función para mostrar mensajes en el área de salida
    function showMessage(message) {
        outputDisplay.value = message;
    }
});
