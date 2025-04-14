class Pengguna {
    constructor(nama, email, isLogin) {
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

class Mahasiswa extends Pengguna {
    constructor(nama, email, nim, jurusan, isLogin) {
        super(nama, email, isLogin);
        this.nim = nim;
        this.jurusan = jurusan;
    }

    getDataMahasiswa() {
        return `Informasi Mahasiswa:
        Nama: ${this.nama}
        Email: ${this.email}
        NIM: ${this.nim}
        Jurusan: ${this.jurusan}
        Login: ${this.isLogin}
        `;
    }
}

const mhs1 = new Mahasiswa('Wahyu', 'wahyu@gmail.com', '201', 'TI');

mhs1.login();
console.log(mhs1.getDataMahasiswa());
mhs1.logout();
console.log(mhs1.getDataMahasiswa());