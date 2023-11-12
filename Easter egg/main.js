//confettie effect
let egg_images = ["img/food.svg"];

let egg_count = 100;

let framerate = 60;

let anim_interval = undefined;
var konami_code = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
  " ",
];
var code_index = 0;

document.addEventListener("keydown", keydown);

//modal effect
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

function keydown(e) {
  if (e.key == konami_code[code_index]) {
    code_index += 1;
  } else {
    code_index = 0;
  }
  if (code_index == konami_code.length) {
    code_index = 0;
    deploy_eggs();

    if (modal == null) return;
    modal.classList.add("active");
    overlay.classList.add("active");
  }
}

function rand(min, max) {
  return Math.random() * (max - min) + min;
}

function update() {
  let rotate = 2;
  let fall = 0.5;
  let eggs = document.querySelectorAll("div.easter_egg");
  if (eggs.length == 0) {
    clearInterval(anim_interval);
  }
  for (const egg of eggs) {
    egg.egg_rot_x += rotate * egg.egg_factor_x;
    egg.egg_rot_y += rotate * egg.egg_factor_y;
    egg.egg_rot_z += rotate * egg.egg_factor_z;
    egg.egg_fall += fall * egg.egg_factor_fall;

    egg.style.setProperty("--rotx", `${egg.egg_rot_x}deg`);
    egg.style.setProperty("--roty", `${egg.egg_rot_x}deg`);
    egg.style.setProperty("--rotz", `${egg.egg_rot_x}deg`);
    egg.style.setProperty("top", `${egg.egg_fall}vh`);

    if (egg.egg_fall > 110) {
      egg.parentElement.removeChild(egg);
    }
  }
}

function deploy_eggs() {
  console.log("Deploying eggs!");
  for (let i = 0; i < egg_count; i++) {
    deploy_egg();
  }
  clearInterval(anim_interval);
  anim_interval = setInterval(update, 1000 / framerate);
}

function deploy_egg() {
  let egg = document.createElement("div");
  egg.className = "easter_egg";
  egg.egg_rot_x = 0;
  egg.egg_rot_y = 0;
  egg.egg_rot_z = 0;

  egg.style.left = `${rand(-2, 100)}vw`;
  egg.style.setProperty("--scale", `${rand(0.5, 1.5)}`);
  egg.egg_fall = rand(-120, -10);
  egg.egg_factor_x = rand(-1, 1);
  egg.egg_factor_y = rand(-1, 1);
  egg.egg_factor_z = rand(-1, 1);
  egg.egg_factor_fall = rand(0.5, 1.2);

  let index = Math.floor(rand(0, egg_images.length));
  egg.style.backgroundImage = `url('${egg_images[index]}')`;

  document.body.appendChild(egg);
}

openModalButtons.forEach((deploy_egg) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

//function openModal(modal) {
//  if (modal == null) return;
//  modal.classList.add("active");
//overlay.classList.add("active");
//}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}
