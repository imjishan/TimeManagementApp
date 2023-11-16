const featuresList = [
  {
    icon: "images/create-task-icon.svg",
    title: "Intuitive Task Creation",
    description:
      "Easily create and manage tasks with a simple and user-friendly interface.",
  },
  {
    icon: "images/reminders-icon.svg",
    title: "Smart Reminders",
    description:
      "Set reminders to ensure you never miss an important deadline.",
  },
  {
    icon: "image/collaborations-icon.svg",
    title: "Collaboration Tools",
    description:
      "collaborate with team members, assign tasks, and track prpgress together.",
  },
  {
    icon: "images/progress-icon.svg",
    title: "Progress Tracking",
    description:
      "Monitor your progress, track completed tasks, and stay motivated.",
  },
  {
    icon: "images/deadline-icon.svg",
    title: "Deadline Management",
    description:
      "Set due dates and track deadlines to stay on top of your commitments.",
  },
  {
    icon: "images/file-icon.svg",
    title: "File Attachments",
    description:
      "Attach files to tasks for seamless collaboration and easy access.",
  },
];

// testimonials list

const testimonialsLists = [
  {
    review:
      "Since I started using the app, my productivity has skyrocketed. The reminder feature keeps me on track. Highly recommended!",
    image: "images/testimonial1.png",
    name: "John Smith",
    designation: "Tech Lead, Amazon",
  },
  {
    review:
      "This app has completely changed the way I manage my tasks. The advanced features and intuitive interface make it a joy to use. I cannot my worklife without it!",
    image: "images/testimonial2.png",
    name: "Sarah Johnson",
    designation: "Product Manager, Google",
  },
  {
    review:
      "I've tried several task management apps, but this one takes the cake. The customizable workflows and seamless collaboration features have greatly improved my team's efficiency.",
    image: "images/testimonial3.png",
    name: "Emily Davis",
    designation: "Project Manager, Microsoft",
  },
];

// Selection of html
const featuresContent = document.querySelector("#features .content");
const testimonialCard = document.querySelector("#testimonials .testimonial-card");
const prevBtn = document.querySelector("#testimonials .prev-btn");
const nextBtn = document.querySelector("#testimonials .next-btn");
const menuIcon = document.querySelector(".menu")
const mobileNavMenu = document.querySelector(".mobile-nav-menu")
// end of selection
let currentTestimonialIndex = 0;
// start of javascript
const displayFeatures = () => {
  featuresList.forEach((feat) => {
    const html = `<div class="icon">
        <img src="${feat.icon}" alt="" />
      </div>
      <h3>${feat.title}</h3>
      <p>
        ${feat.description}
      </p>`;

    const featureCard = document.createElement("div");
    featureCard.classList.add("feature-card");
    featureCard.innerHTML = html;

    featuresContent.appendChild(featureCard);
  });
};
displayFeatures();

const displayTestimonial = () => {
  const html = `<span class="quote-icon">
    <img src="images/quote-icon.svg" alt=""/>
  </span>

  <p class="review">
    ${testimonialsLists[currentTestimonialIndex].review}
  </p>

  <div class="reviewer-info">
    <div class="image">
      <img src="${testimonialsLists[currentTestimonialIndex].image}" alt="" />
    </div>

    <div class="details">
      <div class="name">${testimonialsLists[currentTestimonialIndex].name}</div>
      <div class="designation">${testimonialsLists[currentTestimonialIndex].designation}</div>
    </div>
  </div>`;
  testimonialCard.innerHTML = html;
  testimonialCard.classList.add("active");
};

displayTestimonial();

nextBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");
  setTimeout(() => {
    currentTestimonialIndex++;
    if (currentTestimonialIndex >= testimonialsLists.length) {
      currentTestimonialIndex = 0;
    } else {
    }
    displayTestimonial();
  }, 200);
});


prevBtn.addEventListener("click", () => {
  testimonialCard.classList.remove("active");
  setTimeout(() => {
    currentTestimonialIndex--;
    if (currentTestimonialIndex < 0) {
      currentTestimonialIndex = testimonialsLists.length-1;
    } else {
    }
    displayTestimonial();
  }, 200);
});


menuIcon.addEventListener("click", () =>{
  mobileNavMenu.classList.toggle("active")
})