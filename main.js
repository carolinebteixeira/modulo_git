$(document).ready(function() {

    $('form').on('submit', function(e) {
        e.preventDefault()
        const listaTarefas= $('#nomeTarefa').val()
        const novoItem= $('<li></li>')
        $(`<li>${listaTarefas}</li>`).appendTo(novoItem) 
        $(novoItem).appendTo('ul')
        $('ul').on('click', 'li', function(){
            $(this).addClass("feito")
        })
        $('#nomeTarefa').val("")
    })
    })