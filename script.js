const drums = [
  { item: "monkey" },
  { item: "monkey2" },
  { item: "monkey3" },
  { item: "monkey4" },
  { item: "monkey5" },
  { item: "monkey6" },
  { item: "monkey7" },
  { item: "monkey8" },
];
const main = document.createElement("main");
document.body.append(main);

for (let drum of drums) {
  const img = document.createElement("img");
  img.src =
    "./images/49-499552_mixed-clip-transparent-background-animal-clipart.png";

    main.append(img)
}
