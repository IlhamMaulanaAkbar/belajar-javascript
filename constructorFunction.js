// versi function
function Car(brand, color, maxSpeed, chassisNumber){
    // keyword (this) berguna untuk mengakses nilai properti atau method dari objek yang kita inginkan
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this.chassisNumber = chassisNumber;
}

// Penamaan fungsi constructor function diawali dengan huruf kapital, contoh (Car) bukan (car), untuk membedakan function biasa dengan constructor function
Car.prototype.drive = function(){
    console.log(`${this.brand} ${this.color} is driving`);
}

Car.prototype.reverse = function(){
    console.log(`${this.brand} ${this.color} is reversing`);
}

Car.prototype.turn = function(){
    console.log(`${this.brand} ${this.color} is turning`);
}

// membuat objek mobil dengan constructor function Car
// keyword (new) berfungsi untuk mengembalikan sebuah objek
const car1 = new Car('Toyota', 'Blue', 200, 'toyota-1');
const car2 = new Car('Honda', 'Silver', 150, 'honda-1');
const car3 = new Car('Suzuki', 'Red', 170, 'toyota-1');

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.reverse();
car3.turn();

