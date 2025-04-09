// const city = new Map([
//     ["Jakarta Barat", "Jakarta", "Indonesia"],
//     ["Banjarmasin", "Kalimantan Selatan", "Indonesia"]
// ]);


// console.log(city.get("Jakarta Barat"));
// city.set("Banjarbaru", "Kalimantan Selatan");
// console.log(city);
// console.log(city.size);

// menyimpan nilai dalam map menggunakan .Set() -> menggunakan nama variabel [setOnMap] dan gabungkan dengan function .set(value yang ingin disimpan)
const setOnMap = new Map ([
    [1, 'Ilham'],
]);
setOnMap.set(2, 'Amin'); // hasil
setOnMap.set(3, 'Wahyu');
setOnMap.delete(3);
console.log(setOnMap);
console.log(setOnMap.get(1)); // mengakses nilai berdasarkan key tertentu



// const wrongMap = new Map();
 
// wrongMap["My Key"] = "My Value";
// console.log(wrongMap["My Key"]);
// console.log(wrongMap.has("My Value"));