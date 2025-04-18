class WargaKampus {
    #alamat = '';
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
    }

    get alamat() {
        console.log(`Alamat anda adalah ${this.#alamat}`);
    }

    set alamat(inputAlamat) {
        if (typeof inputAlamat !== "string" || inputAlamat.length >= 10) {
            this.#alamat = inputAlamat;
        } else {
            console.log(`Harus berupa String dan Minimal 10 Karakter`);
        }
    }

    getInfo() {
        return `Nama: ${this.nama} | Email: ${this.email} | Alamat: ${this.alamat}`;
    }
}

class Mahasiswa extends WargaKampus {
    constructor(nama, email, nim, jurusan) {
        super(nama, email, alamat)
        this.nim = nim;
        this.jurusan = jurusan;
    }

    getInfo() {
        return `Nama: ${this.nama} | Email: ${this.email} | NIM: ${this.nim} | Jurusan: ${this.jurusan} `;
    }

    kuliah(mataKuliah) {
        return `${this.nama} sedang mengikuti Mata Kuliah ${mataKuliah}`;
    }
}

class Dosen extends WargaKampus {
    constructor(nama, email, nidn, mataKuliah) {
        super(nama, email)
        this.nidn = nidn;
        this.mataKuliah = mataKuliah;
    }

    mengajar() {
        return `${this.nama} sedang mengajar mata kuliah ${this.mataKuliah}`;
    }

    getInfo() {
        return `Nama: ${this.nama} | Email: ${this.email} | NIDN: ${this.nidn} | Mata Kuliah: ${this.mataKuliah} | Alamat: ${this.alamat}`;
    }

}

const mhs1 = new Mahasiswa('Budi', 'budi@gmail.com', '211', 'Teknik Informatika');

console.log(mhs1.getInfo());
console.log(mhs1.kuliah('Algoritma'));