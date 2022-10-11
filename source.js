
getUserPosition();
date();
let x = setInterval(() => {
  //carrocelImagens();
}, 16000); 


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

function carrocelImagens() {
  
  const carroselImagens = document.querySelector('.carrosel-imagens').querySelectorAll('.off')

  carroselImagens[0].className = 'on';
  carroselImagens[0].addEventListener('animationend', () => {
  
    console.log('Animation ended');
    carroselImagens[0].className = 'off';

    carroselImagens[1].className = 'on';
  });
  carroselImagens[1].addEventListener('animationend', () => {
  
    console.log('Animation ended');
    carroselImagens[1].className = 'off';

    carroselImagens[2].className = 'on';
  });
  carroselImagens[2].addEventListener('animationend', () => {
    carroselImagens[2].className = 'off';
  });
  
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
    let temp = document.querySelector('.celcius');
    let ImgClimate = document.getElementById('climateImg');
    const Hora = new Date();
    const result = Hora.getHours();
    
    
    fetch(url).then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);

      if( result >= 7 && result <= 18){
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/cliamte/sol-quente.png'
        }
        else if (tempInCelsius >= 10 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/cliamte/frio-dia.png'
        
        } else {
          
          ImgClimate.src = 'img/cliamte/neve.png'
        
        }
      }
      else{
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/cliamte/lua-quente.png'

        }
        else if (tempInCelsius >= 10 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/cliamte/lua-frio.png'
        
        } else {
          ImgClimate.src = 'img/cliamte/neve.png'
        
        }
        
      }

      city.innerText = `${data.name} `;
      temp.innerText = `${tempInCelsius}°C`;
      
    })
    .catch((err) => {
      city.innerText = `Permita o acesso a localização`;
      temp.innerText = `-`;
    })
  }
  
