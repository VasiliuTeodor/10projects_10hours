let timein;
let timeout;

// Overlay cards when hover
function onCardHover() {
  const cards = document.querySelectorAll("[data-card-container]");

  cards.forEach((card) => {
    card.addEventListener("mouseover", () => (card.style.zIndex = "11"));
    card.addEventListener("mouseout", () => (card.style.zIndex = "10"));
  });
}
onCardHover();

// Show blinking guy after set timeout

window.addEventListener("mousemove", showBlinkingGuy);

class BlinkingGuy {
  #img = document.createElement("img");

  createImg() {
    const imgSrcValue = "./images/blinking_guy.gif";

    this.#img.setAttribute("src", imgSrcValue);
    this.#img.classList.add("blinking-guy-img", "active");

    document.querySelector("[data-blinking-guy-container]").append(this.#img);
  }

  removeImg() {
    this.#img.classList.remove("active");
    this.#img.remove();
  }
}
const showGuy = new BlinkingGuy();

function showBlinkingGuy() {
  timein ? showGuy.removeImg() : console.log("nothing");

  clearTimeout(timein);
  clearTimeout(timeout);

  timeout = setTimeout(() => {
    showGuy.removeImg();
  }, 310000);

  timein = setTimeout(function () {
    showGuy.createImg();
  }, 300000);
}

// Plus info on cards

// const cardInfo = [
//   {
//     js: [
//       {
//         id: "1-js",
//         desc: "Beginner",
//         btn: "Go",
//       },
//       {
//         id: "2-js",
//         desc: "Intermediate",
//         btn: "Go",
//       },
//       {
//         id: "3-js",
//         desc: "Advanced",
//         btn: "Go",
//       },
//     ],
//   },
//   { php: [{}] },
//   { css: [{}] },
// ];
