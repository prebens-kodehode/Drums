"use strict";

const drums = [
  { name: "Drum_1", sound: "./audio/bongo1.mp3", lowKey: "w", upKey: "W" },
  { name: "Drum_2", sound: "./audio/bongo2.mp3", lowKey: "a", upKey: "A" },
  { name: "Drum_3", sound: "./audio/bongo3.mp3", lowKey: "s", upKey: "S" },
  { name: "Drum_4", sound: "./audio/bongo4.mp3", lowKey: "d", upKey: "D" },
  { name: "Drum_5", sound: "./audio/bongo5.mp3", lowKey: "i", upKey: "I" },
  { name: "Drum_6", sound: "./audio/bongo6.wav", lowKey: "j", upKey: "J" },
  { name: "Drum_7", sound: "./audio/bongo7.wav", lowKey: "k", upKey: "K" },
  { name: "Drum_8", sound: "./audio/bongo8.wav", lowKey: "l", upKey: "L" },
];
const main = document.querySelector("main");
const wrapper = document.createElement("div");
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
    } else if (e.key === drum.upKey) {
      drumClicked(drum.name, drum.sound);
    }
  });
  wrapper.append(img);
}

const musicBtn = document.createElement("button");
musicBtn.textContent = "Play Background Music";
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

const backgroundMusic = new Audio("./audio/on-vacation.mp3");
backgroundMusic.volume = 0.2;
let isPlaying = false;

function playMusic() {
  if (!isPlaying) {
    setTimeout(() => {
      backgroundMusic.loop = true;
      backgroundMusic.play();
      isPlaying = true;
      musicBtn.classList.add("radiate");
      musicBtn.textContent = "Pause Background Music";
    }, 200);
  } else {
    setTimeout(() => {
      backgroundMusic.pause();
      isPlaying = false;
      musicBtn.classList.remove("radiate");
      musicBtn.textContent = "Play Background Music";
    }, 200);
  }
}
