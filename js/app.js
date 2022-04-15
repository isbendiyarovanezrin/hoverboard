"use strict";

const container = document.getElementById("container");
const music = document.getElementById("music");
const squares = 8000;
const colors = [
  "#FFBF00",
  "#6495ED",
  "#17A589",
  "#F379A3",
  "#6FC51B",
  "#874C99",
  "#008080",
  "#00FA9A",
  "#6A5ACD",
  "#00CED1",
  "#E68959",
  "#02A676",
  "#FF9176",
  "#800080",
  "#6BBAB5",
  "#7B68EE",
  "#A6C4E0",
  "#DB7093",
  "#3CB371",
  "#CB4335",
  "#9370DB",
  "#D99197",
  "#239B56",
  "#1A5276",
  "#D26363",
  "#40E0D0",
  "#EDCA47",
  "#D95043",
  "#800080",
  "#CCB2B3",
  "#FA87B1",
  "#00FF7F",
  "#483D8B",
  "#F2B134",
  "#FF6138",
  "#79BD8F",
  "#86A65B",
  "#FF8135",
  "#F3A7C6",
  "#59CF8D",
  "#9B59B6",
  "#E74C3C",
  "#DA70D6",
  "#2BB27B",
  "#CD5C5C",
];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const setHover = (square) => {
  music.play();
  const color = getRandomColor();
  square.style.backgroundColor = color;
  square.style.boxShadow = `0 0 0.2rem ${color}, 0 0 1rem ${color}`;
};

const removeHover = (square) => {
  square.style.backgroundColor = "#1d1d1d";
  square.style.boxShadow = "0 0 0.2rem #000000f5";
};

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => {
    setHover(square);
  });
  square.addEventListener("mouseout", () => {
    removeHover(square);
  });
  container.appendChild(square);
}
