
class DatosFormulario {
    constructor(datos_formulario) {
        this.nombre = datos_formulario[0];
        this.email = datos_formulario[1];
        this.pass = datos_formulario[2];
    }
}

// funcion para el registro. los datos lo guarda en una localStorage. 
function enviarDatos() {
    var nombre = document.getElementById("nombreRegister").value;
    var email = document.getElementById("emailRegister").value;
    var pass = document.getElementById("passRegister").value;

    if ((nombre == "") || (nombre.length < 3)) {
        let mensaje = "Error! El campo Nombre está vacío!";
        document.getElementById("errorName").innerHTML = "<p class='text-white bg-danger p-3'>" + mensaje + "</p>";
        return false;
    }

    if ((email == "") || (!email.includes("@"))) {
        let mensaje = "Error! El campo Email está vacío!";
        document.getElementById("errorEmail").innerHTML = "<p class='text-white bg-danger p-3'>" + mensaje + "</p>";
        return false;

    }else{
    document.getElementById("resultado").innerHTML = "<p class=' text-center text-white bg-secondary p-2 col-3 mx-auto'>¡Los datos se enviaron correctamente!</p>";
    localStorage.setItem("datos_formulario", JSON.stringify([nombre, email, pass]));
    let mensaje= "<p class='text-center text-white bg-secondary p-3 col-3 mx-auto rounded-3'> ¡Ya podés iniciar sesión!</p>";
    sessionStorage.setItem("data", mensaje)
    // le configuro un retardo para que se pueda leer el anuncio de que los datos se cargaron bien
    function tardanza(){ 
         window.location.href="/pages/login.html"}

    setTimeout  (tardanza,1200);
    }
}
// funcion que uso para poner el cartel en la pagina login cuando el registro es exitoso
$("#resgistroExito").prepend(sessionStorage.getItem("data"))


// funcion para usar los datos del registro para que al igualarlos nos acepte el login.
function cargarDatos() {
    var datos = JSON.parse(localStorage.getItem("datos_formulario"));
    var datos_formulario = new DatosFormulario(datos);

    
    var emailLogin = document.getElementById("emailLogin").value;
    var passLogin = document.getElementById("passLogin").value;

    if ( datos != null){

        if((emailLogin == datos_formulario.email) && (passLogin == datos_formulario.pass)){
        window.location.href= "dashboard.html"
        sessionStorage.setItem("nombre", datos_formulario.nombre)
        } 
    
        else{
            document.getElementById("loginStatus").innerHTML = "<p class='text-danger text-center'>¡El usuario y la contraseña no coinciden , vuelve a intentar!<br> <span class='text-secondary fw-bold'>Volvé a intentar<span></p>"
        }

    }else{
  
        document.getElementById("loginStatus").innerHTML = "<p class='text-danger text-center'>¡Ups, parece no estás registrado!<br> <span class='text-secondary fw-bold'>Volvé a intentar<span></p>"
    }}
