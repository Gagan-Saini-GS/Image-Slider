const allImages = document.querySelectorAll("img");
const n = allImages.length;

let currIndex = 0;

allImages.forEach((img, index) => {
  if (img.classList.value === "active-img") {
    currIndex = index;
  }
});

const prevBTN = document.querySelector(".prev-btn");
const nextBTN = document.querySelector(".next-btn");

prevBTN.addEventListener("click", () => {
  allImages[currIndex].classList.remove("active-img");

  if (currIndex === 0) currIndex = n - 1;
  else currIndex -= 1;

  allImages[currIndex].classList.add("active-img");
});

nextBTN.addEventListener("click", () => {
  allImages[currIndex].classList.remove("active-img");

  if (currIndex === n - 1) currIndex = 0;
  else currIndex += 1;

  allImages[currIndex].classList.add("active-img");
});
