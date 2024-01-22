// 1. The height of Darth Vader
// https://swapi.dev/api/people/4/
// "height": "202",

// 2. The population of the planet Alderaan
// https://swapi.dev/api/planets/2/
// "population": "2000000000",

// 3. The name of the manufacturer of the Millennium Falcon
// https://swapi.dev/api/starships/10/
// "manufacturer": "Corellian Engineering Corporation",

// 4. The name of the species that C-3PO belongs to (multiple URLs)
// https://swapi.dev/api/people/2/
// "species": [
//     "https://swapi.dev/api/species/2/"
// ],
// https://swapi.dev/api/species/2/
// "name": "Droid",

// 5. The title of each film that Obi-Wan Kenobi is in (multiple URLs)
// https://swapi.dev/api/people/10/
// "films": [
//     "https://swapi.dev/api/films/1/",
//     "https://swapi.dev/api/films/2/",
//     "https://swapi.dev/api/films/3/",
//     "https://swapi.dev/api/films/4/",
//     "https://swapi.dev/api/films/5/",
//     "https://swapi.dev/api/films/6/"
// ],
//    "title": "A New Hope", ...

// 6. Use the search query (the how to on the search query is at the
// bottom of the Getting Started section of the documentation) to get
// the information about the Millennium Falcon, it’s a starship
// https://swapi.dev/api/starships/?search=millennium

// const axios = require('axios');

const itemList = document.querySelector("#item");
const description = document.querySelector("#description");
const button = document.querySelector("button");

const peopleLimit = 82;
const planetsLimit = 60; // "count": 60,

const baseUrl = "https://swapi.dev/api/";

// button.addEventListener("click", () => {
//   const inputField = document.querySelector("input");
//   if (inputField.value.length == 0) {
//     axios.get(baseUrl + resource).then((response) => {
//       const count = response.data.count;
//       const li = document.createElement("li");
//       const text = document.createTextNode(`${resource}: ${count}`);
//       li.appendChild(text);
//       itemList.appendChild(li);
//       //console.log(data.results);
//       for (let i = 1; i <= count; i++) {
//         outputHtml += `<p>${response.data.name}</p>`; // Assuming 'name' is the property you want
//       }

//       // Display the names
//       itemList.innerHTML = outputHtml;
//     });
//     //   for (let i = 0; i <= 7; i++) {
//     //     const name = data.results[i].name;
//     //     console.log(name);
//     //     const li = document.createElement("li");
//     //     const text = document.createTextNode(`${name}`);
//     //     li.appendChild(text);
//     //     itemList.appendChild(li);
//     //     //li.setAttribute('value', baseUrl + resource/)
//   }
// });
//   }
// });

//good but not refreshed
button.addEventListener("click", function (e) {
  const resource = document.querySelector("input[name=resource]:checked").value;
  const inputField = document.querySelector("input[name=search]");
  if (inputField.value.length == 0) {
    fetch(baseUrl + resource)
      .then((response) => response.json())
      .then((data) => {
        const li = document.createElement("li");
        const text = document.createTextNode(`${resource}: ${data.count}`);
        li.appendChild(text);
        itemList.appendChild(li);
        //console.log(data.results);
        for (let i = 0; i <= 7; i++) {
          const name = data.results[i].name;
          const li = document.createElement("li");
          const text = document.createTextNode(`${name}`);
          li.appendChild(text);
          itemList.appendChild(li);
          //li.setAttribute('value', baseUrl + resource/)
        }
      });
  } else {
    fetch(baseUrl + resource + "/?search=" + inputField.value)
      .then((response) => response.json())
      .then((data) => {
        const li = document.createElement("li");
        const text = document.createTextNode(`${resource}: ${data.count}`);
        li.appendChild(text);
        itemList.appendChild(li);
        for (let i = 0; i < data.count; i++) {
          const name = data.results[i].name;
          console.log(name);
          const li = document.createElement("li");
          const text = document.createTextNode(`${name}`);
          li.appendChild(text);
          itemList.appendChild(li);
        }
      });
  }
});
