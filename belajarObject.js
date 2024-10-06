// const buku = {
//     Judul: "Web Dasar",
//     Penulis: "Ilham",
//     Penerbit: "Gramedia",
//     "Jumlah Buku": 3, 
// }

// console.log(`Saya sedang membaca sebuah buku bernama ${buku.Judul} yang ditulis oleh ${buku.Penulis}`);
// console.log(`Buku ini diterbitkan oleh ${buku.Penerbit} dan memiliki jumlah buku sebanyak ${buku["Jumlah Buku"]} buah`);

// console.log("Ayo Membaca")
// if (buku) {
//     console.log(`Buku yang sedang saya baca bernama ${buku.Judul} dan ditulis oleh ${buku.Penulis}`);
// } else {
//     console.log(`Aku tidak mau membaca`);
// }

const spaceship = {
    name: "Millenium Falcon",
    manufacturer: "Corellian Engineering Corporation",
    maxSpeed: 1200,
    color: "Light gray",
  };

  /*spaceship = {name: "New Millenium Falcon"};*/  // --> Sebuah Kode Error Ketika Ingin Mengubah Nilai Pada Property

  spaceship.name = "New Millenium Falcon"; // True
  spaceship.class = "Light True"; // Menambahkan Property Baru
  /*delete spaceship.manufacturer;*/ // Melakukan Delete Pada Property
  console.log(spaceship);