// Menggabungkan beberapa elemen menjadi satu array

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

console.log(sum(1,2,3,5,4));