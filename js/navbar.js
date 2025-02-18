document.addEventListener("DOMContentLoaded", function () {
    // Dapatkan URL halaman saat ini
    const currentUrl = window.location.href;
  
    // Dapatkan semua elemen <a> di dalam navbar
    const navLinks = document.querySelectorAll("#nav-links a, #mobile-menu a");
  
    // Loop melalui setiap elemen <a>
    navLinks.forEach((link) => {
      // Bandingkan href dari elemen <a> dengan URL halaman saat ini
      if (link.href === currentUrl) {
        link.classList.add("active"); // Tambahkan class aktif
      }
    });
  });