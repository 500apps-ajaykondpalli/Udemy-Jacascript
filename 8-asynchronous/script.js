'use strict';
  const btn = document.querySelector('.btn-country');
  const countriesContainer = document.querySelector('.countries');
// let getCountryData = function (country) {

//   let request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.eu/rest/v2/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     let [data] = JSON.parse(this.responseText);
//     console.log(data);

//     let html = `
//   <article class="country">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(
//         +data.population / 1000000
//       ).toFixed(1)} people</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);

//     countriesContainer.style.opacity = 1;
//   });
// };

// getCountryData('portugal');


const renderCountry=function(data, className = ''){
  let html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;

    countriesContainer.insertAdjacentHTML('beforeend', html);

    countriesContainer.style.opacity = 1;
}

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend',msg);
  countriesContainer.style.opacity=1
}


const getJSON = function(url, errorMsg= "Something went wrong"){
  return fetch(url).then(response => {
    if (!response.ok) throw new Error (`${errorMsg}. ${response.status}`)
     return response.json()
 })
}

// let getCountryAndNeighbour=function(country){
//   //ajax call country 1
//   let request=new XMLHttpRequest();
//   request.open('GET',`https://restcountries.eu/rest/v2/name/${country}`)
//   request.send();

//   request.addEventListener('load',function(){
//     let [data] = JSON.parse(this.responseText)
//     console.log(data);
//     // render country 1
//     renderCountry(data);

//     //get neigbhour country (2)
//     let [neighbour] = data.borders;

//     if (!neighbour) return;

//     //ajax call country 2
//     let request2=new XMLHttpRequest();
//     request2.open('GET',`https://restcountries.eu/rest/v2/alpha/${neighbour}`)
//     request2.send();

//     request2.addEventListener('load',function(){
//       let data2= JSON.parse(this.responseText);
//       console.log(data2)
//       // render country 2 
//       renderCountry(data2,'neighbour');
//     })

//   })
// };

// getCountryAndNeighbour("portugal")

// Promises

/* 

let getCountryData = function(country){
  //country 1
getJSON(`https://restcountries.eu/rest/v2/name/${country}`,'country not found')
 .then(data =>{
  renderCountry(data[0])

  let neighbour = data[0].borders[0]
  if (!neighbour) throw new Error ` no neighbour found`;
  //country 2
   return getJSON(`https://restcountries.eu/rest/v2/alpha/${neighbour}`,'no neighbour')

 })
 
 .then(data => renderCountry(data,'neighbour'))
 .catch( err => {
   console.error(`${err}`)
   renderError(`something went wrong . ${err.message}. try again`)
 })
}

getCountryData('usa')

*/
// async await

let whereAmI = async function(country){
  let res = await fetch (`https://restcountries.eu/rest/v2/name/${country}`);
  let data = await res.json()
  console.log(data)
  renderCountry(data[0])
 
}
whereAmI('usa')
console.log("this comes first")
