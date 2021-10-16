const imgs = document.querySelectorAll(".trending img");
const dots = document.querySelectorAll(".dot i");
const leftArrow = document.querySelector(".arrow-left");
const rightArrow = document.querySelector(".arrow-right");

let currentIndex = 0;
let time = 5000; // default time for auto slideshow

const defClass = (startPos, index) => {
  for (let i = startPos; i < imgs.length; i++) {
    imgs[i].style.display = "none";
    dots[i].classList.remove("fa-dot-circle");
    dots[i].classList.add("fa-circle");
  }
  imgs[index].style.display = "block";
  dots[index].classList.add("fa-dot-circle");
};

defClass(1, 0);

leftArrow.addEventListener("click", function(){
  currentIndex <= 0 ? currentIndex = imgs.length-1 : currentIndex--;
  defClass(0, currentIndex);
});

rightArrow.addEventListener("click", function(){
  currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
  defClass(0, currentIndex);
});

const startAutoSlide = () => {
  setInterval(() => {
    currentIndex >= imgs.length-1 ? currentIndex = 0 : currentIndex++;
    defClass(0, currentIndex);
  }, time);
};

startAutoSlide(); // Start the slideshow


const modal = document.querySelector("#modal");
const yourName = document.querySelector("#your-name");
const gardenOfWords = document.querySelector("#garden-of-words");
const helloWorld = document.querySelector("#hello-world");
const fireworks = document.querySelector("#fireworks");
const whiskerAway = document.querySelector("#whisker-away");
const ponyo = document.querySelector("#ponyo");
const movingCastle = document.querySelector("#moving-castle");
const totoro = document.querySelector("#totoro");
const kimetsu = document.querySelector("#kimetsu");
const fate = document.querySelector("#fate");
const nogame = document.querySelector("#no-game");
const hero = document.querySelector("#hero");

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

yourName.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xU47nhruN-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

gardenOfWords.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/jR5szRoUUPc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

helloWorld.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/shoWFRnNoWw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

fireworks.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/KG770hOuT2k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

whiskerAway.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/aXc9DVfLTGo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

ponyo.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/bskgNOXbdiE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

movingCastle.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/iwROgK94zcM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

totoro.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/92a7Hj0ijLs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});

kimetsu.addEventListener("click", () => {
    modal.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ATJYac_dORw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    modal.style.display = "block";
});


fate.addEventListener("click", () => {
    modal.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/0jG5DuVvs5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    modal.style.display = "block";
});

nogame.addEventListener("click", () => {
    modal.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/MQkYCxyJGEU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    modal.style.display = "block";
});

hero.addEventListener("click", () => {
    modal.innerHTML = '<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/QcameZFfPJk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    modal.style.display = "block";
});


