const form = document.getElementById('exercicio');

function validaCampo(numeroA, numeroB) {
return numeroA > numeroB;
}

form.addEventListener('submit', function(e) {
e.preventDefault();

const numeroA = document.getElementById('campo-a').value;      // Utilizar a propriedade .value

const numeroB = document.getElementById('campo-b').value;     // Utilizar a propriedade  .value

const formEvalido = validaCampo(Number(numeroA), Number(numeroB)); // Converter para números utilizando a função Number

if (formEvalido) {
alert("Formulário enviado com sucesso");
} 

else {
alert("Formulário não pode ser enviado");
}
});
