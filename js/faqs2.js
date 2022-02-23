
// primera pregunta
let pregunta1 ="Que es un ternecoin?"
let mensaje1="  Es un activo que copia el valor de un ternero de 280kg de peso vivo, el valor se tiene como referencia el Mercado de Liniers"

$("#info1").prepend(`<div class="d-inline-flex bg-secondary  col-7 "><h1 class="fs-6 text-white mt-auto"> ${pregunta1} </h1><button id="up1" class=" btn btn-secondary float-end ms-auto" style=" display:block"> Mostrar</button><button id="down1" class=" btn btn-secondary float-end ms-auto" style="display:none">Contraer</button></div>`);
$("#info1").append(` <div class="d-inline-flex col-7"><div class=" card conteiner-fluid " id="card1"> <div class=" card-body ">${mensaje1} </div></div></div>`);
//  hacemos que por default no aparezca
$("#card1").hide();

// funcion para que al hacer click, baje la card
$("#up1").click(()=> {
    $("#card1").slideDown("fast")
    $("#up1").hide()
    $("#down1").show()

})

$("#down1").click(()=> {
    $("#card1").slideUp("fast")
    $("#up1").show()
    $("#down1").hide()
})





// segunda pregunta
let pregunta2 =" Como se puede comprar?"
let mensaje2="  Para comprar un ternecoin, deberas depositar dinero en tu cuenta por medio de transferencia bancaria y en aproximadamente 24hs lo tendras en tu cuenta para poder comprar un Ternecoin"

$("#info2").prepend(`<div class="d-inline-flex bg-secondary  col-7 "><h1 class="fs-6 text-white mt-auto"> ${pregunta2} </h1><button id="up2" class=" btn btn-secondary float-end ms-auto" style=" display:block"> Mostrar</button><button id="down2" class=" btn btn-secondary float-end ms-auto" style="display:none">Contraer</button></div>`);
$("#info2").append(` <div class="d-inline-flex col-7"><div class="card conteiner-fluid" id="card2"> <div class="card-body">${mensaje2} </div></div></div>`);
//  hacemos que por default no aparezca
$("#card2").hide();

// funcion para que al hacer click, baje la card
$("#up2").click(()=> {
    $("#card2").slideDown("fast")
    $("#up2").hide()
    $("#down2").show()

})

$("#down2").click(()=> {
    $("#card2").slideUp("fast")
    $("#up2").show()
    $("#down2").hide()
}) 

// tercera pregunta

let pregunta3 =" Donde se encuentran los terneros?"
let mensaje3='Nuestros animales se encuentran en la ciudad de Daireaux, bajo la crianza estilo feedlot. Tu al comprar un animal, recibes un animal "Teorico", es decir que tu animal no se morira, la tasa de mortandad esta calculada en el valor del Ternecoin'

$("#info3").prepend(`<div class="d-inline-flex bg-secondary  col-7 "><h1 class="fs-6 text-white mt-auto"> ${pregunta3} </h1><button id="up3" class=" btn btn-secondary float-end ms-auto" style=" display:block"> Mostrar</button><button id="down3" class=" btn btn-secondary float-end ms-auto" style="display:none">Contraer</button></div>`);
$("#info3").append(`<div class="d-inline-flex col-7"> <div class="card conteiner-fluid" id="card3"> <div class="card-body">${mensaje3} </div></div></div>`);
//  hacemos que por default no aparezca
$("#card3").hide();

// funcion para que al hacer click, baje la card
$("#up3").click(()=> {
    $("#card3").slideDown("fast")
    $("#up3").hide()
    $("#down3").show()

})

$("#down3").click(()=> {
    $("#card3").slideUp("fast")
    $("#up3").show()
    $("#down3").hide()
}) 