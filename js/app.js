console.log('CAMPO MINATO')



document.querySelector('.play-button').addEventListener('click',function(){ //on click compare la griglia
  

  
  const askLevel = parseInt(prompt('inserisci difficoltà da 10 a 20'))
  
  let latoGriglia = askLevel
  let numeroCelle = latoGriglia * latoGriglia
  
  console.log(latoGriglia, numeroCelle)
  
  const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
  console.log(grigliaElement)

  grigliaElement.innerHTML = ('') // SCOMMENTA per dare al button play, anche il reset della griglia
  
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
      console.log(`click ${num}`)     //con il backtick uso template literal, per scrivere stringhe, con il dollaro e graffe gli dico che non e' piu una stringa ma una VARIABILE
      divCreateElement.style.backgroundColor = 'blue'
      
    })
  }
  
  
})

//BOTTONE DI RESET TOTALE
document.querySelector('.reset-button').addEventListener('click',function(){

  const grigliaElement = document.querySelector('.griglia') //prendo il primo ed unico div con classe griglia dal DOM
  console.log(grigliaElement)

  grigliaElement.innerHTML = ('') 

})

