console.log('Hello World');

const downloadButton = document.getElementById('downloadButton');
const name = "Cameron L";
let downloadedResume = false;

downloadButton.addEventListener('click', () => {
    if(!downloadedResume) {
        alert(`${name}, your resume has been downloaded`);
        downloadedResume = true;
    } else {
        console.log("Resume has already been downloaded");
    }
});

function showGreeting(name) {
    return "Hello, my name is " + name + " Welcome to my website";
}

const greeting = document.getElementById('greeting');

const greetingMsg = showGreeting("Cameron L");

greeting.textContent = greetingMsg;

function daysUntilDeadline(deadlineDate) {
    const today = new Date();
    const deadline = new Date(deadlineDate);

    const differenceInMs = deadline - today;

    const differenceInDays = Math.ceil(differenceInMs / (1000 * 60 * 60 * 24));

    return differenceInDays;
}

const deadlineElement = document.getElementById('deadline1');


const deadline1 = deadlineElement.textContent;
const remainingDays = daysUntilDeadline(deadline1);
console.log(`Days remaining until deadline : ${remainingDays}`);

const daysRemaining = document.getElementById('daysRemaining1');
if(daysRemaining) {
    daysRemaining.textContent = remainingDays;
}

function addSkill() {
    const skillInput = document.getElementById('skillInput');
    const skill = skillInput.value.trim();

    if (skill != "") {
        const list = document.getElementById('skillsList');

        const listItem = document.createElement('li');
        listItem.textContent = skill;
        list.appendChild(listItem);


        skillInput.value = "";
    } else {
        alert("Please Enter a skill!");
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('addSkillButton');
    const input = document.getElementById('skillInput');

    button.addEventListener('click', addSkill);

    input.addEventListener('keypress', function(e) {
        if (e.key == "Enter") {
            addSkill();
        }
    });
});

const projectTitles = ["Website", "Bike Repair", "Portfolio"];
const projectDescriptions = [
    "Designing my personal website",
    "Creating a bike repair website",
    "Creating my skill portfolio"
];
const projectDeadlines = ["2026", "2027", "N/A"];

function displayProjects() {
    const container = document.getElementById('ProjectsContainer');

    for (let i = 0; i < projectTitles.length; i++) {
        const projectDiv = document.createElement("div");
        projectDiv.classList.add("Project");

        const title = document.createElement("h3");
        title.textContent = projectTitles[i];

        const description = document.createElement("p");
        description.textContent = projectDescriptions[i];

        const deadline = document.createElement("p");
        deadline.textContent = "Deadline: " + projectDeadlines[i];

        projectDiv.appendChild(title);
        projectDiv.appendChild(description);
        projectDiv.appendChild(deadline);

        container.appendChild(projectDiv);
    }
}




document.addEventListener("DOMContentLoaded", displayProjects);


document.addEventListener('DOMContentLoaded', () => {
    let downloadCount = 0;

    const downloadButton = document.getElementById('downloadLink');
    const downloadCountElement = document.getElementById('downloadCount');

    if (downloadButton && downkloadCountElement) {
        downloadButton.addEventListener('click', (e) => {
            downloadCount++;
            downloadCountElement.textContent = downloadCount;

            alert(`Resume downloaded! Total Downloads: ${downloadCount}`);
        })
    }

document.addEventListener('DOMContentLoaded', () => {


    const experienceData = [
        { role: "Laborer", company: "OTTE", start: "Summer 2021", end: "Present" },
       
    ];


    const educationData = [
        { degree: "ISM", school: "NAU", start: "August 2020", end: "2026" },
        { degree: "High School Diploma", school: "Service High", start: "2016", end: "2020" }
    ];


    function createTable(data, containerId, headers) {
        const container = document.getElementById(containerId);
        if (!container) return;

        const table = document.createElement('table');
        table.style.borderCollapse = "collapse";
        table.style.width = "100%";

  
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');

        thead.appendChild(headerRow);
        table.appendChild(thead);


        const tbody = document.createElement('tbody');

        data.forEach(entry => {
            const row = document.createElement('tr');

            Object.values(entry).forEach(text => {
                const td = document.createElement('td');
                td.textContent = text;
                td.style.border = "1px solid black";
                td.style.padding = "8px";
                row.appendChild(td);
            });

            tbody.appendChild(row);
        });

        table.appendChild(tbody);
        container.appendChild(table);
    }


    createTable(experienceData, 'experienceContainer', ["Role", "Company", "Start Date", "End Date"]);


    createTable(educationData, 'educationContainer', ["Degree", "School/University", "Start Date", "End Date"]);

    
});


});