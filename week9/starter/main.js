/*** Event listener ***/

// 1.Display the ID of the last student in the list.
const $studentList = document.getElementById("studentList");

function displayStudentId() {
//   $studentList.innerHTML = `<div class=""`;

$studentList.innerHTML = `<div class="col-md-6">
    <div class="ac-card">
        <div class="ac-card-image d-flex justify-content-center align-items-center"><i class="bi bi-person-bounding-box display-1"></i></div>
            <div class="ac-card-info">
                <p>
                <strong>${students[students.length - 1].name}</strong><br>
                <span>${students[students.length - 1].studentNumber}</span>-
                <span>${students[students.length - 1].userName}</span>
                </p>
                <p>${students[0].email}</p>
                <!--<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"> -->
                <button type="button" class="btn btn-primary">
                Launch demo modal
                </button>
                <!-- <button type="button" class="btn btn-primary">Update</button> --> 
           
            </div>
            <div class="ac-card-footer">
                <img class="ac-logo" src="https://imdac.github.io/images/codepen/AC_WORDMARK_1C_WHT.png">
            </div>
        </div>
    </div>
    `;
}

const $button = document.querySelector("button");
$button.addEventListener("mouseover", function () {
  console.log("click");
  $button.setAttribute("data-bs-toggle", "modal");
  $button.setAttribute("data-bs-target", "#exampleModal");
});

// 3.Add an event listener to the button.

/*** Form ***/
// 5.Add an event listener to the 'update form' to allow updating of the student's information.

const $updateForm = document.getElementById("updateForm");
$updateForm.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log($updateForm.elements);

  for (const input of $updateForm.elements) {
    // console.log(input.name)
    console.log(input.value);
  }

  console.log(document.getElementById("inputUsername").value);

  const inputUsername = document.getElementById("inputUsername").value; // without $ sign it's just a variable, not html
  // 2. Update the student's information
  students[students.length - 1].userName =
    // 3. Display the updated student's information
    displayStudentId();
});

/*** Filter ***/
// 6.Add an event listener to the 'Search' form. Test it with both 'submit' and 'input' events to display a filtered list based on the student's name.
