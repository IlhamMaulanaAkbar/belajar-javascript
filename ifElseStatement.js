let motorbike = true;
let transport = false;


console.log("Persiapan Berangkat Ke Kampus");
if (motorbike) {
    console.log("Sepeda Motor Rusak. Gunakan Transportasi Umum")
} else if (transport) {
    console.log("Transportasi Umum Belum Datang, Pergi Ke Kampus Jalan Kaki");
} else {
    console.log("Bilang Izin Terlambat Ke Kampus Kepada Dosen");
} 
    
console.log("Berangkat");

// Menggunakan Ternary Operator
let motorbikes = true;
let transportation = false;

console.log("Persiapan Berangkat Ke Kampus");
console.log(motorbikes ? "Sepeda Motor Rusak. Gunakan Transportasi Umum" : transportation ? "Transportasi Umum Belum Datang, Pergi Ke Kampus Jalan Kaki" : "Bilang Izin Terlambat Ke Kampus Kepada Dosen");
console.log("Berangkat");

// Output:
// Persiapan Berangkat Ke Kampus
// Sepeda Motor Rusak. Gunakan Transportasi Umum
// Berangkat
