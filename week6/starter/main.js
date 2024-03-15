/*** Inserting elements with innertHTML */

// Use the 'courses' array from script.js to create a navigation bar 
//that displays the first two course names. Save the the resulting HTML 
//template in the variable 'courseNav'
const courseNav = `<nav id="courseList" class="nav d-flex justify-content-between">
<a class="p-2 link-secondary item" href="#">${courses[0]}</a>
<a class="p-2 link-secondary item" href="#">${courses[1]}</a>
</nav>`;

// Display the template in the document using the DOM element with the ID 'list'.

const $list = document.getElementById('list')
$list.innerHTML = courseNav

// Add the third course to the list.  
//Ensuring to retain all previously written code.

const $courseList = document.getElementById('courseList')
const listTemplate = `<a class="p-2 link-secondary item" href="#">${courses[2]}</a>`

// $courseList.innerHTML = $courseList.innerHTML = listTemplate
$courseList.innerHTML += listTemplate

//Dinamically create, and display in the document, 
//all the "credentials". Use the 'students' array, and a 'for loop'.
// 1- Retrieve the DOM element
const $studentList = document.getElementById('studentList')
// 2- create the template

const credentialTemplate = []

for(const student of students){
    credentialTemplate.push(
      `<div class="col-md-6">
       <div class="ac-card">
       <div class="ac-card-image"></div>
       <div class="ac-card-info">
       <p>
       <strong>${student.name}</strong><br>
       <span>${student.studentNumber}</span>
       </p>
       <p>${student.email}</p>
       </div>
       <div class="ac-card-footer">
       <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
       </div>
       </div>
       </div>`
    )
}

// 3- insert the template
$studentList.innerHTML = credentialTemplate.join(' ')



//Display all the "Credentials" using the innerHTML only once. Use an array to save multiple templates and the join() method.

//Use the same approach but instead of innerHTML() use insertAdjacentHTML() to display the courses

/*** Create HMTL element with createElement() method */
//Retrieve the DOM element that has the id 'student-table'

//Declare a function to create a table. No parameters are needed.

// Function body: Using a for loop, create the rows/cells and fill them with the student's name, number, and email.
//for(let i=0; i<students.length; i++) {

// Create a new 'table row' for the contact
// const tableRow = document.createElement('tr')

// Create a new cell for the Name
// const tableCellName =

// Fill the value of the cell
// tableCellName.textContent =

// Append the cell in the row element. Use the method appendChild()
// _row_.appendChild(_cell_)

// Repeat the process to insert the StudentNumber and Email cells

// Append the row in the table container ''student-table''

// } // Closes the for loop
// } // Closes the function

//Call the function to display the table in the page
