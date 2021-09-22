import products from './products';

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

let shippingAddress: string = '555 Some Street, Some City, Some State, Some Country';

const productName: string = 'shirt';
const product = products.find((product) => product.name === productName);

console.log(product);

if (product?.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}

if (Number(product?.price) < 25) {
  shipping = 5;
} else {
  shipping = 0;
  console.log(`Free Shipping will be provided for this order since it is over $25`);
}

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}

if (product?.price) {
  taxTotal = Number(product.price) * taxPercent;
  total = Number(product.price) + taxTotal + shipping;
  console.log(`The total for this order is ${total}`);
}
