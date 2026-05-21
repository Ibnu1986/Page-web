/* PREMIUM LOADER */

window.addEventListener("load",()=>{

  const loader = document.getElementById("loader");

  setTimeout(()=>{

    loader.style.opacity = "0";

    setTimeout(()=>{

      loader.style.display = "none";

    },1000);

  },3000);

});

/* MUSIC */
const music = document.getElementById("bgMusic");

let isPlaying = false;

function toggleMusic(){

  if(!music) return;

  if(isPlaying){

    music.pause();
    isPlaying = false;

  }else{

    music.play();
    isPlaying = true;

  }

}

/* DARK MODE */
function toggleDark(){

  document.body.classList.toggle("dark");

}

/* SCROLL TOP */
function scrollToTop(){

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

}

/* MOBILE MENU */
function toggleMenu(){

  const nav = document.querySelector("nav");

  if(nav){
    nav.classList.toggle("active");
  }

}

/* TYPING EFFECT */

const typing = document.getElementById("typing");

if(typing){

  const text = [
    "Build Your",
    "Best Version",
    "With Creativity"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type(){

    if(count === text.length){
      count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if(letter.length === currentText.length){

      count++;
      index = 0;

      setTimeout(type,1000);

    }else{

      setTimeout(type,120);

    }

  })();

}

/* SCROLL REVEAL */

const observer = new IntersectionObserver((entries)=>{

  entries.forEach((entry)=>{

    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }

  });

});

const hiddenElements = document.querySelectorAll(
  ".section, .hero-text, .hero-image, .skill-card"
);

hiddenElements.forEach((el)=>{

  el.classList.add("hidden");

  observer.observe(el);

});/* PARTICLES */

const particles = document.getElementById("particles");

if(particles){

  for(let i=0;i<35;i++){

    let particle = document.createElement("div");

    particle.classList.add("particle");

    particle.style.left = Math.random()*100+"%";

    particle.style.animationDuration =
      (5 + Math.random()*10)+"s";

    particle.style.animationDelay =
      Math.random()*5+"s";

    particle.style.width =
      particle.style.height =
      (4 + Math.random()*10)+"px";

    particles.appendChild(particle);

  }

}/* CURSOR GLOW */

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{

  if(glow){

    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";

  }

});/* COUNTER */

const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{

  counter.innerText = "0";

  const updateCounter = ()=>{

    const target = +counter.getAttribute("data-target");

    const c = +counter.innerText;

    const increment = target / 100;

    if(c < target){

      counter.innerText =
        `${Math.ceil(c + increment)}`;

      setTimeout(updateCounter,30);

    }else{

      counter.innerText = target;

    }

  };

  updateCounter();

});/* AUTO YEAR */

const year = document.getElementById("year");

if(year){

  year.textContent = new Date().getFullYear();

}/* SCROLL PROGRESS */

window.addEventListener("scroll",()=>{

  const scrollTop =
    document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled =
    (scrollTop / height) * 100;

  document.getElementById(
    "progress-bar"
  ).style.width = scrolled + "%";

});/* ACTIVE NAVBAR */

const sections =
  document.querySelectorAll("section");

const navLinks =
  document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

  let current = "";

  sections.forEach((section)=>{

    const sectionTop =
      section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach((link)=>{

    link.classList.remove("active");

    if(
      link.getAttribute("href")
      === "#" + current
    ){

      link.classList.add("active");

    }

  });

});/* PORTFOLIO MODAL */

function openModal(card){

  const modal =
    document.getElementById(
      "portfolioModal"
    );

  const modalImage =
    document.getElementById(
      "modalImage"
    );

  const img =
    card.querySelector("img");

  modal.style.display = "flex";

  modalImage.src = img.src;

}

function closeModal(){

  document.getElementById(
    "portfolioModal"
  ).style.display = "none";

}