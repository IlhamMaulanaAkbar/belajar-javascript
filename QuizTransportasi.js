class Transportasi {
    constructor(nama, kapasitas) {
        this.nama = nama;
        this.kapasitas = kapasitas;
    }

    getInfo() {
        return `Nama: ${this.nama} | Kapasitas: ${this.kapasitas}`;
    }
}

class Bus extends Transportasi {
    constructor(nama, kapasitas, trayek) {
        super(nama, kapasitas);
        this.trayek = trayek;
    }

    getInfo() {
        return `Nama: ${this.nama} | Kapasitas: ${this.kapasitas} | Trayek: ${this.trayek}`;
    }
}

class Pesawat extends Transportasi {
    constructor(nama, kapasitas, maskapai, jarakTempuh) {
        super(nama, kapasitas);
        this.maskapai = maskapai;
        this.jarakTempuh = jarakTempuh;
    }

    getInfo() {
        return `Nama: ${this.nama} | Maskapai: ${this.maskapai} | Kapasitas: ${this.kapasitas} | Jarak Tempuh: ${this.jarakTempuh}`;
    }
}

class Kapal extends Transportasi {
    constructor(nama, kapasitas, jenisKapal) {
        super(nama, kapasitas);
        this.jenisKapal = jenisKapal;
    }

    getInfo() {
        return `Nama: ${this.nama} | Kapasitas: ${this.kapasitas} | Jenis Kapal: ${this.jenisKapal}`;
    }
}

const bus = new Bus("TransJakarta", 60, "Blok M - Kota");
console.log(bus.getInfo());
// Output: Bus: TransJakarta | Kapasitas: 60 | Trayek: Blok M - Kota
const pesawat = new Pesawat("Airbus A320", 180, "Garuda", 1200);
console.log(pesawat.getInfo());
// Output: Pesawat: Airbus A320 | Maskapai: Garuda | Kapasitas: 180 | Jarak: 1200 km
const kapal = new Kapal("KM Kelud", 1000, "Penumpang");
console.log(kapal.getInfo());
// Output: Kapal: KM Kelud | Kapasitas: 1000 | Jenis: Penumpang


