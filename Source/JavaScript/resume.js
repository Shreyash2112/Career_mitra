document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    const resumeData = {};
    for (const [key, value] of formData.entries()) {
      resumeData[key] = value;
    }
    console.log(resumeData);

    generateResume(resumeData);
  });

document.getElementById("printButton").addEventListener("click", function () {
  printResume();
});

document.getElementById("reset").addEventListener("click", function () {
  reset();
});

function generateResume(data) {
  let resumeName = document.querySelector("#resumeName");
  resumeName.innerHTML = data.name;
  let resumeEmail = document.querySelector("#resumeEmail");
  resumeEmail.innerHTML = data.email;
  let resumePhone = document.querySelector("#resumePhone");
  resumePhone.innerHTML = data.phone;
  let resumeAddress = document.querySelector("#resumeAddress");
  resumeAddress.innerHTML = data.address;
  let resumeAbout = document.querySelector("#resumeAbout");
  resumeAbout.innerHTML = data.summary;
  let resumeSkills = document.querySelector("#resumeSkills");
  resumeSkills.innerHTML = data.skills;
  let resumeEducation = document.querySelector("#resumeEducation");
  resumeEducation.innerHTML = data.education;
  let resumeCollege = document.querySelector("#resumeCollege");
  resumeCollege.innerHTML = data.college;
  let resumeExperience = document.querySelector("#resumeExperience");
  resumeExperience.innerHTML = data.experience;
  let resumeAchivements = document.querySelector("#resumeAchivements");
  resumeAchivements.innerHTML = data.achivements;

  let resume = document.querySelector("#resume");
  resume.style.display = "block";

  let printButtondiv = document.querySelector("#printButtondiv");
  printButtondiv.style.display = "block";

  let resumeForm = document.querySelector("#resumeForm");
  resumeForm.style.display = "none";
}

function printResume() {
  const resume = document.getElementById("resume").innerHTML;
  const printWindow = window.open("", "_blank");
  printWindow.document.open();
  printWindow.document.write(`
      <html>
          <head>
              <title>Resume</title>
              <style>
                  /* Add your styles here */
              </style>
          </head>
          <body>
              ${resume}
          </body>
      </html>
  `);
  printWindow.document.close();
  printWindow.print();
}

function reset() {
  window.location.reload();
}

// dom manipulations in resume

// resumeName = document.querySelector("#resumeName");
// resumeName.innerHTML = 1;
// resumeEmail = document.querySelector("#resumeEmail");
// resumeEmail.innerHTML = 2;
// resumePhone = document.querySelector("#resumePhone");
// resumePhone.innerHTML = 3;
// resumeAddress = document.querySelector("#resumeAddress");
// resumeAddress.innerHTML = 4;
// resumeAbout = document.querySelector("#resumeAbout");
// resumeAbout.innerHTML = 5;
// resumeSkills = document.querySelector("#resumeSkills");
// resumeSkills.innerHTML = 6;
// resumeEducation = document.querySelector("#resumeEducation");
// resumeEducation.innerHTML = 7;
// resumeCollege = document.querySelector("#resumeCollege");
// resumeCollege.innerHTML = 8;
// resumeExperience = document.querySelector("#resumeExperience");
// resumeExperience.innerHTML = 9;
