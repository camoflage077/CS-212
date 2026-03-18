document.addEventListener('DOMContentLoaded', () => {

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
});
