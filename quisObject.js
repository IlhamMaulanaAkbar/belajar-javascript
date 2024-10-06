const restaurant = {
    name: "Wong Solo",
    city: "Banjarmasin",
    "favorite drink": "Teh Manis",
    "favorite food": "Ayam Lalapan",
    isVegan: false
}

const name = restaurant["name"];
const favoriteDrink = restaurant["favorite drink"]

console.log(name);
console.log(favoriteDrink);

module.exports = { restaurant, name, favoriteDrink };