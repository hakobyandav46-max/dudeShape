const button = document.querySelector(".burger")
const nav = document.querySelector(".nav")
// const dialogButton = document.querySelector(".dialog-button")
// const dialog = document.querySelector(".dialog")
// const dialogClose = document.querySelector(".dialog__close")
// const accordion = document.querySelector(".accordion")
// const accordionItemContent = document.querySelectorAll(".accordion__item-content")

// accordion.onclick = (e) => {
//     if (e.target.closest(".accordion__button")) {
//         accordionItemContent.forEach(el => {
//             el.classList.remove("accordion__item-content_active")
//         })
//         e.target.closest(".accordion__button").classList.add("accordion__button_active")
//         e.target.closest(".accordion__button").nextElementSibling.classList.add("accordion__item-content_active")
//     }
// }

// dialogButton.onclick = () => {
//     dialog.open = true
// }
// dialogClose.onclick = () => {
//     dialog.open = false
// }

button.onclick = () => {
    document.body.classList.toggle("scroll-lock")
    button.classList.toggle("burger_active")
    nav.classList.toggle("nav_active")
}
nav.onclick = (e) => {
    if (e.target.closest(".nav__link")) {
        document.body.classList.remove("scroll-lock")
        button.classList.remove("burger_active")
        nav.classList.remove("nav_active")
    }
}

const btn = document.querySelector(".button-up");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const chair = document.querySelector(".hero__chair");
    const info = document.querySelector(".hero__info");
    chair.classList.add("active");
    info.classList.add("active");
});

document.addEventListener("DOMContentLoaded", () => {
    const targets = document.querySelectorAll(
        ".companies__title, .companies__img"
    );

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    }, {
        threshold: 0.2
    });

    targets.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".about__image, .about__about");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".all__about-img, .all__about-list");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".our__tmbushka-img, .our__info, .our__tmbushka-img2"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                }
            });
        },
        { threshold: 0.3 }
    );

    elements.forEach(el => observer.observe(el));
});



const imgObserver = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            el.target.src = el.target.getAttribute("data-src")
        }
    })
}, {
    rootMargin: "0px 0px 100px 0px"
})

imgs.forEach(el => imgObserver.observe(el))

document.body.style.paddingTop = document.querySelector("header").offsetHeight + "px"

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(el => {
        if (el.isIntersecting) {
            const links = document.querySelectorAll(".nav__link");
            links.forEach(item => {
                item.classList.remove("nav__link_active")
            })
            const activeLink = document.querySelector(`[href = "#${el.target.id}"]`);
            activeLink.classList.add("nav__link_active");
        }
    })
}, {
    threshold: 0.5,
})

section.forEach(el => sectionObserver.observe(el))