//Arrays
const studentsArray = [{
    id: 1,
    name: "Tyler",
    house: "Gryffindor",
  }, {
    id: 2,
    name: "Ryan",
    house: "Slytherin",
  }, {
    id: 3,
    name: "DeAndre",
    house: "Ravenclaw",
  }, {
    id: 4,
    name: "Dro",
    house: "Hufflepuff",
  }
];
const expelledArray = [
  {
    id: 5,
    name: "Barry",
    house: "Moldy Voldy's Army",
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
  <button type="button" class="btn btn-info btn-lg">Discover your house</button>
  `;
  renderToDom("#welcomeButtonDOM", domString);
}

const formFunction = () => {
  const domString = `
    <form id=submitStudent>
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
        <button id="filter--gryffindor" type="button">Gryffindor</button>
        <button id="filter--slytherin" type="button">Slytherin</button>
        <button id="filter--ravenclaw" type="button">Ravenclaw</button>
        <button id="filter--hufflepuff" type="button">Hufflepuff</button>
        <button id="allOnDom"type="button">All students</button>
      </div>
    </div>
  `;
  renderToDom("#filterDOM", domString);
}

const studentCardsFunction = (array) => {
  let domString = ``
  array.forEach((student) => {
    domString += `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div id="${student.house}" class="col-md-4">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">Sudent: ${student.name}</h5>
            <h5 class="card-title">House: ${student.house}</h5>
          </div>
          <button id="expel--${student.id}" type="button" class="btn btn-secondary">Expel</button>
        </div>
      </div>
    </div>
  `;
  renderToDom("#studentCardsDOM", domString);
  });
};

const expelledCardsFunction = (array) => {
  let domString = ``
  for (const student of array) {
    domString += `
      <div id="expelledStudents">
        <div class="card" style="width: 18rem;">
          <img src="Voldemort12.jpg" class="card-img-top" alt="...">
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
  document.querySelector('#submitStudent').reset();
}
form.addEventListener('submit', newStudent)

//Expel Students
const expelFilter = () => {
  console.log('filter')
  const expelledStudents = document.querySelector('#studentCardsDOM')
  expelledStudents.addEventListener('click', (e) => {
    console.log('event listener')
    if(e.target.id.includes('expel')) {
      const [, id] = e.target.id.split('--');
      const index = studentsArray.findIndex(student => student.id === Number(id));
      const expelStudent = studentsArray.splice(index, 1);
      expelledArray.push(expelStudent[0]);
      studentCardsFunction(studentsArray);
      expelledCardsFunction(expelledArray);
    }
  })
}

//Filter students
const filterStudents = () => {
  const filter = document.querySelector('#filterDOM');
  filter.addEventListener('click', (e) => {
    if(e.target.id.includes("filter")) {
      const [, house] = e.target.id.split('--');
      const filterStudentsArray = studentsArray.filter(student => student.house.toLowerCase() === house.toLowerCase());
      studentCardsFunction(filterStudentsArray);
    }
    if(e.target.id.includes("allOnDom")) {
      studentCardsFunction(studentsArray);
    }
  })
};

//Rendering the page
const displayPage = () => {
  formFunction();
  // document.querySelector('#filterDOM').addEventListener((click), filterFunction)
}

welcome.addEventListener('click', () => {
  console.log(`Welcome to Hogwarts!`)
  welcome.hidden = true;
  displayPage();
})

const startApp = () => {
  filterFunction();
  studentCardsFunction(studentsArray);
  expelledCardsFunction(expelledArray);
  welcomeButtonFunction();
  expelFilter();
  filterStudents();
}
startApp();
