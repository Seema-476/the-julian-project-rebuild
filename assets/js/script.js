const menuIcon = document.querySelector(".menuicon")
const menulist = document.querySelector(".menulist")
menuIcon.addEventListener("click", function () {
    menulist.classList.toggle("show");
    document.body.classList.toggle("overflowhidden")
})
const accordianbtn = document.querySelectorAll(".accordianbtn");
accordianbtn.forEach((e) => {
    e.addEventListener("click", () => {
        const activeaccordian = document.querySelector(".active")
        e.parentElement.classList.toggle("active");
        activeaccordian && activeaccordian.classList.remove("active")
    })

})
$('.responsive').slick({
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: ".btnnext",
    prevArrow: ".btnprev",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});