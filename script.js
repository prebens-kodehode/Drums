"use strict";

const drums = [
  { name: "Drum_1", sound: "./audio/bongo1.mp3", lowKey: "w" },
  { name: "Drum_2", sound: "./audio/bongo2.mp3", lowKey: "a" },
  { name: "Drum_3", sound: "./audio/bongo3.mp3", lowKey: "s" },
  { name: "Drum_4", sound: "./audio/bongo4.mp3", lowKey: "d" },
  { name: "Drum_5", sound: "./audio/bongo5.mp3", lowKey: "i" },
  { name: "Drum_6", sound: "./audio/bongo6.wav", lowKey: "j" },
  { name: "Drum_7", sound: "./audio/bongo7.wav", lowKey: "k" },
  { name: "Drum_8", sound: "./audio/bongo8.wav", lowKey: "l" },
];
const main = document.querySelector("main");
const wrapper = document.createElement("div");
const musicBtn = document.createElement("button");
const backgroundMusic = new Audio("./audio/on-vacation.mp3");
wrapper.classList.add("wrapper");
main.append(wrapper);

for (let drum of drums) {
  const img = document.createElement("img");
  img.src = `./images/${drum.name}.png`;
  img.classList.add(drum.name);
  img.addEventListener("click", () => {
    drumClicked(drum.name, drum.sound);
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === drum.lowKey) {
      drumClicked(drum.name, drum.sound);
    } else if (e.key === drum.lowKey.toUpperCase()) {
      drumClicked(drum.name, drum.sound);
    }
  });
  wrapper.append(img);
}

musicBtn.textContent = "Play Music";
musicBtn.classList.add("play-btn");
musicBtn.addEventListener("click", playMusic);
main.append(musicBtn);

function drumClicked(name, sound) {
  const drum = document.querySelector(`.${name}`);
  const drumSound = new Audio(sound);
  drumSound.play();
  drum.classList.add("bounce");
  setTimeout(() => {
    drum.classList.remove("bounce");
  }, 150);
}

backgroundMusic.volume = 0.2;
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    setTimeout(() => {
      backgroundMusic.loop = true;
      backgroundMusic.play();
      isPlaying = true;
      musicBtn.classList.add("radiate");
      musicBtn.textContent = "Pause Music";
    }, 200);
  } else {
    setTimeout(() => {
      backgroundMusic.pause();
      isPlaying = false;
      musicBtn.classList.remove("radiate");
      musicBtn.textContent = "Play Music";
    }, 200);
  }
}
