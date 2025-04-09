// Set tidak bisa menerima nilai yang sama ketika ditambahkan, jika nilai baru yang ditambahkan sama dengan nilai yang ada maka data yang ditambahkan tidak melakukan duplikat atau bisa dibilang dianggap satu
const stringSet = new Set(["Hai", "Hai", "Wahyu", "Ilham"]);

stringSet.add("Sahnuri"); // menambah nilai baru ke dalam set menggunakan function namaVariable.add(value)
stringSet.delete("Hai"); // menghapus nilai yang diinginkan dalam set menggunakan function namaVariable.delete(value)


console.log(stringSet);