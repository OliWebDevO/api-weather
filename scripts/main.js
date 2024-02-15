let button = document.querySelector('button')
let input = document.querySelector('input')
let select =document.querySelector('select')

let resultat = document.querySelector('.wrapper')

select.addEventListener('change', function () {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${select.value}&appid=573c0d77ff7827b04de8ff37ae4f05bc&lang=fr 
`)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    resultat.innerHTML=""
    resultat.innerHTML += `
    <h1>${data.name}</h1>
    <p> La météo de ${data.name} est : ${data.weather[0].description}</p>
    <p> La température est de ${(((data.main.temp)-32)/9.5).toFixed(1)} degrés celsius</p>
    <p>Le taux d'humidité est de ${data.main.humidity}%</p> 
    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="">` ;
  })
  .catch(error => console.log('error', error));

});

// button.addEventListener('change', function () {

// fetch(`http://api.openweathermap.org/data/2.5/forecast?id=524901&appid={573c0d77ff7827b04de8ff37ae4f05bc}`, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     console.log(data)
//     resultat.innerHTML += `<p>${input.value} ${selectUn.value} vaut <strong>${data.result.toFixed(1)}</strong> ${selectDeux.value} </p> ` ;
//   })
//   .catch(error => console.log('error', error));

// })

// button.addEventListener('change', function () {

// fetch(`https://api.apilayer.com/fixer/convert?to=${selectDeux.value}&from=${selectUn.value}&amount=${input.value}`, requestOptions)
//   .then(response => response.json())
//   .then(data => {
//     resultat.innerHTML += `<p>${input.value} ${selectUn.value} vaut <strong>${data.result.toFixed(1)}</strong> ${selectDeux.value} </p> ` ;
//   })
//   .catch(error => console.log('error', error));

 

// // console.log()



// })
