document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper(".mySwiper", {
            slidesPerView: "auto",
            centeredSlides: true,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3500,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }
});
