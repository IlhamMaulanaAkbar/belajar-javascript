const user = {
    nameBook: "Menjadi Pintar",
    authorBook: "Steve",
    age: 28,
    "Buku Yang Terjual": 300,
};




// for (let key in user) {
//     console.log(`Key : ${key} Value : ${user[key]}`);
// }
console.log(`Halo, saya sedang membaca buku tentang ${user.nameBook} yang ditulis oleh ${user.authorBook} yang akhir akhir ini menjadi buku Best Seller`);
console.log(`Fun Fact : Umur Author Buku Menjadi Pintar adalah ${user.age}`);
console.log(`Buku Yang Telah Terjual Sebanyak ${user["Buku Yang Terjual"]} Eksemplar`);