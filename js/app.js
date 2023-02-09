console.log('CAMPO MINATO')

document.querySelector('.play-button').addEventListener('click',function(){


  let latoGriglia = 10
  let numeroCelle = latoGriglia * latoGriglia
  
  console.log(latoGriglia, numeroCelle)
  
  const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
  console.log(grigliaElement)
  
  //generare dentro il DIV con classe 'griglia' 100 celle con il loro stile
  
  for (let i = 0; i < numeroCelle; i++) {
    let num = i + 1 // numero che associa progressivamente ad ogni giro di for per 100 volte
    console.log(i + 1)
    const divCreateElement = document.createElement('div'); //creo un tag div ad ogni ITERAZIONE(100 iteraz.)
    divCreateElement.className = 'cella' // al tag div creto, ci associo la classe 'cella' che ha il suo stile in CSS
    console.log(divCreateElement)//console per controllare se sono stati creati
    divCreateElement.style.width = `calc(100% / ${latoGriglia})`
    divCreateElement.innerHTML = num
    
    grigliaElement.append(divCreateElement)
    
    divCreateElement.addEventListener('click', function() { // A OGNI GIRO, SICCOME SIAMO DENTRO IL FOR, verra' creato un EVENTLISTENER CLICK ad ogni iterazione insieme ai numeri e ai vari div con la rispettiva classe
      console.log(`click ${num}`)
    })
  }


})


