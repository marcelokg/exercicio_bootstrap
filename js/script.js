$(document).ready(function(){

    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            }
        }
    })

    $('#tel').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    })
    
    $('#cep').mask('00000-000', {
        placeholder:'_____-___'
    })

})