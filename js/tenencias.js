// al entrar el dashboard se cargue la barra que dice que aun no hay depositos. si ya hubo deposito se ejecuta la funcion tenencias()
$(document).ready(()=>{
    if((JSON.parse(sessionStorage.getItem("deposito"))) == true){
        Tenencias();
    }else{
        let cardNodeposito=`<div class="card card-background  ">
        <div class="card-body text-white text-center">
          <h5 class="card-title">No hemos registrado depositos aún</h5>
          <p class="card-text">Deposita para ver tus tenencias. recordá que puede tardar hasta 24Hs en acreditarse</p>
          
          <a href="../pages/deposito.html" class=" btn btn-secondary">Depositá</a>
        </div>
      </div>`

        $("#noDepositos").prepend(cardNodeposito);

    }
})

// funcion tenencias que nos muestra lo ingresado en la pagina deposito y el rendimiento al año
function Tenencias () {
    let dineroARS=localStorage.getItem("plataDepositada")
    let dinero= dineroARS/valorTernecoin;
    let cardTenencias=""
        cardTenencias +='<div class="card card-background col-10 rounded-3 border-3 mx-5">'
        cardTenencias +='<div class="card-body text-white">'
        cardTenencias +=`<h2 class="fw-bold">Mis tenencias de Ternecoin: </h2>`
        cardTenencias += `<p class="fs-4">${dinero} = ${dineroARS} ARS </p>`
        cardTenencias +='</div>'
        cardTenencias +='</div>'

        $("#tenencias").html(`${cardTenencias}`)
    let ganancia=dinero*rentabilidad
    let gananciaArs=Math.floor(ganancia*valorTernecoin);
    let cardGanancias=""
        cardGanancias +='<div class="card card-background col-10 rounded-3 border-3  mx-5">'
        cardGanancias +='<div class="card-body text-white">'
        cardGanancias +=`<h2 class="fw-bold">Mis ganancias en Ternecoin anual: </h2>`
        cardGanancias += `<p class="fs-4">${ganancia} = ${gananciaArs} ARS/año </p>`
        cardGanancias +='</div>'
        cardGanancias +='</div>'

        $("#ganancias").html(`${cardGanancias}`);

}

