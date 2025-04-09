const leftButton = document.querySelector(".left");
const rightButton = document.querySelector(".right");
const cardCarousel = document.querySelector(".card-carousel");
// if (cardCarousel) {
//   cardCarousel.textContent = "Check this path out";
// }
const data: string[] = ["Father", "Mother", "children"];

//TODO:
//CREATE A CARD WITH TWO BUTTONS LEFT AND RIGHT
// DISPLAY THE FIRST DATA ON PAGE LOAD
// LEFT BUTTON SHOULD SHOW A DIFFERENT CARD AND RIGHT BUTTON SHOULD SHOW A NEW CARD
// WHEN IT REACHES THE END IT SHOULD START AGAIN.

leftButton?.addEventListener("click", changeCard(data));
rightButton?.addEventListener("click", (event) => {
  alert("button right");
});

function changeCard(arr) {
  let indexNum = 0;
  console.log(indexNum);
  arr.map((item, index) => {
    const newCard = document.createElement("h1");
    if (cardCarousel && cardCarousel.textContent) {
      newCard.innerHTML = `<h1>${arr[indexNum]}</h1>`;
      cardCarousel.replaceChildren(newCard);
    } else {
      cardCarousel!.textContent = arr[0];
    }
    return () => {
      indexNum++;
      console.log(indexNum);
    };
  });
  //return alert("function hooked");
}
