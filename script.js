document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".navbar .nav-link"); // Navbar içindeki linkleri seç
    let sections = document.querySelectorAll(".container .box"); // İçerik bölümlerini seç

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Sayfanın yenilenmesini önle

            let targetId = this.textContent.trim().replace(/\s+/g, '').toLowerCase(); // Linkin text'ini ID'ye çevir
            let targetSection = document.querySelector(`.box.${targetId}`);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 70, // Navbar boşluğu bırak
                    behavior: "smooth" // Yumuşak kaydırma efekti
                });
            }
        });
    });
});
