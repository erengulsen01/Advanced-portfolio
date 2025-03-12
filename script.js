document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar .nav-link");

    navLinks.forEach(link => {
        // Dropdown menüsü linklerine tıklanması engellenmesin
        if (!link.classList.contains('dropdown-toggle')) {
            link.addEventListener("click", function (event) {
                // Eğer link bir dropdown değilse, scroll işlemi yapılacak
                event.preventDefault(); // Scroll işlemi yapılacak linkler için preventDefault

                let targetId = this.getAttribute("href");
                let targetSection = document.querySelector(targetId);

                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Hedef bölüme kaydırma
                        behavior: "smooth" // Yumuşak kaydırma
                    });
                }
            });
        }
    });
});


function copyLink(event) {
    event.preventDefault();
    let email = "erengulsen2003@hotmail.com"; 
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied!");
    }).catch(err => {
        console.error("Copy failed!", err);
    });
}