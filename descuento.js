
function mostrarPelo(){
    let opcion = prompt(`por favor indique el procedimiento: corte // tintura // peinado`)

    console.log(opcion)   


    if (opcion.toLowerCase() =="corte"){  
      return precioFull = 1500

      }else if (opcion.toLowerCase() =="tintura"){
        return precioFull = 3000

      }else if(opcion.toLowerCase() =="peinado"){
        return precioFull= 2000
      }

      

  }

mostrarPelo()


function calculoCategoria(){
  let opcion = prompt(`Ahora, seleccione si tiene opción de descuento: estudiante // jubilado  // ninguno`)

  console.log(opcion)   


  if (opcion.toLowerCase() =="estudiante"){
      let precioFinal = precioFull * 0.8
      mostrarFinal = alert(`Usted es ${opcion} y por eso el precio para el procedimiento seleccionado es ${precioFinal} `)
      

    }else if (opcion.toLowerCase() =="jubilado"){
      let precioFinal = precioFull * 0.6
      mostrarFinal = alert(`Usted es ${opcion} y por eso el precio para el procedimiento seleccionado es ${precioFinal} `)
      

    }else if(opcion.toLowerCase() =="ninguno"){
      let precioFinal= precioFull
      mostrarFinal = alert(`Usted no tiene descuento y por eso el precio para el procedimiento seleccionado es ${precioFinal} `) 
    }


  }  

calculoCategoria()



function capturarNombre(){
  const nombre = [];
  nombre.push(prompt(`ahora por favor ingrese su nombre y apellido`));
  for (let i = 0; i < nombre.length; i++){
    console.log(nombre[i])
  }

}

capturarNombre()



