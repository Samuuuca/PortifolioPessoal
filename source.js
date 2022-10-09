getUserPosition();
date();

const Hora = new Date();

const result = Hora.getHours();


function date(){

    const dateBD = document.getElementById('dateBD')
    
    let a = 'Oct 21, 2022 00:00:00'
            //'Oct 21, 2022 00:00:00'

    let date = new Date(a).getTime()
        console.log(date, dateBD);

    let x = setInterval(() => {
    
        let now = new Date().getTime()
    
        let diferença = date - now

        let day = Math.floor( diferença / ( 1000 * 60 * 60 * 24 ))
        let horas = Math.floor((diferença % ( 1000 * 60 * 60 * 24 )) / ( 100 * 60 * 60))
        let minutos = Math.floor((diferença % ( 1000 * 60 * 60 )) / ( 1000 * 60 ))
        let segundos = Math.floor((diferença % ( 1000 * 60)) / 1000)

        let format = `${day}d ${horas}h ${minutos}m ${segundos}s`.replace('-', '', '3') 
        dateBD.innerHTML = format

}, 1000);
}

function carossel(e) {
    const divCarrosel = document.getElementsByClassName('off')
    console.log(divCarrosel)

    if (divCarrosel.length === 3) {


    } else {
        
    }
}

function getUserPosition() {
  let url;
  navigator.geolocation.getCurrentPosition((pos) => {
    let lat = pos.coords.latitude;
    let long = pos.coords.longitude;
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&APPID=272d5dbf2036bbd82b9242d7f1d82023`;
    fetchApi(url);
  });
}

function fetchApi(url) {
    let city = document.querySelector('.city');
    let temp = document.querySelector('span');
    let ImgClimate = document.getElementById('climateImg');
    console.log(ImgClimate);
    
    
    fetch(url).then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);
      
      if( result >= 7 && result <= 18){
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/cliamte/sol-quente.png'
          console.log('quente');
        }
        else if (tempInCelsius >= 13 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/cliamte/frio-dia.png'
        } else {
          ImgClimate.src = 'img/cliamte/neve.png'
        }
      }
      else{
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/cliamte/lua-quente.png'
          console.log('quente');
        }
        else if (tempInCelsius >= 13 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/cliamte/lua-frio.png'
        } else {
          ImgClimate.src = 'img/cliamte/neve.png'
        }
        console.log('noite')
      }

      city.innerText = `${data.name} ${tempInCelsius}°C`;
      
    })
    .catch((err) => {
      city.innerText = `Impossível acessar o OpenWeather. Verifique a sua conexão.`;
      temp.innerText = `-`;
    })
  }
  
