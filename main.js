//Arrays
const studentsArray = [
  {
    id: 1,
    name: "Ryan",
    house: "Slytherin",
  }
];
const expelledArray = [
  {
    id: 1,
    name: "Ryan",
    house: "Slytherin",
  }
];
const houseArray = [
 "Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff",
];

//RENDER TO DOM
const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

//Query Selectors
const welcome = document.querySelector('#welcomeButtonDOM');
const form = document.querySelector('#formDOM');
const filter = document.querySelector('#filterDOM');
const hogwartsStudents = document.querySelector('#studentCardsDOM');
const expelledStudents = document.querySelector('#expelledCardsDOM');

//House Sorting Function
const randomizerFunction = () => {
  let randomizer = Math.floor(Math.random() * houseArray.length);
  return houseArray[randomizer];
};


//HTML Functions
const welcomeButtonFunction = () => {
  const domString = `
  <button type="button" class="btn btn-primary btn-lg">Let's Start Sorting!</button>
  `;
  renderToDom("#welcomeButtonDOM", domString);
}

const formFunction = () => {
  const domString = `
    <form>
      <h4>Enter First Year's Name</h4>
      <div class="form-floating mb-3">
        <input type="string" class="form-control" placeholder="Harry Potter" id="name" required>
        <label for="name">Student's Name</label>
      </div>
      <div class="col-12">
        <button class="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
  `;
  renderToDom("#formDOM", domString);
}

const filterFunction = () => {
  const domString = `
    <div>
      <h4>Filter Students</h4>
      <div id="filterStudents">
        <button type="button" class="btn btn-primary">Gryffindor</button>
        <button type="button" class="btn btn-success">Slytherin</button>
        <button type="button" class="btn btn-danger">Ravenclaw</button>
        <button type="button" class="btn btn-warning">Hufflepuff</button>
        <button type="button" class="btn btn-info">All students</button>
      </div>
    </div>  
  `;
  renderToDom("#filterDOM", domString);
}

const studentCardsFunction = (array) => {
  let domString = ``
  for (const student of array) {
    domString += `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Sudent: ${student.name}</h5>
              <h5 class="card-title">House: ${student.house}</h5>
            </div>
          </div>
        </div>
      </div>
    `;
  renderToDom("#studentCardsDOM", domString);
  }
}

const expelledCardsFunction = (array) => {
  let domString = ``
  for (const student of array) {
    domString += `
      <div id="expeledStudents">
        <div class="card" style="width: 18rem;">
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <p class="card-text">Unfortunately, ${student.name} went over to the dark side!</p>
          </div>
        </div>
      </div>
    `;
  renderToDom("#expelledCardsDOM", domString);
  }
}

//New Student Function
const newStudent = (event) => {
  event.preventDefault();
  const newStudentObj = {
    id: studentsArray.length + 1,
    name: document.querySelector("#name").value,
    house: randomizerFunction(),
  }
  studentsArray.push(newStudentObj);
  studentCardsFunction(studentsArray);
  form.reset();
}
form.addEventListener('submit', newStudent)

//Rendering the page
const displayPage = () => {
  formFunction();
  filterFunction();
  studentCardsFunction(studentsArray);
  expelledCardsFunction(studentsArray);
}

welcome.addEventListener('click', () => {
  console.log(`Welcome to Hogwarts!`)
  welcome.hidden = true;
  displayPage();
})

const startApp = () => {
  welcomeButtonFunction();
}
startApp();
