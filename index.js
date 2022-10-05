const input = document.querySelector("input");
const button = document.querySelector("button");
const boxes = document.querySelector(".boxes");
const inputSection = document.querySelector(".inputSection");
const ul = document.createElement("ul");

const randomColor = function () {
  const hexValues = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];

  let hex = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * hexValues.length);
    hex += hexValues[index];
    // console.log(random);
  }
  //   console.log(hex);
  return hex;
};
// randomColor();

function createItem(color) {
  //   let li = "";
  //   li.innerHTML = "";
  for (let i = 0; i < input.value; i++) {
    const li = `<li>
    
    <div style = 'background:${color()}'>
    <p  class = 'cross'>x</p>
    </div>
    </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  }
  boxes.append(ul);
  button.addEventListener("click", () => {
    for (let i = 0; i < input.value; i++) {
      const li = `<li>
    
    <div style = 'background:${color()}'>
    <p  class = 'cross'>x</p>
    </div>
    </li>`;
      ul.insertAdjacentHTML("beforeend", li);
    }
    boxes.append(ul);
  });
  //   const li1 = document.createElement("li");
  //   const li2 = document.createElement("li");
  //   const li3 = document.createElement("li");
  //   const div1 = document.createElement("div");
  //   const div2 = document.createElement("div");
  //   const div3 = document.createElement("div");
  //   //   console.log(color);
  //   const cross1 = document.createElement("p");
  //   cross1.textContent = "x";

  //   cross1.classList.add("cross");
  //   const cross2 = document.createElement("p");
  //   cross2.textContent = "x";
  //   cross2.classList.add("cross");
  //   const cross3 = document.createElement("p");
  //   cross3.textContent = "x";
  //   cross3.classList.add("cross");

  //   div1.append(cross1);
  //   div2.append(cross2);
  //   div3.append(cross3);

  //   div1.style.backgroundColor = color();
  //   div2.style.backgroundColor = color();
  //   div3.style.backgroundColor = color();

  //   li1.append(div1);
  //   li2.append(div2);
  //   li3.append(div3);
  //   ul.append(li1, li2, li3);
}

// createItem(randomColor);

function removeItem() {
  //   const c = document.querySelector(".cross");

  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      console.log(e.target.tagName);
      e.target.closest("li").remove();
    }
  });
  //   cross.forEach((item) => {
  //     console.log(item);
  //   });
  //   console.log(cross);
}

removeItem();

function init() {
  createItem(randomColor);
  //   createItem(randomColor);
  //   createItem(randomColor);
}

init();
