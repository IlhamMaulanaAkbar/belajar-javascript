function categorizeAge(input) {
    if (typeof input !== "number" || !Number.isInteger(input)) {
        throw new Error('Input harus berupa bilangan bulat');
    }

    if (input < 0) {
        return 'Usia tidak valid';
    } else if (input <= 5) {
        return 'Balita';
    } else if (input <= 12) {
        return 'Anak-anak';
    } else if (input <= 17) {
        return 'Remaja';
    } else if (input <= 59) {
        return 'Dewasa';
    } else if (input >= 60) {
        return 'Lansia';
    }
}

console.log(categorizeAge(3));     // Output: "Balita"
console.log(categorizeAge(10));    // Output: "Anak-anak"
console.log(categorizeAge(16));    // Output: "Remaja"
console.log(categorizeAge(35));    // Output: "Dewasa"
console.log(categorizeAge(70));    // Output: "Lansia"
console.log(categorizeAge(-4));    // Output: "Usia tidak valid"

try {
    categorizeAge("tiga belas");
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat"
}