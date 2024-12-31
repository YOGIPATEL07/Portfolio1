document.addEventListener("DOMContentLoaded", () => {
    // Typed.js Animation
    const introText = new Typed("#intro-text", {
        strings: ["Hi, I'm Yogi Patel.", "A Developer.", "A Programmer.", "A Coder."],
        typeSpeed: 50,
        backSpeed: 30,
        loop: true
    });

    const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Dark Mode Toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    

    // Scroll-to-Top Button
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.textContent = "↑";
    scrollToTopBtn.id = "scroll-to-top";
    scrollToTopBtn.style.display = "none";
    scrollToTopBtn.style.position = "fixed";
    scrollToTopBtn.style.bottom = "20px";
    scrollToTopBtn.style.right = "20px";
    scrollToTopBtn.style.background = "#ff9800";
    scrollToTopBtn.style.color = "#fff";
    scrollToTopBtn.style.border = "none";
    scrollToTopBtn.style.borderRadius = "50%";
    scrollToTopBtn.style.padding = "10px 15px";
    scrollToTopBtn.style.cursor = "pointer";
    document.body.appendChild(scrollToTopBtn);

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    // Navbar Animation
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        }
    });

    // Skill Cards Hover Effect
    document.querySelectorAll(".skill-card").forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.1)";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    // Dynamic Footer Year
    const footerYear = document.querySelector("footer p");
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = `© ${currentYear} Yogi Patel. All Rights Reserved.`;

 

    // GSAP Scroll Animations
    gsap.from(".hero-text", { opacity: 0, y: -50, duration: 1 });
    gsap.from(".skills-container", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
    gsap.from(".project-grid", { opacity: 0, x: -100, duration: 1, delay: 1 });

    // Hover effect for navigation links
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.style.color = "#ff9800";
            link.style.transform = "scale(1.1)";
        });
        link.addEventListener("mouseleave", () => {
            link.style.color = "#fff";
            link.style.transform = "scale(1)";
        });
    });

    // Section Reveal on Scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    
    


});
document.addEventListener("DOMContentLoaded", () => {
    const bubblesContainer = document.getElementById("bubbles");

    const createBubble = () => {
        const bubble = document.createElement("div");
        bubble.classList.add("bubble");

        // Randomize size, position, and delay for each bubble
        const size = Math.random() * 50 + 20; // Random size between 20px and 70px
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * window.innerWidth}px`; // Random horizontal position
        bubble.style.animationDelay = `${Math.random() * 3}s`; // Random delay for staggered rising effect

        bubblesContainer.appendChild(bubble);

        // Remove bubble after animation ends to avoid memory overflow
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    };

    // Create bubbles multiple times (e.g., 2 or 3 times)
    const createBubblesMultipleTimes = (times) => {
        let count = 0;
        const interval = setInterval(() => {
            if (count >= times) {
                clearInterval(interval); // Stop after creating bubbles 'times' times
            } else {
                const numberOfBubbles = 40; // Number of bubbles to create per trigger
                for (let i = 0; i < numberOfBubbles; i++) {
                    createBubble();
                }
                count++;
            }
        }, 1000); // Trigger bubble creation every 1 second
    };

    // Trigger the bubble creation twice or thrice on page load (multiple times)
    createBubblesMultipleTimes(4); // Change the number here (2 or 3) based on your needs

       // Contact Form Submission
 
document.querySelector("#contact-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    try {
        const response = await fetch("http://localhost:10000/send", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        if (result.success) {
            alert("Message sent successfully!Please wait for the response");
            e.target.reset();
        } else {
            alert("Failed to send message. Please try again.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
    }
});
});

