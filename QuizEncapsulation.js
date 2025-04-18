class Karyawan {
    #gaji = 0;

    constructor(nama, posisi) {
        this.nama = nama;
        this.posisi = posisi;
    }

    get gaji() {
        return `Gaji Bapak/Ibu ${this.nama} adalah Rp${this.#gaji}`;
    }

    set gaji(nominal) {
        if (typeof nominal !== "number" || !Number.isInteger(nominal)) {
            console.log('Nominal tidak valid. Harus angka bulat.');
            return;
        }

        if (nominal < 3000000) {
            console.log('Gaji tidak boleh kurang dari Rp3.000.000');
            return;
        }

        this.#gaji = nominal;
    }
}

// Contoh Penggunaan
const karyawan1 = new Karyawan('John', 'Koordinator Divisi');
const karyawan2 = new Karyawan('Wick', 'Staff Marketing');

karyawan1.gaji = 4000000;
console.log(karyawan1.gaji); // ✅ Gaji valid

karyawan2.gaji = 25000;      // ❌ Gaji tidak valid
console.log(karyawan2.gaji); // Tetap Rp0 karena tidak diset
