// Brands Owl Carousel 

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    arrow: true,
    dots: true,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})

// Active Class Toggle on Tab Links 
$('.tab-link').on('click', function () {
    $('.tab-link.active').removeClass('active');
    $(this).addClass('active');
});

// Hide and Show Pricing Table 
const pricingTableMonthly = document.getElementById("card-row-monthly")
const pricingTableSixMonths = document.getElementById("card-row-6-months")
const pricingTableYearly = document.getElementById("card-row-yearly")

document.querySelector(".tab-link-monthly").addEventListener("click", () => {
    pricingTableMonthly.style.display = "flex";
    pricingTableSixMonths.style.display = "none";
    pricingTableYearly.style.display = "none";
});

document.querySelector(".tab-link-6-months").addEventListener("click", () => {
    pricingTableMonthly.style.display = "none";
    pricingTableSixMonths.style.display = "flex";
    pricingTableYearly.style.display = "none";
});

document.querySelector(".tab-link-yearly").addEventListener("click", () => {
    pricingTableMonthly.style.display = "none";
    pricingTableSixMonths.style.display = "none";
    pricingTableYearly.style.display = "flex";
});

// FAQ Accordion 
var acc = document.getElementsByClassName("tab-answer");
var ques = document.getElementsByClassName("tab-question")
var i;

for (i = 0; i < acc.length; i++) {
    ques[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}

// Show Elements On Scroll 
window.addEventListener('scroll', reveal)

function reveal() {
    var reveals = document.querySelectorAll(".reveal")
    for (let i = 0; i < reveals.length; i++) {
        const windowheight = window.innerHeight
        const revealtop = reveals[i].getBoundingClientRect().top
        const revealpoint = 150

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active')
        }

        else {
            reveals[i].classList.remove('active')
        }

    }
}

// Show Video Popup on click 
document.querySelector("#popupBanner").addEventListener("click", () => {
    videoPopupSection.style.display = "flex"
})

// Close Video Popup 
document.querySelector(".close-btn").addEventListener("click", () => {
    videoPopupSection.style.display = "none"
})


const ImageOneApp = document.getElementById("imgOne")
jQuery(".step-1-app").click(function () {
    ImageOneApp.style.display = "block"
    ImageTwoApp.style.display = "none"
    ImageThreeApp.style.display = "none"
    ImageFourApp.style.display = "none"
});

const ImageTwoApp = document.getElementById("imgTwo")
jQuery(".step-2-app").click(function () {
    ImageTwoApp.style.display = "block"
    ImageOneApp.style.display = "none"
    ImageThreeApp.style.display = "none"
    ImageFourApp.style.display = "none"
});

const ImageThreeApp = document.getElementById("imgThree")
jQuery(".step-3-app").click(function () {
    ImageThreeApp.style.display = "block"
    ImageOneApp.style.display = "none"
    ImageFourApp.style.display = "none"
    ImageTwoApp.style.display = "none"
});

const ImageFourApp = document.getElementById("imgFour")
jQuery(".step-4-app").click(function () {
    ImageFourApp.style.display = "block"
    ImageOneApp.style.display = "none"
    ImageThreeApp.style.display = "none"
    ImageTwoApp.style.display = "none"
});

// Function to toggle class among 5 divs after 5 seconds
function toggleClassAmongDivs() {
    var divs = document.querySelectorAll('.clickme2');
    var index = 0;
    var current = 0;

    setInterval(function () {
        divs.forEach(function (div) {
            div.classList.remove('toggle-class');
        });
        divs[index].classList.add('toggle-class');
        index = (index + 1) % divs.length;
    }, 5000); // 5000 milliseconds = 5 seconds

    setInterval(function () {
        var divs = jQuery(".howItWorkImageBox .list2").hide();
        divs.eq(current).fadeIn("normal");
        if (current < divs.length - 1)
            current++;
        else
            current = 0;
    }, 5000);
}

// Call the function when the page loads
toggleClassAmongDivs();