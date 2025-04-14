function Mahasiswa(nama, nim, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.jurusan = jurusan;
    this.isActive = true;
}

Mahasiswa.prototype.nonaktifkan = function () {
    return this.isActive = false;
}

Mahasiswa.prototype.getInfo = function () {
    return `Informasi Mahasiswa:
    Nama: ${this.nama}
    NIM: ${this.nim}
    Jurusan: ${this.jurusan}
    Aktif: ${this.isActive} `;
}

const mahasiswa1 = new Mahasiswa('John', '211', 'TI');
const mahasiswa2 = new Mahasiswa('Arthur', '211', 'TI');
const mahasiswa3 = new Mahasiswa('Hajin', '201', 'SI');

console.log(mahasiswa1.getInfo());
console.log(mahasiswa2.getInfo());
mahasiswa3.nonaktifkan();
console.log(mahasiswa3.getInfo());