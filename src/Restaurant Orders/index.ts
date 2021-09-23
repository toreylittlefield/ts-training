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

/// Main
const elligibleOrders = getOrders(PriceBracket.High, orders);
console.log(elligibleOrders);
// printOrders(restaurants, elligibleOrders);
