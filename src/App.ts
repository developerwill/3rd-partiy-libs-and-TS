import "reflect-metadata";
import * as Transformer from "class-transformer";
import { Product } from "./models/product";

const products = [
    {title: 'A Carpet', price: 29.99},
    {title: 'A Book', price: 10.99}
];

//const p1 = new Product('A book', 12.99);

/*const loadedProducts = products.map(prod => {
    return new Product(prod.title, prod.price);
});*/

const loadedProducts = Transformer.plainToInstance(Product, products);

for (const prod of loadedProducts) {
    console.log(prod.getInformation());
}
