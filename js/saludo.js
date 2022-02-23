// saludo de bienvenida
let bienvenida= sessionStorage.getItem("nombre")
let hola=$("#bienvenido")

let saludo= document.createElement("h1");
saludo.className="fs-4 col-4 bg-secondary text-white text-center mx-auto my-4"
saludo.innerHTML=`¡Hola ${bienvenida}, bienvenido!`
hola.prepend(saludo)

