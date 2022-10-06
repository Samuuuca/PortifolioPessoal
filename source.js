
date();
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
