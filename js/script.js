// milestone 1:
// definire un array di oggetti;
// ogni oggetto rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template literal, visualizzare in pagina tutte le icone con il proprio nome.

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.

$(document).ready(
  function() {

    const icons = [
      {
        name: "dog",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "fish",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "tractor",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "hippo",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];
    const colors = ["#6ECAEF", "#D3FFA8", "#B32032"];

    const container = $(".icons");

    const types = getTypes(icons);
    // console.log(types);

    const coloredIcons = colorIcons(icons, colors, types);
    // console.log(coloredIcons);

    print(coloredIcons, container);
  }
);


// FUNCTIONS------------------------------------

function print(array, container) {
  container.html("");

  array.forEach(
    (element, index) => {
      const {name, prefix, family, color} = element;
      container.append(`
        <div class="single-icon-container">
          <i class="${family} ${prefix}${name}"style="color:${color}"></i>
          <div class="icons-title">${name.toUpperCase()}</div>
        </div>
      `);
    }
  );

};

function getTypes(array) {
  const types = [];

  array.forEach(
    (element) => {
      if (types.includes(element.type) == false) {
        types.push(element.type);
      }
    }
  );

  return types;
};

function colorIcons(iconsArray, colorsArray, typesArray) {

  const arrayColored = iconsArray.map((element) => {
      const typesIndex = typesArray.indexOf(element.type);
      const color = colorsArray[typesIndex]; //qua dentro ho la stringa colore
      const newElement = {
      ...element,
      color
      };
      return newElement;
    }
  );

  return arrayColored;
};
