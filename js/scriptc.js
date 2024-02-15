// const faqs = document.querySelectorAll(".faq");
// faqs.forEach((faq) => {
//     faq.addEventListener("click", () => {
//         faq.classList.toggle("active");
//     });
// });
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    const openIcon = faq.querySelector(".open");
    const closeIcon = faq.querySelector(".close");

    faq.addEventListener("click", () => {
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
