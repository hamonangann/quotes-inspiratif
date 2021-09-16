// Script untuk membuat slider

let indeks = 0;
tampilkan(indeks);

function geser(n){
    tampilkan(indeks + n);
}

function tampilkan(n) { // Menampilkan gambar
    let i;
    let slides = document.querySelectorAll(".slide");

    // Gambar bersifat siklis, setelah gambar terakhir kembali ke pertama
    if (n >= slides.length) {indeks = 0}
    else if (n < 0) {indeks = slides.length - 1}
    else {indeks = n};

    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[indeks].style.display = "block";
}

const kiri = document.querySelector(".kiri");
kiri.addEventListener('click', function(event) {geser(-1)});

const kanan = document.querySelector(".kanan");
kanan.addEventListener('click', function(event) {geser(1)});