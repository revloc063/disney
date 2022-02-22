//https://disneyapi.dev/docs
//DATA IS ALPHABETICAL
document.getElementById("userInput").addEventListener("submit", function(event) {
  event.preventDefault();
  /*let character = document.getElementById("characterField").value;
  let results = document.getElementById("characterData");
  results.appendChild(document.createTextNode(character));*/
  let url = "static.txt";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
    });
};
  /*
  let selected = document.getElementById("selector");

  let url = "https://api.disneyapi.dev/characters/" + character;

  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let dataSet = json.selected;
      let results = document.getElementById("characterData");
      results.appendChild(json.name + "<br/>");
      if (dataSet.length !== 0) {
        for (let i = 0; i < dataSet.length; i++) {
            results.appendChild(document.createTextNode(dataSet[i] + "<br/>"));
        }
      }
      else {
        results.appendChild(document.createTextNode("No data found."));
      }

    });
});
*/
/*const dataArray = [{name: "_id"}, {name: "name"}, {name: "films"}]


document.getElementById("characterField").addEventListener("submit", function(event){
  event.preventDefault();
  const url = "https://api.disneyapi.dev/characters/" + document.getElementById("characterField").value;
  fetch(url)
    .then(function(response){
      return response.json();
    }).then(function(json) {
      const data = document.getElementById("characterData");
      for (let i = 0; i < dataArray.length; i++) {
        const typeData = dataArray[i].name
        const currentData = json.typeData;
        data.appendChild(document.createTextNode(typeData + ": " + currentData + "<br/>"));
      }
    });
});*/


/*const url = "https://api.disneyapi.dev/characters/200"
fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    console.log(json);
    console.log(json[0]);
    value = json[0];
    const testing = document.createElement("p");
    testing.appendChild(document.createTextNode(value));
  })
*/
