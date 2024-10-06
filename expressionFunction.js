const books = function(name, years){
    if(name === "PHP"){
        return "Anda Sedang Membaca Buku " + name + " Tahun " + years;
    } else if (name === "JavaScript"){
        return "Anda Membaca Buku " + name + " Tahun " + years;
    } else {
        return "Anda Membaca Buku Berjudul " + name + " Tahun " + years;
    }
}

// let myBooks = books("JavaScript");
// console.log(myBooks);

console.log(books('Java', '2023'))