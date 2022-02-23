// creacion del NEWSLETTER
// tarjeta
$("#suscribite").prepend( ` <div class="card-background col-3 ms-auto newsletter"  style="display: none;">
<h3 class="fs-5 text-center text-white">Suscribite a nuestro Newsletter <button type="button" class="btn-close cerrar"  aria-label="cerrar"></button> </h3> 
<div class="input-group mb-3">
<input type="text" class="form-control" id="correoNews" placeholder="Ingresa tu correo" aria-label="Recipient's username" aria-describedby="button-addon2">
<button class="btn btn-outline-secondary bg-secondary text-white" type="button" id="button-addon2">Enviar</button>
</div>

</div>`)
// al iniciar sesion 1,5seg aparece el newsletter
$(document).ready(()=>{
    $(".newsletter").fadeIn(1500);
})
// funcion para que funcione el boton cerrar
$(".cerrar").click(() => {
    $(".newsletter").hide()
})


//Declaramos la url que vamos a usar para el GET
const URLGET   = "https://jsonplaceholder.typicode.com/posts"

 $("#button-addon2").click(() => { 
    let mail = $("#correoNews").val()
    const infoPost =  {email:`${mail}`}
  
    $.post(URLGET, infoPost, (respuesta, estado) => {
        
        if (estado === "success"){
            if((mail != "") && ( mail.includes("@"))){
                $("#status").append(`<div class=" bg-success ms-auto col-3 text-white text-center">
                ¡Felicitaciones, ya registramos ${respuesta.email}!<br> Pronto comenzarás a recibir novedades...<br>
                </div>`);
                $("#suscribite").hide()
                $("#status").delay(2200)
                $("#status").fadeOut(1000)
            }else {
                     $("#status").append(`<div class=" bg-danger ms-auto col-3 text-white text-center">
                    Debes completar este campo correctamente. Incluye @<br>
                    </div>`)
                    $("#status").delay(1500)
                    $("#status").fadeOut(1000)
                }
        
        }else{
            $("#status").append(`<div class=" bg-danger ms-auto col-3">
            Ups, parece que hubo un error al enviar los datos, intenta otra vez<br>
            </div>`);
        }
    });

})

