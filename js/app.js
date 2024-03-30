const btns = document.querySelectorAll(".btn");

let currentEl = null;
let counter = 0;
let place;

function genateNumber() {
  return Math.ceil(Math.random() * btns.length);
}

// function startGame() {
//   const letters = [
//     "apple",
//     "orange",
//     "banana",
//     "melon",
//     "olma",
//     "apelsin",
//     "banan",
//     "qovun",
//   ];
//   let result;

//   letters[genateNumber()] = result;

//   btns.forEach((btn) => {
//     btn.textContent = `${result}`;
//     console.log(result);
//   });
// }

// startGame();

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (currentEl) {
      if (
        currentEl != btn &&
        ((currentEl.textContent == "apple" && btn.textContent == "olma") ||
          (currentEl.textContent == "orange" && btn.textContent == "apelsin") ||
          (currentEl.textContent == "banana" && btn.textContent == "banan") ||
          (currentEl.textContent == "melon" && btn.textContent == "qovun") ||
          (currentEl.textContent == "olma" && btn.textContent == "apple") ||
          (currentEl.textContent == "apelsin" && btn.textContent == "orange") ||
          (currentEl.textContent == "banan" && btn.textContent == "banana") ||
          (currentEl.textContent == "qovun" && btn.textContent == "melon"))
      ) {
        btn.style.background = "red";
        counter++;
      } else {
        currentEl.style.background = "chocolate";
        // alert("Nooooooo !");
      }
      currentEl = null;
    } else {
      btn.style.background = "red";
      currentEl = btn;
    }
  });
});
