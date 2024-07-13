const form = document.getElementById('formulario');
const campoA = document.getElementById('campo-A');
const campoB = document.getElementById('campo-B');
const message = document.getElementById('message');

function validarCampos(valoraA, valorB) {
    return valorB > valoraA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    message.style.display = 'none';
    message.textContent = '';
    campoA.classList.remove('error-border');
    campoB.classList.remove('error-border');

    const valorA = parseFloat(campoA.value);
    const valorB = parseFloat(campoB.value);

    let formEValido = true;

    if (!campoA.value) {
        campoA.classList.add('error-border');
        formEValido = false;
    }
    if (!campoB.value) {
        campoB.classList.add('error-border');
        formEValido = false;
    }

    if (!formEValido) {
        message.textContent = 'Por faor, preencha ambos os campos antes de prosseguir!';
        message.className = 'message error';
        message.style.display = 'block';
        return;
    }

    formEValido = validarCampos(valorA, valorB);
    if (formEValido) {
        message.textContent = 'Formulário enviado com Sucesso!'
        message.className = 'message success';
        message.style.display = 'block';

        campoA.value = '';
        campoB.value = '';
    } else {
        campoB.classList.add('error-border');
        message.textContent = 'Formulário inválido! Campo B deve ser maior que o Campo A.'
        message.className = 'message error';
        message.style.display = 'block';
    }
});