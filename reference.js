const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const petsOnDom = (array) => {
  let petString = "";
  for (const pet of array) {
    petString += `
  <div class="card">
    <h3 class="card-header">${pet.name}</h3>
    <div class="card-body">
      <img src="${pet.imageUrl}" class="card-img-bottom" alt="Photo of ${pet.name} the ${pet.type}">
      <h5 class="card-title">${pet.color}</h5>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
    <h4 class="${pet.type}">${pet.type}</h4>
    <button class="btn btn-danger" id="delete--${pet.id}" style="width: 100%">Delete</button>
  </div>
    `
  }
  renderToDom("#root", petString)
}

petsOnDom(pets);

const filter = (pets, type) => {
  const filterPetsArray = [];
  for (const pet of pets) {
    if (pet.type === type) {
      filterPetsArray.push(pet);
    }
  }
  return filterPetsArray;
}

const dogButton = document.querySelector('#showDogs');
dogButton.addEventListener('click', () => {
  const dogs = filter(pets, 'dog');
  petsOnDom(dogs);
})

const catButton = document.querySelector('#showCats');
catButton.addEventListener('click', () => {
  const cats = filter(pets, 'cat');
  petsOnDom(cats);
})

const dinoButton = document.querySelector('#showDinos');
dinoButton.addEventListener('click', () => {
  const dinos = filter(pets, 'dino');
  petsOnDom(dinos);
})

const allButton = document.querySelector('#showAll');
allButton.addEventListener('click', () => {
  const all = pets;
  petsOnDom(all);
})

const newPet = (event) => {
  event.preventDefault();
  const petObj = {
    id: pets.length + 1,
    name: document.querySelector("#name").value,
    color: document.querySelector("#color").value,
    specialSkill: document.querySelector("#specialSkill").value,
    type: document.querySelector("#type").value,
    imageUrl: document.querySelector("#imageUrl").value
  }
  console.log('Still working')
  pets.push(petObj);
  petsOnDom(pets);
  form.reset();
}

const form = document.querySelector('form');

form.addEventListener('submit', newPet);

rootDiv.addEventListener('click', (e) => {
  
  if (e.target.id.includes("delete")) {
    const [, id] = e.target.id.split("--");
    const index = pets.findIndex(e => e.id === Number(id));
    pets.splice(index, 1);
    petsOnDom(pets);
  }
});

const startApp = () => {
  petsOnDom(pets);
}


startApp();
