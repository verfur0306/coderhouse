
function mostrarPelo(){
    let opcion = document.getElementById("peloSelect").value;

    console.log(opcion)   


    if (opcion==="corte"){
        return precioFull = 1500

      }else if (opcion==="tintura"){
        return precioFull = 3000

      }else if(opcion==="peinado"){
        return precioFull= 2000
      }


  }

mostrarPelo()


function calculoCategoria(){
  let opcion = document.getElementById("inputSelect").value;
  let mostrarFinal = document.getElementById("mostrarFinal")

  console.log(opcion)   


  if (opcion==="estudiante"){
      let precioFinal = precioFull * 0.8
      mostrarFinal.innerHTML = `Total: \$${precioFinal}`
      

    }else if (opcion==="jubilado"){
      let precioFinal = precioFull * 0.6
      mostrarFinal.innerHTML = `Total: \$${precioFinal}`
      

    }else if(opcion==="ninguno"){
      let precioFinal= precioFull
      mostrarFinal.innerHTML = `Total: \$${precioFinal}` 
    }



  }

calculoCategoria()

