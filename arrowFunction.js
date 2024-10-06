// Arrow Function menggunakan tanda panah atau fat arrow (=>) dalam penulisan function
// perbedaan antara regular function dan arrow function adalah parameter regular function bisa bernilai declaration (Variabel) dan expression(Nilai), sedangkan arrow function hanya bisa menggunakan parameter expression(nilai)

// function expression
// const myName = (name) => {
//     console.log(`Nama Saya adalah ${name}`);
// }

// myName("Al")

// jika tidak membutuhkan expression
// const myName = () => {
//     console.log(`Halaoou Semuanya`);
// }

// myName();

// Jika hanya mempunyai 1 parameter
// const myName = name => {
//     console.log(`Nama saya ${name}`);
// }

// myName("Le");

const myName = name => console.log(`Nama saya ${name}`);
myName("Na")