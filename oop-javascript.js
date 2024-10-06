const car = {
    // properties
    brand: 'Tesla',
    color: 'blue',
    maxSpeed: 120,
    chassisNumber: 222,

    // methods
    drive: () => {
        console.log('driving');
    },
    reverse: () => {
        console.log('reversing');
    },
    turn: () => {
        console.log('turning');
    },
}

console.log(car.brand);
console.log(car.color);
console.log(car.chassisNumber);
car.drive();