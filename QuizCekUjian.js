function categorizeGrade(input) {
    if (typeof input !== "number" || !Number.isInteger(input)) {
        throw new Error('Input harus berupa bilangan bulat');
    }

    if (input > 100) {
        throw new Error('Input harus berupa bilangan bulat antara 0 - 100');
    }

    if (input >= 90) {
        return 'A (Sangat Baik)';
    } else if (input >= 80) {
        return 'B (Baik)';
    } else if (input >= 70) {
        return 'C (Cukup)';
    } else if (input >= 60) {
        return 'D (Kurang)';
    } else {
        return 'E (Sangat Kurang)';
    }
}

console.log(categorizeGrade(95)); // Output: "A (Sangat Baik)"
console.log(categorizeGrade(82)); // Output: "B (Baik)"
console.log(categorizeGrade(75)); // Output: "C (Cukup)"
console.log(categorizeGrade(63)); // Output: "D (Kurang)"
console.log(categorizeGrade(40)); // Output: "E (Sangat Kurang)"

try {
    categorizeGrade("delapan puluh");
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat antara 0 - 100"
}

try {
    categorizeGrade(120);
} catch (error) {
    console.log(error.message); // Output: "Input harus berupa bilangan bulat antara 0 - 100"
}

try {
    console.log('Ini try block');
    throw new Error('Error: Program berhenti');
} catch (err) {
    console.log('Ini catch block');
} finally {
    console.log('Ini finally block');
}
