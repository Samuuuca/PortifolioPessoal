getUserPosition();
date();

function date(){

  const dateBD = document.getElementById('dateBD')

  let ano = new Date().getFullYear()

  let a = `Oct 21, ${ano} 00:00:00`
            //'Oct 21, 2022 00:00:00'

  let date = new Date(a).getTime()

  let x = setInterval(() => {
    
    let now = new Date().getTime()
      
    let diferença = date - now

    let day = Math.floor( diferença / ( 1000 * 60 * 60 * 24 ))
    let horas = Math.floor((diferença % ( 1000 * 60 * 60 * 24 )) / ( 100 * 60 * 60))
    let minutos = Math.floor((diferença % ( 1000 * 60 * 60 )) / ( 1000 * 60 ))
    let segundos = Math.floor((diferença % ( 1000 * 60)) / 1000)

    let format = `${day}d ${horas}h ${minutos}m ${segundos}s`.replace('-', '', '3') 

    dateBD.innerText = format
  }, 1000);

  return console.log('Date funcionando')
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

function fetchApi(url){
  
    let city = document.querySelector('.city');
    let temp = document.querySelector('.celcius');
    let format = document.querySelector('.welcome');
    console.log(format)
    let ImgClimate = document.getElementById('climateImg');
    const Hora = new Date();
    const Horario = Hora.getHours();

    
    fetch(url).then((data) => {
      return data.json();
    })
    .then((data) => {
      let tempInCelsius = ((5/9) * (data.main.temp-32)).toFixed(1);

      if( Horario >= 7 && Horario <= 17){
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/climate/sol-quente.png'
        }
        else if (tempInCelsius >= 10 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/climate/frio-dia.png'
        
        } else {
          
          ImgClimate.src = 'img/climate/neve.png'
        
        }
      }
      else{
        if (tempInCelsius >= 20) {
          
          ImgClimate.src = 'img/climate/lua-quente.png'

        }
        else if (tempInCelsius >= 10 && tempInCelsius < 20 ) {
          
          ImgClimate.src = 'img/climate/lua-frio.png'
        
        } else {
          ImgClimate.src = 'img/climate/neve.png'
          ImgClimate.width = '50px'
        
        }
        
      }
      format.style.display = 'flex'
      city.innerText = `${data.name} `;
      temp.innerText = `${tempInCelsius}°C`;
      
    })
    .catch((err) => {
      city.innerText = `Permita o acesso a localização`;
      temp.innerText = `-`;
    })
}

function getWindow(){

  const telaLargura = window.innerWidth
  const telaAltura = window.innerHeight
  
  let randomLargura = Math.floor(Math.random() * telaLargura)
  let randomAltura = telaAltura - Math.floor(Math.random() * telaAltura)

  scr
  
  
  return randomAltura
  
}
