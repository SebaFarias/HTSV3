const data = require('./webHTSV3/MOCK_DATA.json');  
let primerNuwe = true;

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
  if( dato.pet ){
    console.log(parseInt(dato.id.charAt(0)))
    if(parseInt(dato.id.charAt(0))>pistaTres){
      pistaTres = dato.id.charAt(0)
    }
  }
  }

})
console.log(pistaUno)
console.log(pistaDos)
console.log(pistaTres)