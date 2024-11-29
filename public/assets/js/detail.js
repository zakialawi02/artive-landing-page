$(document).ready(function () {
    // Inisialisasi GLightbox
    const playVideo = function () {
        const glightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: false,
            loop: false,
            autoplayVideos: true,
            draggable: false,
        });
    };
    playVideo();

    function togglePlayVideo(url) {
        const overlay = document.getElementById("video-overlay");
        const videoFrame = document.getElementById("video-frame");
        const loader = document.getElementById("video-loader");

        // Tampilkan overlay dan loader
        overlay.classList.remove("hidden");
        loader.classList.remove("hidden");
        videoFrame.classList.add("hidden");

        // Mencegah scroll pada halaman
        document.body.classList.add("overflow-hidden");

        // Set URL video ke iframe
        videoFrame.src = url;

        // Ketika iframe selesai dimuat
        videoFrame.onload = () => {
            loader.classList.add("hidden"); // Sembunyikan loader
            videoFrame.classList.remove("hidden"); // Tampilkan video
        };
    }

    function closeVideo() {
        const overlay = document.getElementById("video-overlay");
        const videoFrame = document.getElementById("video-frame");

        // Menyembunyikan overlay
        overlay.classList.add("hidden");

        // Menghapus URL video untuk menghentikan video
        videoFrame.src = "";

        // Mengizinkan scroll pada halaman
        document.body.classList.remove("overflow-hidden");

        // Reset loader state
        const loader = document.getElementById("video-loader");
        loader.classList.remove("hidden");
        videoFrame.classList.add("hidden");
    }

    // Ambil semua input radio dan kartu
    const radiosWorks = document.querySelectorAll('input[name="works"]');
    const cardsPortfolio = document.querySelectorAll(".work-portfolio");

    // Tambahkan event listener untuk setiap radio
    radiosWorks.forEach((radio) => {
        radio.addEventListener("change", () => {
            const selectedValue = radio.value;
            // Tampilkan/sembunyikan kartu berdasarkan data-category
            cardsPortfolio.forEach((card) => {
                if (selectedValue === "all") {
                    card.style.display = "block";
                } else if (card.dataset.category === selectedValue) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });
});
