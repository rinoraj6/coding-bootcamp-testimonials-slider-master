const slider = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    text: " “ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
    imgURL: "./images/image-tanya.jpg",
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    text: " “ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
    imgURL: "./images/image-john.jpg",
  },
];

const textBox = document.querySelector(".text-box"); // text box
const imgBox = document.querySelector(".img-box"); // image box

let mainTestimonial = document.querySelector(".main-testimonial"); // testimonial text

const nameAndJob = document.querySelector(".name-and-job"); // name and job text area
let nameSpan = document.querySelector(".name"); // name
let jobSpan = document.querySelector(".job"); // job

const testimonialImg = document.querySelector(".testimonial-img"); // testimonial  image

let currentPos = 0;
let nextPos = 1;

updateSlider();


console.log(`current slide index : ${currentPos}`);
console.log(`next slide index : ${nextPos}`);


// update function
function updateSlider() {
  if (nextPos == 1) {
    // console.log("log");
    currentPos = 0;
    mainTestimonial.textContent = slider[currentPos].text;
    textBox.appendChild(mainTestimonial);

    nameSpan.textContent = slider[currentPos].name;
    jobSpan.textContent = slider[currentPos].job;

    nameAndJob.appendChild(nameSpan);
    nameAndJob.appendChild(jobSpan);

    textBox.appendChild(nameAndJob);

    // for image box
    testimonialImg.src = slider[currentPos].imgURL;
    imgBox.append(testimonialImg);

    nextPos = 0;
  } else if (nextPos == 0) {
    console.log("log");
    currentPos = 1;
    mainTestimonial.textContent = slider[currentPos].text;
    textBox.appendChild(mainTestimonial);

    nameSpan.textContent = slider[currentPos].name;
    jobSpan.textContent = slider[currentPos].job;

    nameAndJob.appendChild(nameSpan);
    nameAndJob.appendChild(jobSpan);

    textBox.appendChild(nameAndJob);

    // for image box
    testimonialImg.src = slider[currentPos].imgURL;
    imgBox.append(testimonialImg);

    nextPos = 1;
  }
}


