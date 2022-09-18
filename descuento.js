
let pelo = document.getElementById("peloSelect");
pelo.addEventListener("click", 
function mostrarPelo(){
  let opcion = document.getElementById("peloSelect").value;

  console.log(opcion)   


  if (opcion==="corte"){
      mostrarFinal.innerHTML = `Total: \$1500`
      return precioFull = 1500

    }else if (opcion==="tintura"){
      mostrarFinal.innerHTML = `Total: \$3000`
      return precioFull = 3000

    }else if(opcion==="peinado"){
      mostrarFinal.innerHTML = `Total: \$2000`
      return precioFull= 2000
    }

  })

let cat = document.getElementById("inputSelect");
cat.addEventListener("click", 
function calculoCategoria(){
  
let opcion = document.getElementById("inputSelect").value;
let mostrarFinal = document.getElementById("mostrarFinal")

console.log(opcion)   


if (opcion==="ninguno"){
    let precioFinal = precioFull
    mostrarFinal.innerHTML = `Total: \$${precioFinal}`
    

  }else if (opcion==="jubilado"){
    let precioFinal = precioFull * 0.6
    mostrarFinal.innerHTML = `Total: \$${precioFinal}`
    

  }else if(opcion==="estudiante"){
    let precioFinal= precioFull * 0.8
    mostrarFinal.innerHTML = `Total: \$${precioFinal}` 
  }

})




let nom = document.getElementById("nombre");
nom.addEventListener("change",
function capturarNombre(){
const nombre = [];
nombre.push(document.getElementById("nombre").value);
for (let i = 0; i < nombre.length; i++){
  console.log(nombre[i])
}

})


let ap = document.getElementById("apellido");
ap.addEventListener("change",
function capturarApellido(){
const apellido = [];
apellido.push(document.getElementById("apellido").value);
for (let i = 0; i < apellido.length; i++){
  console.log(apellido[i])
}

})


let corr = document.getElementById("email");
corr.addEventListener("change",
function capturarCorreo(){
const mail = [];
mail.push(document.getElementById("email").value);
for (let i = 0; i < mail.length; i++){
  console.log(mail[i])
}

})


let te = document.getElementById("tel");
te.addEventListener("change",
function capturarTel(){
const tel = [];
tel.push(document.getElementById("tel").value);
for (let i = 0; i < tel.length; i++){
  console.log(tel[i])
}

})

