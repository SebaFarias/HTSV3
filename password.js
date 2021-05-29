const data = require('./webHTSV3/MOCK_DATA.json')
const fetch = require("node-fetch");
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
  const passwordParteUno = `${pistaUno}-${pistaDos}-${pistaTres}`

  const user = 'gagocarrilloedgar'
  const repoName = 'HTSV2'
  const url = `https://api.github.com/users/${user}/repos`
  fetch(url)
  .then(res => res.json())
  .then( data=>{
    console.log('Parte dos: ', data.filter(repo=>repo.name === repoName)[0].id)
  })

  console.log('Parte uno: ', passwordParteUno)