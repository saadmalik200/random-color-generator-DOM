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
  }

  return hex;
};

function createItem(color) {
  for (let i = 0; i < input.value; i++) {
    const newClr = color();
    console.log(newClr);
    const li = `<li>
    
    <div style = 'background:${newClr}'>${newClr}
    <p  class = 'cross'>x</p>
    </div>
    </li>`;
    ul.insertAdjacentHTML("beforeend", li);
  }
  boxes.append(ul);

  button.addEventListener("click", () => {
    for (let i = 0; i < input.value; i++) {
      const newClr = color();
      console.log(newClr);
      const li = `<li>
    
    <div style = 'background:${newClr}'>${newClr}
    <p  class = 'cross'>x</p>
    </div>
    </li>`;
      ul.insertAdjacentHTML("beforeend", li);
    }
    boxes.append(ul);
  });
}

function removeItem() {
  ul.addEventListener("click", (e) => {
    if (e.target.tagName === "P") {
      console.log(e.target.tagName);
      e.target.closest("li").remove();
    }
  });
}

removeItem();

function init() {
  createItem(randomColor);
}

init();
