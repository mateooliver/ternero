
// Creacion del sidebar con info valor Ternecoin
let sidebar="";

// constantes de rendimiento y valor del coin
const valorTernecoin= 65000
const rentabilidad=1.65

// desarrollo de la card
sidebar +='<div class="card card-background start-50 rounded-3 border-3" style="width: 18rem;">';
sidebar +='<div class="card-body text-center ">';
sidebar +='<h5 class="card-title">Valor actual Ternecoin</h5>'
sidebar +=`<h2 class="card-subtitle text-black bg-secondary bg-opacity-50 py-2 my-3">  ${valorTernecoin} $ARS* </h2>`
sidebar +='<p class="card-text fontSize">* El valor de un Ternecoin se establece a partir del valor del kilo de ternero (hasta 280kg de peso) segun cotizacion del Mercado de Liniers. Para más informacion visitá <a href="http://www.mercadodeliniers.com.ar/"> http://www.mercadodeliniers.com.ar/ </a></p>'
$("#sidebar").prepend(sidebar);

// Simulador
$("#botonSimu").click(function Simulador() {
let valorSimulador = $("#pesosSimulador").val();
let valorSimulador2= parseInt(valorSimulador)
let guardarValorSimulado= sessionStorage.setItem("pesos", valorSimulador2)
let ternecoin= valorTernecoin
let rendimiento=rentabilidad

    if(valorSimulador != 0){
        var simulador= valorSimulador2 / ternecoin;
        $("#resultadoSimulador").prepend(`<p class="rounded-3 border border-3 text-center text-white fw-bold bg-secondary mx-auto my-4 py-4"> Te corresponden ${simulador} de ternecoins`)
        var rendimientoSimulador = rendimiento*simulador;
        var resutadoPesos= Math.floor(rendimientoSimulador*ternecoin);
        $("#rendimientoSimulador").html( `<p> Al cabo de un año, tendrías ${rendimientoSimulador} Ternecoin, que equivaldría (segun precios actuales) a ${resutadoPesos} $ARS</p> <button type="button" onclick="Deposita()" class="btn btn-secondary">Depositá</button>`)
      
    }else{
        $("#error").html(`<p class=" py-2 col-10 text-dark bg-danger"> El valor debe ser distinto de 0</p>`);
    }

})
// redireccion a la pagina de deposito. es una funcion enlazada a un evento onclick
function Deposita() {
    window.location.href="/ternero/pages/deposito.html"
}
