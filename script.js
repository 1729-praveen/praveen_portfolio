/* ===================== TYPING EFFECT ===================== */
const roles = [
    "Java Developer",
    "Problem Solver",
    "Continuous Learner"
];

const typingElement = document.getElementById("typing");
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typingEffect() {
    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent = currentRole.substring(0, charIndex++);
    } else {
        typingElement.textContent = currentRole.substring(0, charIndex--);
    }

    let speed = isDeleting ? 50 : 80;

    if (!isDeleting && charIndex === currentRole.length + 1) {
        speed = 1200;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 400;
    }

    setTimeout(typingEffect, speed);
}

typingEffect();

/* ===================== AMBIENT ORB COLORS ===================== */
const glowColors = [
    "rgba(125,211,252,0.6)",
    "rgba(34,197,94,0.6)",
    "rgba(236,72,153,0.6)",
    "rgba(167,139,250,0.6)"
];

const orbs = document.querySelectorAll(".orb");

function randomizeOrbs() {
    orbs.forEach(orb => {
        const color = glowColors[Math.floor(Math.random() * glowColors.length)];
        orb.style.background = color;
    });
}

// change glow every 6 seconds
setInterval(randomizeOrbs, 6000);
randomizeOrbs();

/* ===================== MOUSE INTERACTION (SUBTLE PARALLAX) ===================== */
document.addEventListener("mousemove", e => {
    const x = (e.clientX / window.innerWidth - 0.5) * 30;
    const y = (e.clientY / window.innerHeight - 0.5) * 30;

    orbs.forEach((orb, index) => {
        orb.style.transform = `translate(${x * (index + 1)}px, ${y * (index + 1)}px)`;
    });
});

/* ===================== FRIENDLY INTERACTION MESSAGE ===================== */
function sayHello() {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.textContent = "Thanks for visiting my portfolio 😊";

    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 100);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}
