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

    // Fungsi untuk menutup modal
    $("#closeModal").on("click", function () {
        $("#modalOverlay").animate({ opacity: 0 }, 100, function () {
            $(this).addClass("hidden");
        });
        $("#modal").removeClass("scale-100 opacity-100").addClass("scale-95 opacity-0").animate({ opacity: 0 }, 100);
        $("#modal-body").html("");
    });

    // Menutup modal jika area di luar modal diklik
    $("#modalOverlay").on("click", function (event) {
        if (event.target === this) {
            $("#closeModal").trigger("click");
        }
    });
});

function togglePlayVideo(url) {
    // Tampilkan overlay dan loader
    $("#video-overlay").removeClass("hidden");
    $("#video-loader").removeClass("hidden");
    $("#video-frame").addClass("hidden");
    // Mencegah scroll pada halaman
    $("body").addClass("overflow-hidden");
    // Set URL video ke iframe
    $("#video-frame").attr("src", url);
    // Ketika iframe selesai dimuat
    $("#video-frame").on("load", function () {
        $("#video-loader").addClass("hidden"); // Sembunyikan loader
        $("#video-frame").removeClass("hidden"); // Tampilkan video
    });
}

function closeVideo() {
    // Menyembunyikan overlay
    $("#video-overlay").addClass("hidden");
    // Menghapus URL video untuk menghentikan video
    $("#video-frame").attr("src", "");
    // Mengizinkan scroll pada halaman
    $("body").removeClass("overflow-hidden");
    // Reset loader state
    $("#video-loader").removeClass("hidden");
    $("#video-frame").addClass("hidden");
}

// Fungsi untuk membuka modal
function openModal(element) {
    event.preventDefault();
    // Mengambil parent dari elemen yang diklik
    const parent = $(element).closest(".work-portfolio");
    const image = parent.find("img").attr("src");
    const title = parent.find("h3").text();
    const description = $(element).data("description");
    // Menyusun HTML untuk modal body secara dinamis
    const modalContent = `
      <img src="${image}" alt="Modal Image" class="w-full mb-3" />
      <h3 class="text-xl font-semibold mb-2">${title}</h3>
      <p class="text-gray-600 mb-3">${description}</p>
    `;
    // Memasukkan konten ke dalam modal-body
    $("#modal-body").html(modalContent);
    // Menampilkan modal
    $("#modalOverlay").removeClass("hidden").animate({ opacity: 1 }, 100);
    $("#modal").removeClass("scale-95 opacity-0").addClass("scale-100 opacity-100").animate({ opacity: 1 }, 100);
}
