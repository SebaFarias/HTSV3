const data = require('./webHTSV3/MOCK_DATA.json')
let primerNuwe = true
let pistaUno = 0
let pistaDos
let pistaTres = -1

data.map(dato => {
  //pista uno
  if(dato.last_name === "Nuwe"){
    pistaUno++
    //pista dos
    if(primerNuwe){
      pistaDos = dato.id.replace(/([a-z]|[A-Z])/g,"")
      primerNuwe = false;
    }
  }
  //pista Tres
  if( ! dato.pet ){
    const elemento = parseInt(dato.ip)
    if(elemento>pistaTres){
      pistaTres = elemento
  }

  }})
  const password = `${pistaUno}-${pistaDos}-${pistaTres}`
  console.log(password)