
// ========== NAV TOGGLE ==========
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("nav--open");
        navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    // Close nav on link click (mobile)
    nav.querySelectorAll(".nav__link").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("nav--open");
            navToggle.setAttribute("aria-expanded", "false");
        });
    });
}

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav__link");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = entry.target.getAttribute("id");

            navLinks.forEach((link) => {
                link.classList.toggle(
                    "nav__link--active",
                    link.getAttribute("href") === `#${id}`
                );
            });
        });
    },
    {
        root: null,
        threshold: 0.4,
    }
);

sections.forEach((section) => observer.observe(section));

// ========== BMI CALCULATOR ==========
const bmiForm = document.getElementById("bmiForm");
const bmiResult = document.getElementById("bmiResult");

if (bmiForm && bmiResult) {
    bmiForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const heightInput = /** @type {HTMLInputElement} */ (
            document.getElementById("height")
        );
        const weightInput = /** @type {HTMLInputElement} */ (
            document.getElementById("weight")
        );

        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (!height || !weight || height <= 0 || weight <= 0) {
            bmiResult.textContent = "Please enter a valid height and weight.";
            return;
        }

        const heightMeters = height / 100;
        const bmi = weight / (heightMeters * heightMeters);
        const roundedBmi = bmi.toFixed(1);

        let category = "";

        if (bmi < 18.5) {
            category = "Underweight";
        } else if (bmi < 25) {
            category = "Normal weight";
        } else if (bmi < 30) {
            category = "Overweight";
        } else {
            category = "Obesity";
        }

        bmiResult.innerHTML = `
      <strong>Your BMI:</strong> ${roundedBmi}<br/>
      <strong>Category:</strong> ${category}<br/><br/>
      <small>
        BMI is only a rough estimate and doesn’t account for muscle mass or body composition.
        For a full assessment, talk to one of our coaches.
      </small>
    `;
    });
}

// ========== SIMPLE CONTACT FORM MESSAGE (FRONT-END ONLY) ==========
const contactForm = document.getElementById("contactForm");
const contactNote = document.getElementById("contactNote");

if (contactForm && contactNote) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        contactNote.textContent =
            "Thanks for your message! This is a demo form — connect it to a backend to receive real emails.";
        contactForm.reset();
    });
}

// ========== FOOTER YEAR ==========
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

