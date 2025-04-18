class Pengguna {
    constructor(nama, email) {
        this.nama = nama;
        this.email = email;
        this.isLogin = false;
    }

    login() {
        return this.isLogin = true;
    }

    logout() {
        return this.isLogin = false;
    }
}

class Anggota extends Pengguna {
    constructor(nama, email, idAnggota, bukuDipinjam) {
        super(nama, email);
        this.idAnggota = idAnggota;
        this.bukuDipinjam = bukuDipinjam;
    }

    pinjamBuku(judul) {
        return this.bukuDipinjam.push(judul);
    }

    kembalikanBuku(judul) {
        const index = this.bukuDipinjam.indexOf(judul);
        if (index !== -1) {
            this.bukuDipinjam.splice(index, 1);
        }
    }

    getInfo() {
        return `
        Nama: ${this.nama} | Email: ${this.email} | Jumlah Buku Dipinjam:  ${this.bukuDipinjam.join(", ")}`;
    }
}

class Petugas extends Pengguna {
    constructor(nama, email, idPetugas, shift) {
        super(nama, email);
        this.idPetugas = idPetugas;
        this.shift = shift;
    }

    ubahShift(shiftBaru) {
        this.shift = shiftBaru;
    }

    getInfo() {
        return `
        Nama: ${this.nama} | Email: ${this.email} | Shift: ${this.shift}`;
    }
}

const petugas1 = new Petugas('Nina', 'nina@gmail.com', '2211', 'Malam');
const anggota1 = new Anggota('Rudi', 'rudi@gmail,com', '2211', []);

anggota1.pinjamBuku("Atomic Habits");
console.log(anggota1.getInfo());
console.log(petugas1.getInfo());