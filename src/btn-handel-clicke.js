
// btn add and remov services
document.addEventListener("DOMContentLoaded", function () {
    let showMoreButton = document.getElementById("showMore");
    let hiddenCards = document.querySelectorAll(".services .card-item:nth-child(n+3)");

    function toggleServicesCards() {
        hiddenCards.forEach(card => {
            card.style.display = (card.style.display === "none" || card.style.display === "") ? "flex" : "none";
        });

        showMoreButton.innerText = showMoreButton.innerText === "عرض المزيد" ? "إخفاء الكروت" : "عرض المزيد";
    }

    function checkServicesScreenSize() {
        if (window.innerWidth >= 768) {
            hiddenCards.forEach(card => card.style.display = "flex");
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
        card.style.display = (card.style.display === "none" || card.style.display === "") ? "flex" : "none";
    });

    let button = document.querySelector(".mcq #btn-hiden");
    button.innerText = button.innerText === "عرض المزيد" ? "إخفاء الكروت" : "عرض المزيد";
}

function checkMcqScreenSize() {
    let allCards = document.querySelectorAll(".mcq .card-item");
    let moreCards = document.querySelectorAll(".mcq .card-hiden");
    let button = document.querySelector(".mcq #btn-hiden");

    if (window.innerWidth >= 768) {
        allCards.forEach(card => card.style.display = "flex");
        if (button) button.style.display = "none";
    } else {
        moreCards.forEach(card => {
            card.style.display = (card.style.display !== "none") ? "flex" : "none";
        });
        if (button) button.style.display = "inline-flex";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let button = document.querySelector(".mcq #btn-hiden");
    if (button) button.addEventListener("click", toggleMcqCards);

    checkMcqScreenSize();
    window.addEventListener("resize", checkMcqScreenSize);
});

// about-3

document.addEventListener("DOMContentLoaded", function () {
    let questions = document.querySelectorAll(".about-3 .toggle-li");

    questions.forEach(item => {
        item.addEventListener("click", function () {
            let answer = this.querySelector(".answer");
            let questionText = this.querySelector(".toggle-question");

            // Toggle the visibility of the answer
            answer.classList.toggle("d-none");

            // Toggle the active class to rotate the icon
            questionText.classList.toggle("active");
        });
    });
});

// home form
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
