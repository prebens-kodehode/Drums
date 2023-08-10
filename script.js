"use strict";

const drums = [
  { name: "Drum_1", sound: "./audio/bongo1.mp3", lowKey: "w" },
  { name: "Drum_2", sound: "./audio/bongo2.mp3", lowKey: "a" },
  { name: "Drum_3", sound: "./audio/bongo3.mp3", lowKey: "s" },
  { name: "Drum_4", sound: "./audio/bongo4.mp3", lowKey: "d" },
  { name: "Drum_5", sound: "./audio/bongo5.mp3", lowKey: "i" },
  { name: "Drum_6", sound: "./audio/bongo6.mp3", lowKey: "j" },
  { name: "Drum_7", sound: "./audio/bongo7.mp3", lowKey: "k" },
  { name: "Drum_8", sound: "./audio/bongo8.mp3", lowKey: "l" },
];

// element variables
const main = document.querySelector("main");
const wrapper = document.createElement("div");
const musicBtn = document.createElement("button");
const backgroundMusic = new Audio("./audio/on-vacation.mp3");

// append wrapper to document
wrapper.classList.add("wrapper");
main.append(wrapper);

// creates drums with content and add event listeners
for (let drum of drums) {
  const img = document.createElement("img");
  img.src = `./images/${drum.name}.png`;
  img.alt = "Tribal Drum";
  img.classList.add(drum.name);
  img.addEventListener("click", () => {
    drumClicked(drum.name, drum.sound);
  });
  wrapper.append(img);
}

window.addEventListener("keydown", (e) => {
  //  this didn't work
  //e.key === drum.lowKey || drum.lowKey.toUpperCase()
  const lowerCase = drums.find((drum) => e.key === drum.lowKey);
  if (lowerCase) {
    drumClicked(lowerCase.name, lowerCase.sound);
  }
  const upperCase = drums.find((drum) => e.key === drum.lowKey.toUpperCase());
  if (upperCase) {
    drumClicked(upperCase.name, upperCase.sound);
  }
});

//adds content and appends Play Music button
musicBtn.textContent = "Play Music";
musicBtn.classList.add("play-btn");
musicBtn.addEventListener("click", playMusic);
main.append(musicBtn);

// plays corresponding sound
function drumClicked(name, sound) {
  const drum = document.querySelector(`.${name}`);
  const drumSound = new Audio(sound);
  drumSound.play();
  drum.classList.add("bounce");
  setTimeout(() => {
    drum.classList.remove("bounce");
  }, 150);
}

backgroundMusic.volume = 0.25;

// play/pause music
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    backgroundMusic.loop = true;
    backgroundMusic.play();
    isPlaying = true;
    musicBtn.classList.add("radiate");
    musicBtn.textContent = "Pause Music";
  } else {
    backgroundMusic.pause();
    isPlaying = false;
    musicBtn.classList.remove("radiate");
    musicBtn.textContent = "Play Music";
  }
}
