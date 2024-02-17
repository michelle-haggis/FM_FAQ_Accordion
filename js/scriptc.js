const faqs = document.querySelectorAll(".faq");

// Open the first FAQ by adding the "active" class
faqs[0].classList.add("active");

faqs.forEach((faq) => {
    const openIcon = faq.querySelector(".open");
    const closeIcon = faq.querySelector(".close");

    if (faq.classList.contains("active")) {
        openIcon.style.display = "none";
        closeIcon.style.display = "inline-block";
    } else {
        openIcon.style.display = "inline-block";
        closeIcon.style.display = "none";
    }

    faq.addEventListener("click", () => {
        faqs.forEach((otherFaq) => {
            if (otherFaq !== faq) {
                otherFaq.classList.remove("active");
                const otherOpenIcon = otherFaq.querySelector(".open");
                const otherCloseIcon = otherFaq.querySelector(".close");
                otherOpenIcon.style.display = "inline-block";
                otherCloseIcon.style.display = "none";
            }
        });

        faq.classList.toggle("active");

        if (faq.classList.contains("active")) {
            openIcon.style.display = "none";
            closeIcon.style.display = "inline-block";
        } else {
            openIcon.style.display = "inline-block";
            closeIcon.style.display = "none";
        }
    });
});