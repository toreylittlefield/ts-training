import products from './products';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = '555 Some Street, Some City, Some State, Some Country';

const productName: string = 'fanny pack';
const product = products.find((product) => product.name === productName);

console.log(product);

if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}
