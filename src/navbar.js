document.addEventListener("DOMContentLoaded", function () {
    let navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(item => {
        let link = item.querySelector("a");

        link.addEventListener("click", function (event) {
            let href = this.getAttribute("href");

            // تحقق مما إذا كان الرابط خارجيًا
            let isExternal = href.startsWith("http") || href.startsWith("https");

            if (!isExternal) {
                event.preventDefault();
                removeActiveStates();
                item.classList.add("active");
            }
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
    let navLinks = document.querySelectorAll(".navbar-nav .nav-item a:not(.dropdown-toggle)");
    let dropdownToggles = document.querySelectorAll(".dropdown-toggle");
    let dropdownMenus = document.querySelectorAll(".dropdown-menu");

    // التمرير السلس عند الضغط على رابط داخل الصفحة
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            if (this.getAttribute("href") !== "#") {
                event.preventDefault();
                let target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    target.scrollIntoView({ behavior: "smooth" });
                }
            }
        });
    });

    // إغلاق الناف بار عند النقر على أي رابط داخله
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            let href = this.getAttribute("href");
            let isExternal = href.startsWith("http") || href.startsWith("https");

            if (!isExternal) {
                setTimeout(() => {
                    navbarCollapse.classList.remove("show");
                }, 200);
            }
        });
    });

    // تفعيل القائمة المنسدلة عند النقر
    dropdownToggles.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });

    // إغلاق القائمة المنسدلة عند الضغط على أي رابط داخلها
    dropdownMenus.forEach(menu => {
        menu.querySelectorAll("a").forEach(item => {
            item.addEventListener("click", function () {
                let href = this.getAttribute("href");
                let isExternal = href.startsWith("http") || href.startsWith("https");

                if (!isExternal) {
                    let parentDropdown = this.closest(".dropdown-menu");
                    let dropdownToggle = parentDropdown.previousElementSibling;
                    let bootstrapDropdown = new bootstrap.Dropdown(dropdownToggle);

                    setTimeout(() => {
                        bootstrapDropdown.hide();
                        navbarCollapse.classList.remove("show");
                    }, 200);
                }
            });
        });
    });

    // إغلاق الناف بار عند النقر في أي مكان خارج القائمة بالكامل
    document.addEventListener("click", function (event) {
        if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
            navbarCollapse.classList.remove("show");
        }
    });
});
