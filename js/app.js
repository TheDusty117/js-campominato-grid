console.log('CAMPO MINATO')

let latoGriglia = 10
let numeroCelle = latoGriglia * latoGriglia

console.log(latoGriglia, numeroCelle)

const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
console.log(grigliaElement)

//generare dentro il DIV con classe 'griglia' 100 celle con il loro stile

for (let i = 0; i < numeroCelle; i++) {
  let num = i + 1
  console.log(i+1)
  const divCreateElement = document.createElement('div'); //creo un tag div ad ogni ITERAZIONE(100 iteraz.)
  console.log(divCreateElement)//console per controllare se sono stati creati
  //associo classe 'cella' che ha il suo stile nel css
  divCreateElement.className= 'cella'
}