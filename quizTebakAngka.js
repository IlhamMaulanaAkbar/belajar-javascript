// let trueNumber = Math.floor(Math.random() * 10) + 1;
// console.log(`Angka yang benar adalah ${trueNumber}`);

let randomNumber = Math.floor(Math.random() * 10) + 1;
let guessNumber;

do {
    guessNumber = Number(prompt('Tebak angka 1 sampai 10:'));
    if (guessNumber != randomNumber){
        console.log('Tebakan Anda Salah, Coba Lagi');
    }

} while (guessNumber != randomNumber);

console.log('Selamat! Tebakan Anda Benar.');
