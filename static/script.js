const scenes = [...document.querySelectorAll(".scene")];
const dots = [...document.querySelectorAll(".dot")];

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const index = scenes.indexOf(entry.target);
            dots.forEach((dot, i) => dot.classList.toggle("active", i === index));
        }
    });
}, { threshold: 0.45 });

scenes.forEach(scene => observer.observe(scene));

function goToScene(index) {
    scenes[index].scrollIntoView({ behavior: "smooth" });
}

function startExperience() {
    goToScene(1);
    // La música se activa con el botón para respetar las políticas del navegador.
}

/* ---------------------------------------------------
   MÚSICA DE FONDO
   Instrumental suave de Las Mañanitas, sin voz.
   --------------------------------------------------- */
const birthdayMusic = document.getElementById("birthdayMusic");
let musicPlaying = false;

async function startMusic() {
    try {
        birthdayMusic.volume = 0.24;
        await birthdayMusic.play();
        musicPlaying = true;
        document.getElementById("musicBtn").classList.add("playing");
        document.getElementById("musicText").textContent = "Música activada";
        document.getElementById("musicIcon").textContent = "♫";
    } catch (error) {
        console.log("El navegador espera una interacción para reproducir el audio.");
    }
}

function stopMusic() {
    birthdayMusic.pause();
    musicPlaying = false;
    document.getElementById("musicBtn").classList.remove("playing");
    document.getElementById("musicText").textContent = "Música suave";
    document.getElementById("musicIcon").textContent = "♪";
}

function toggleMusic() {
    if (musicPlaying) stopMusic();
    else startMusic();
}

/* Estrellitas */
const starLayer = document.getElementById("stars");
for (let i = 0; i < 55; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.textContent = Math.random() > .5 ? "✦" : "·";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.fontSize = (5 + Math.random() * 12) + "px";
    star.style.animationDelay = Math.random() * 4 + "s";
    starLayer.appendChild(star);
}

/* Partículas */
const particleLayer = document.getElementById("particles");
for (let i = 0; i < 18; i++) {
    const p = document.createElement("span");
    p.className = "particle";
    const size = 3 + Math.random() * 8;
    p.style.width = size + "px";
    p.style.height = size + "px";
    p.style.left = Math.random() * 100 + "%";
    p.style.top = Math.random() * 100 + "%";
    p.style.animationDelay = Math.random() * 9 + "s";
    particleLayer.appendChild(p);
}

function createHearts(amount = 20) {
    const layer = document.getElementById("hearts");
    const icons = ["💙", "🩵", "♡", "✨"];

    for (let i = 0; i < amount; i++) {
        const h = document.createElement("span");
        h.className = "floating-heart";
        h.textContent = icons[Math.floor(Math.random() * icons.length)];
        h.style.left = Math.random() * 100 + "%";
        h.style.setProperty("--x", (Math.random() * 180 - 90) + "px");
        h.style.animationDelay = Math.random() * .8 + "s";
        layer.appendChild(h);
        setTimeout(() => h.remove(), 3800);
    }
}

function celebrate() {
    createHearts(40);

    const layer = document.getElementById("hearts");
    const colors = ["#76a7db", "#b8d5f3", "#edcada", "#d9ccef", "#efd9a6"];

    for (let i = 0; i < 100; i++) {
        const c = document.createElement("span");
        c.className = "confetti";
        c.style.left = Math.random() * 100 + "%";
        c.style.background = colors[Math.floor(Math.random() * colors.length)];
        c.style.animationDelay = Math.random() * 1.5 + "s";
        layer.appendChild(c);
        setTimeout(() => c.remove(), 5500);
    }

    if (!musicPlaying) startMusic();
}

window.addEventListener("load", () => {
    setTimeout(() => scenes[0].classList.add("visible"), 200);
    setTimeout(() => createHearts(8), 900);
});
