import products from './products';

const productName: string = 'beanie';
const product = products.find((product) => product.name === productName);

console.log(product);

if (product.preOrder === true) {
  console.log('We will send you a message when your product is on its way.');
}
