// ==================================================
// DATA
// ==================================================

// WORKS (SLIDE 2)
const worksData = [
  { img: "images/HUT_RI.jpg", category: "design" },
  { img: "images/MENU.jpg", category: "design" },
  { img: "images/Artboard 2.png", category: "design" },
  { img: "images/Artboard 4.png", category: "design" },
  { img: "images/Artboard 1.png", category: "design" },
  { img: "images/ALTECH.png", category: "design" },
  { img: "images/Rampart One (1).png", category: "design" },
  { img: "images/sosmed 2jpg.png", category: "design" },
  

  { img: "images/MG_9487.jpg", category: "photo" },
  { img: "images/_MG_9575.jpg", category: "photo" },
  { img: "images/_MG_9567.jpg", category: "photo" },
  { img: "images/_MG_9661.jpg", category: "photo" },
  { img: "images/IMG_9777.jpg", category: "photo" },
  { img: "images/IMG_9805.jpg", category: "photo" },
  { img: "images/_MG_9440.jpg", category: "photo" },
  { img: "images/IMG_9860.jpg", category: "photo" },
  { img: "images/IMG_9838.jpg", category: "photo" },
  { img: "images/IMG_9913.jpg", category: "photo" }
];

// PROJECT SLIDER (SLIDE 3)
const projectData = [
  { img: "project-1.jpg" },
  { img: "project-2.jpg" },
  { img: "project-3.jpg" },
  { img: "project-4.jpg" }
];

// ==================================================
// RENDER WORKS GRID
// ==================================================
const worksGrid = document.getElementById("worksGrid");

if (worksGrid) {
  worksData.forEach(item => {
    const card = document.createElement("div");
    card.className = `work-card ${item.category}`;
    card.innerHTML = `<img src="${item.img}" alt="">`;
    worksGrid.appendChild(card);
  });
}

// ==================================================
// RENDER PROJECT SLIDER
// ==================================================
const projectSlider = document.getElementById("projectSlider");

if (projectSlider) {
  projectData.forEach(item => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `<img src="${item.img}" alt="">`;
    projectSlider.appendChild(card);
  });
}

// ==================================================
// FILTER (WORKS ONLY)
// ==================================================
const buttons = document.querySelectorAll(".filter button");
const projectSection = document.getElementById("project");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    // ACTIVE STATE
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;

    // FILTER WORKS GRID
    if (worksGrid) {
      worksGrid.querySelectorAll(".work-card").forEach(card => {
        if (filter === "all" || card.classList.contains(filter)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    // PROJECT SLIDER HANYA DI ALL
    if (projectSection) {
      projectSection.style.display =
        filter === "all" ? "block" : "none";
    }
  });
});
