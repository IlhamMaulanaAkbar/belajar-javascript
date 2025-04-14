class Book {
    constructor(title, author, year, isBorrowed) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.isBorrowed = false;
    }

    borrowBook() {
        return this.isBorrowed = true;
    }

    returnBook(){
        return this.isBorrowed = false;
    }

    getInfo(){
        return `Informasi Buku:
        Judul: ${this.title}
        Penulis: ${this.author}
        Tahun: ${this.year}
        Dipinjam: ${this.isBorrowed}
        `;
    }
}

const book1 = new Book('IPA', 'Anonim', 2016);
const book2 = new Book('IPS', 'Anonim', 2015);
const book3 = new Book('Bahasa', 'Anonim', 2017);

book1.borrowBook();
console.log(book1.getInfo());
console.log(book2.getInfo());
console.log(book3.getInfo());
book1.returnBook();
console.log(book1.getInfo());

