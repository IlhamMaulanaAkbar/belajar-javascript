// let i = 1;

// while (i <= 10) {
//     console.log(`Angka ke-${i}`);
// }

// let i = 1;

// do {
//     console.log(`Angka ke-${i} adalah ${i}.`);
// } while (i <= 10);

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     console.log(i);
// }

// function checkGrades(grades) {
//     for (let i = 0; i < grades.length; i++) {
//         if (typeof grades[i] !== 'number') {
//             throw new Error('Invalid input. Please provide an array of numbers.');
//         }

//         const grade = grades[i];
//         let predicate;

//         if (grade >= 90) {
//             predicate = 'A';
//         } else if (grade >= 80) {
//             predicate = 'B';
//         } else if (grade >= 70) {
//             predicate = 'C';
//         } else if (grade >= 60) {
//             predicate = 'D';
//         } else {
//             predicate = 'E';
//         }

//         console.log(`Grade ${i + 1}: ${grade} (${predicate})`);
//     }
// }

// try {
//     const studentGrades = [95, 85, 65, 80, 70];
//     checkGrades(studentGrades);
// } catch (e) {
//     console.error(e);
// }

function categorizeNumber(input) {
    if (typeof input !== 'number' || !Number.isInteger(input)) {
        throw new Error('Input harus berupa angka');
    }


    if (input % 2 === 0) {
        console.log(`${input} adalah angka Genap`);
    } else {
        console.log(`${input} adalah angka Ganjil`);
    }

    function isPrime(num) {
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    if (isPrime(input)) {
        console.log(`${input} adalah angka prima`);
    }

    if (input < 0) {
        console.log(`${input} adalah angka negatif`);
    }

    if (input === 0) {
        console.log(`${input} adalah angka 0`);
    }

}