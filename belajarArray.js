const myArray = ["Ilham", 22.1, 10, false, 'Programming'];

myArray.push('JavaScript'); // Push = Menambahkan Nilai Dipaling Akhir Array 
myArray.pop('JavaScript'); // Pop = Menghapus Nilai Dipaling Akhir Array
myArray.shift(); // Shift = Menghapus nilai Dipaling awal Array (Index 0)
myArray.unshift("Akbar"); // unishift = Menambahkan nilai dipaling awal Array (Index 0)
delete myArray[1]; //Menghapus nilai pada index yang ada tetapi tidak sepenuhnya (Posisi Nilai Yang Dihapus Menjadi Kosong)
myArray.splice(1,1,'Jan')
console.log(myArray);
console.log("Panjang Nilai Array ada " + myArray.length + '.');