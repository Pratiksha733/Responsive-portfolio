// ================= MOBILE MENU =================

let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
};

// ================= CLOSE MENU WHEN LINK IS CLICKED =================

document.querySelectorAll(".navbar a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("fa-xmark");
        navbar.classList.remove("active");
    });
});

// ================= ACTIVE NAVIGATION =================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {

    sections.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector(
                'header nav a[href="#' + id + '"]'
            );

            if (activeLink) {
                activeLink.classList.add("active");
            }

        }

    });

    // Close menu while scrolling
    menu.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

// ================= SMOOTH BUTTON EFFECT =================

document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "translateY(-5px)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "translateY(0px)";

    });

});

// ================= SCROLL TO TOP BUTTON =================

// Create Button

const topBtn = document.createElement("button");

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

// Style Button

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#38bdf8";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "20px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 0 15px #38bdf8";
topBtn.style.zIndex = "999";

// Show Button

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// Scroll Top

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

};