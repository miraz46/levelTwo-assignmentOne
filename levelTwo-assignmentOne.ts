// Problem - 1
// function formatString(input: string, toUpper?: boolean): string {
//     if (toUpper === false) {
//         return input.toLowerCase();
//     } else {
//         return input.toUpperCase();
//     }
// }





// Problem - 2
// function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
//     const arr: { title: string; rating: number }[] = [];
//     const result = items.map(item => {
//         if (item.rating >= 4) {
//             arr.push(item)
//         }
//     });
//     return arr
// }





// Problem - 3 
// function concatenateArrays<T>(...arrays: T[][]): T[] {
//     const result: T[] = [];
//     for (let arr of arrays) {
//         result.push(...arr);
//     }
//     return result;
// }







// Problem - 4 
// class Vehicle {
//     private make: string;
//     private year: number;

//     constructor(make: string, year: number) {
//         this.make = make;
//         this.year = year;
//     }
//     getInfo() {
//         return `Make: ${this.make}, Year: ${this.year}`
//     }
// }
// class Car extends Vehicle {
//     private model: string;
//     constructor(make: string, year: number, model: string) {
//         super(make, year)
//         this.model = model;
//     }
//     getModel() {
//         return `Model: ${this.model}`
//     }
// }





// Problem - 5
// function processValue(value: string | number): number {
//     if (typeof value === 'string') {
//         return value.length
//     } else {
//         return value * 2
//     }
// }






// Problem - 6 
// interface Product {
//     name: string;
//     price: number;
// }
// function getMostExpensiveProduct(products: Product[]): Product | null {
//     if (products.length === 0) {
//         return null;
//     } else {
//         let expensive = products[0]
//         for (let product of products) {
//             if (product.price > expensive.price) {
//                 expensive = product
//             }
//         }
//         return expensive;
//     }
// }





// Problem - 7

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
function getDayType(day: Day): string {
    if (day === Day.Saturday || day === Day.Sunday) {
        return "Weekend"
    } else {
        return "Weekday"
    }
}