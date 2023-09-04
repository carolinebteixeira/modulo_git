$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(xx) xxxxx-xxxx'
    });
    
    $('#cadastro-pessoa-fisica').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    });
    
    $('#codigo-postal').mask('00000-000', {
        placeholder: 'xxxxx-xx'
    });
})