function formatString(input: string, toUpper?: boolean): string {
    return toUpper === false ? input.toLowerCase() : input.toUpperCase();

}

const cheackvalue = formatString("hello",false);
console.log(cheackvalue);




function filterByRating( items: { title: string; rating: number }[]):{ title: string; rating: number }[] {
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



function concatenateArrays<T>(...arrays: T[][]): T[] {
 const result: T[] = [];
 arrays.forEach((array) => {
   result.push(...array);
 });
 return result;
}

const value = concatenateArrays(["a", "b"], ["c"], ["c"]);
console.log(value);



class Vehicle {
 private make: string;
 private year: number;

 constructor(Make: string, Year: number) {
   this.make = Make;
   this.year = Year;
 }

 getInfO() {
   return `"Make":${this.make},Year:${this.year}`;
 }
}
class Car extends Vehicle {
 private model: string;
 constructor(make: string, year: number, model: string) {
   super(make, year);
   this.model = model;
 }

 getModel() {
   return `"Model":${this.model}`;
 }
}

const myCar = new Car("Toyota", 2020, "Corolla");

const carinfo:string = myCar.getInfO();
const carinfo2: string = myCar.getModel();
console.log(carinfo);
console.log(carinfo2);





function processValue(value: string | number): number {
 if (typeof value === "string") {
   return value.length;
 } else {
   return value * 2;
 }
}
const test: string | number = processValue(5);
console.log(test);



interface Product {
 name: string;
 price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
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






enum Day {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}

function getDayType(day: Day): string{
if(day===Day.Sunday||day===Day.Saturday){
    return 'Weekend'
}
else{
 return 'Weekday'
}
}

const DayofWeek:string=getDayType(Day.Sunday)
console.log(DayofWeek)





async function squareAsync (n: number): Promise<number> {
 return new Promise ((resolve, reject) => {
   setTimeout(() => {
     if (n < 0) {
       reject(new Error("Negative number"));
     } else {
       resolve(n * n);
     }
   }, 1000); 
 });
}

squareAsync(-4)
.then(result => console.log(result))  
 .catch(error => console.error(error));


















