// ============================
// MENU MOBILE (SE EXISTIR)
// ============================

const menuBtn = document.querySelector(".menu-mobile");
const navbar = document.querySelector(".navbar");

if (menuBtn && navbar) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });
}

// Fecha menu ao clicar em link
const navLinks = document.querySelectorAll(".navbar a");

if (navLinks && navbar) {
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}


// ============================
// HEADER FIXO E SEMPRE ROSA
// ============================

const header = document.querySelector(".header");

if (header) {
    window.addEventListener("scroll", () => {
        header.style.background = "#F8E8EE";
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.08)";
    });
}


// ============================
// SCROLL SUAVE (SE HOUVER LINKS #)
// ============================

const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ============================
// ANIMAÇÃO AO SCROLL
// ============================

const revealElements = document.querySelectorAll(
    ".feature-card, .product-card, .testimonial-card, .about-text, .about-image"
);

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    revealElements.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ============================
// BOTÃO VOLTAR AO TOPO
// ============================

const topButton = document.createElement("button");
topButton.innerHTML = "↑";
topButton.id = "backToTop";

document.body.appendChild(topButton);

topButton.style.cssText = `
position: fixed;
bottom: 100px;
right: 25px;
width: 50px;
height: 50px;
border-radius: 50%;
border: none;
background: #7A3E2E;
color: #fff;
font-size: 20px;
cursor: pointer;
display: none;
z-index: 999;
box-shadow: 0 5px 15px rgba(0,0,0,.2);
`;

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
});

topButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// ============================
// ANIMAÇÃO DO TÍTULO PRINCIPAL
// ============================

const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
    heroTitle.style.opacity = "0";
    heroTitle.style.transform = "translateY(30px)";

    setTimeout(() => {
        heroTitle.style.transition = "1s ease";
        heroTitle.style.opacity = "1";
        heroTitle.style.transform = "translateY(0)";
    }, 300);
}