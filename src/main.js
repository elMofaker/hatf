// header 
document.addEventListener("DOMContentLoaded", function () {
    let navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        let link = item.querySelector("a");

        link.addEventListener("click", function (event) {
            event.preventDefault();
            removeActiveStates();
            item.classList.add("active");
        });
    });

    document.addEventListener("click", function (event) {
        if (!event.target.closest(".nav-item")) {
            removeActiveStates();
        }
    });

    function removeActiveStates() {
        navItems.forEach(item => item.classList.remove("active"));
    }
});

// close nav

document.addEventListener("DOMContentLoaded", function () {
    let navbarToggler = document.querySelector(".navbar-toggler");
    let navbarCollapse = document.querySelector("#navbarSupportedContent");
    let navLinks = document.querySelectorAll(".navbar-nav .nav-item a:not(.dropdown-toggle)"); // استبعاد زر "خدماتنا"
    let dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");

    // التمرير السلس إلى الفوتر عند الضغط على "الرئيسية"
    document.querySelector('a[href="#footer"]').addEventListener("click", function (event) {
        event.preventDefault(); // منع السلوك الافتراضي للرابط
        let footer = document.querySelector("#footer");
        footer.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            navbarCollapse.classList.remove("show"); // إغلاق الناف بار بعد التمرير
        }, 500);
    });

    // إغلاق الناف بار عند النقر على أي رابط داخله (باستثناء زر القائمة المنسدلة "خدماتنا")
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            setTimeout(() => {
                navbarCollapse.classList.remove("show");
            }, 200);
        });
    });

    // السماح بفتح القائمة المنسدلة عند النقر عليها فقط
    dropdownToggles.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation(); // منع الإغلاق عند النقر على زر "خدماتنا"
        });
    });

    // إغلاق القائمة المنسدلة عند الضغط على أي رابط داخلها فقط
    dropdownMenus.forEach(menu => {
        menu.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", function () {
                let parentDropdown = this.closest(".dropdown-menu");
                let dropdownToggle = parentDropdown.previousElementSibling;
                let bootstrapDropdown = new bootstrap.Dropdown(dropdownToggle);

                setTimeout(() => {
                    bootstrapDropdown.hide(); // إغلاق القائمة المنسدلة
                    navbarCollapse.classList.remove("show"); // إغلاق الناف بار
                }, 200);
            });
        });
    });

    // إغلاق الناف بار عند النقر في أي مكان خارج القائمة بالكامل
    document.addEventListener("click", function (event) {
        let isClickInsideNavbar = navbarCollapse.contains(event.target) || navbarToggler.contains(event.target);
        if (!isClickInsideNavbar) {
            navbarCollapse.classList.remove("show");
        }
    });
});


// home-swiper
var swiper = new Swiper(".home-packages-slider", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    rtl: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 2.5
        },
        0: {
            slidesPerView: 1.5
        }

    }
});


// home-form
document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".form-group input, .textarea-group textarea");

    inputs.forEach((input) => {
        input.addEventListener("input", function () {
            if (this.value.trim() !== "") {
                this.parentElement.classList.add("hide-labels");
            } else {
                this.parentElement.classList.remove("hide-labels");
            }
        });

        input.addEventListener("focus", function () {
            this.parentElement.classList.add("hide-labels");
        });

        input.addEventListener("blur", function () {
            if (this.value.trim() === "") {
                this.parentElement.classList.remove("hide-labels");
            }
        });
    });

    // دعم القائمة المنسدلة (dropdown المخصصة)
    document.querySelectorAll(".dropdown-toggle").forEach((toggle) => {
        toggle.addEventListener("click", function (event) {
            event.stopPropagation(); // منع إغلاق القائمة عند النقر داخلها
            const dropdown = this.parentElement;
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== dropdown) d.classList.remove("open"); // إغلاق القوائم الأخرى
            });
            dropdown.classList.toggle("open");
        });
    });

    // اختيار عنصر من القائمة
    document.querySelectorAll(".dropdown-menu li").forEach((item) => {
        item.addEventListener("click", function () {
            let dropdown = this.closest(".dropdown");
            let selectedText = dropdown.querySelector(".selected-option");
            let inputField = dropdown.querySelector("input[type='hidden']");

            selectedText.textContent = this.textContent; // تحديث النص
            inputField.value = this.textContent; // تحديث القيمة المخفية
            dropdown.classList.remove("open"); // إغلاق القائمة
        });
    });

    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", function (event) {
        document.querySelectorAll(".dropdown").forEach(dropdown => {
            dropdown.classList.remove("open");
        });
    });
});


// swiper-comments
var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 15000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    slidesPerView: 3, // الوضع الافتراضي للكمبيوتر
    spaceBetween: 20,
    breakpoints: {
        1200: {
            slidesPerView: 3, // 3 صور على الكمبيوتر
            spaceBetween: 20,
        },
        770: {
            slidesPerView: 2, // 2 صورة على التابلت
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1, // 1 صورة على الموبايل
            spaceBetween: 10,
        }
    }
});

// btn add and remov services
document.addEventListener("DOMContentLoaded", function () {
    let showMoreButton = document.getElementById("showMore");
    let hiddenCards = document.querySelectorAll(".services .card-item:nth-child(n+3)");

    function toggleServicesCards() {
        hiddenCards.forEach(card => {
            card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
        });

        showMoreButton.innerText = showMoreButton.innerText === "عرض المزيد" ? "إخفاء الكروت" : "عرض المزيد";
    }

    function checkServicesScreenSize() {
        if (window.innerWidth >= 768) {
            hiddenCards.forEach(card => card.style.display = "block");
            showMoreButton.style.display = "none";
        } else {
            hiddenCards.forEach(card => card.style.display = "none");
            showMoreButton.style.display = "inline-block";
        }
    }

    showMoreButton.addEventListener("click", toggleServicesCards);
    window.addEventListener("resize", checkServicesScreenSize);
    checkServicesScreenSize();
});


// btn add and remove mcq
function toggleMcqCards() {
    let moreCards = document.querySelectorAll(".mcq .card-hiden");
    moreCards.forEach(card => {
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "block" : "none";
    });

    let button = document.querySelector(".mcq #btn-hiden");
    button.innerText = button.innerText === "عرض المزيد" ? "إخفاء الكروت" : "عرض المزيد";
}

function checkMcqScreenSize() {
    let allCards = document.querySelectorAll(".mcq .card-item");
    let moreCards = document.querySelectorAll(".mcq .card-hiden");
    let button = document.querySelector(".mcq #btn-hiden");

    if (window.innerWidth >= 768) {
        allCards.forEach(card => card.style.display = "block");
        if (button) button.style.display = "none";
    } else {
        moreCards.forEach(card => card.style.display = "none");
        if (button) button.style.display = "inline-block";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".mcq #btn-hiden");
    if (button) button.addEventListener("click", toggleMcqCards);

    checkMcqScreenSize();
    window.addEventListener("resize", checkMcqScreenSize);
});
