"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function formatString(input, toUpper) {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();
}
const cheackvalue = formatString("hello", false);
console.log(cheackvalue);
function filterByRating(items) {
    return items.filter((item) => item.rating >= 4);
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 3.0 },
];
const ratings = filterByRating(books);
console.log(ratings);
function concatenateArrays(...arrays) {
    const result = [];
    arrays.forEach((array) => {
        result.push(...array);
    });
    return result;
}
const value = concatenateArrays(["a", "b"], ["c"], ["c"]);
console.log(value);
class Vehicle {
    constructor(Make, Year) {
        this.make = Make;
        this.year = Year;
    }
    getInfO() {
        return `"Make":${this.make},Year:${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `"Model":${this.model}`;
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
const carinfo = myCar.getInfO();
const carinfo2 = myCar.getModel();
console.log(carinfo);
console.log(carinfo2);
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
const test = processValue(5);
console.log(test);
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    let maxPriceProduct = products[0];
    for (let product of products) {
        if (product.price > maxPriceProduct.price) {
            maxPriceProduct = product;
        }
    }
    return maxPriceProduct;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
const highestPriceProduct = getMostExpensiveProduct(products);
console.log(highestPriceProduct);
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    if (day === Day.Friday || day === Day.Saturday) {
        return 'Weekend';
    }
    else {
        return 'Weekday';
    }
}
const DayofWeek = getDayType(Day.Sunday);
console.log(DayofWeek);
function squareAsync(n) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (n < 0) {
                    reject(new Error("Negative number"));
                }
                else {
                    resolve(n * n);
                }
            }, 1000);
        });
    });
}
squareAsync(-4)
    .then(result => console.log(result))
    .catch(error => console.error(error));
