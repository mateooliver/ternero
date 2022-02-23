// recupero el dinero simulado para mostrarlo en el placeholder del input de la pagina deposito
let plataSimulada= sessionStorage.getItem("pesos")
// inserto ese valor ene el placeholder
let placeholder= document.getElementById("deposito").placeholder=`Recien simulaste con ${plataSimulada} $ARS`;

// funcion para que al apretar para depositar se despliegan los cards con informacion del banco
$("#botonDeposito").click (function muestraDatos() {
let infoBanco=document.createElement("div")
infoBanco.innerHTML =`<div class="card text-center my-5">
<div class="card-header">
  Datos del deposito
</div>
<div class="card-body">
  <h5 class="card-title"> CBU - 00001418222345519</h5>
  <p class="card-text">Banco de la Provincia de Buenos Aires </p>
  <a  onclick="yaDeposite ()" id="botonYD" class="btn btn-primary">Ya deposité</a>
</div>
</div>`;
$("#infoDeposito").prepend(infoBanco);
// opcion de invertir en criptomonedas - proximamente
let infoCripto=document.createElement("div");
infoCripto.innerHTML=`<div class="card text-center my-5">
<div class="card-header">
  Depositá en criptomonedas
  <img src="https://w7.pngwing.com/pngs/160/142/png-transparent-cryptocurrency-bitcoin-litecoin-coinbase-ethereum-bitcoin-text-orange-logo-thumbnail.png" width="100">
</div>
<div class="card-body">
  <h5 class="card-title"></h5>
  <a href="/pages/dashboard.html" class="btn btn-disabled">Proximamente</a>
</div>
</div>`

infoBanco.appendChild(infoCripto)
// valor "depositado" se guarda en un local storage para usarlo en el dashboard con las tenencias
var plataDepositada= $("#deposito").val();
localStorage.setItem("plataDepositada", plataDepositada)
})

// variable false para que al iniciar sesion dice que no hay depositos, luego la siguente funcion la transforma en true y asi mostrar las tenencias
let validacionDep=false

function yaDeposite(){
  window.location.href="dashboard.html"
  let validacionDep=true
  sessionStorage.setItem("deposito",true)
  

}
