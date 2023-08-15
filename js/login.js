$(document).ready(function(){
    $('#loginUsuario').on('click', function(){
        loginUsuario();
    });
    $('#loginProfesor').on('click', function(){
        loginProfesor();
    });
})

function loginUsuario(){
    var login = $('#usuario').val();
    var pass = $('#pass').val();

    $.ajax({
        url:'./includes/loginUsuario.php',
        method: 'POST',
        data: {
            login:login,
            pass:pass
        },
        success: function(data){
            $('#messageUsuario').html(data);

            if(data.indexOf('Redirecting') >= 0){ //0 significa que se encontró el dato buscado
                window.location = 'administrador/';
            } 
        }
    })
}

function loginProfesor(){
    var login = $('#usuario').val();
    var pass = $('#pass').val();

    $.ajax({
        url:'./includes/loginProfesor.php',
        method: 'POST',
        data: {
            login:login,
            pass:pass
        },
        success: function(data){
            $('#messageProfesor').html(data);

            if(data.indexOf('Redirecting') >= 0){ //0 significa que se encontró el dato buscado
                window.location = 'profesor/';
            } 
        }
    })
}

/* success: function(data){
    console.log(data)
    $('messageUsuario').html(data);

    if(data.indexOf('Redirecting')>=0){
        window.location='administrador/';
    }else if(data.indexOf('vacios')>=0){
        Swal.fire(":(","Todos los campos son obligatorios","error");
    }else if(data.indexOf('Usuario o contraseña incorrectos')>=0){
        Swal.fire(":(","Usuario o contraseña incorrectos","error");
    }
} */