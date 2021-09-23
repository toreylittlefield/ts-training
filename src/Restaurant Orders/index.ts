import { restaurants, Restaurant } from './restaurants';
import { orders, Order, PriceBracket } from './orders';

/// Add your getMaxPrice() function below:
const getMaxPrice = (price: PriceBracket): number => {
  switch (price) {
    case PriceBracket.Low:
      return 10.0;
    case PriceBracket.Medium:
      return 20.0;
    case PriceBracket.High:
      return 30.0;
  }
};
/// Add your getOrders() function below:
const getOrders = (price: PriceBracket, orders: Order[][]): Order[][] => {
  const filteredOrders: Order[][] = [];
  orders.forEach((restaurant: Order[]) => {
    const results = restaurant.filter((order: Order) => order.price <= getMaxPrice(price));
    filteredOrders.push(results);
  });
  return filteredOrders;
};
/// Add your printOrders() function below:
const printOrders = (restaurants: Restaurant[], orders: Order[][]) => {
  /**
     * Restaurant Name #1
        - Order 1: $9.99
        - Order 2: $8.99
        Restaurant Name #2
        - Order 1: $17.99
        - Order 2: $15.99
     */
  restaurants.forEach((restaurant: Restaurant, index) => {
    const { name } = restaurant;
    const ordersFromResto = orders[index];
    if (ordersFromResto.length) {
      console.log(`${name}`);
      ordersFromResto.forEach((order, idx) => {
        console.log(`- ${order.name} #${idx}: $${order.price}`);
      });
    }
  });
};
/// Main
const elligibleOrders = getOrders(PriceBracket.High, orders);
// console.log(elligibleOrders);
printOrders(restaurants, elligibleOrders);
