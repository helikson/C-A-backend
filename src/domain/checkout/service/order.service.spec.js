import Customer from "../../customer/entity/customer";
import OrderService from "./order.service";
import Order from "../entity/order";
import OrderItem from "../entity/order_item";

describe("Order service unit tests", () => {
  it("should place an order", () => {
    const customer = new Customer("c1", "Customer 1");
    const item1 = new OrderItem("i1", "p1", "Item 1", 10, "1");

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toBe(5);
    expect(order.total()).toBe(10);
  });

  it("should order must have at least one item", () => {
    expect(() => {
      const customer = new Customer("c1", "Customer 1");
      OrderService.placeOrder(customer, []);
    }).toThrow("Order must have at least one item");
  });

  it("should validate customer", () => {
    expect(() => {
      const item1 = new OrderItem("i1", "p1", "Item 1", 10, "1");
      OrderService.placeOrder(null, [item1]);
    }).toThrow("Customer is required");
  });

  it("should get total of all orders", () => {
    const item1 = new OrderItem("1", "1", "Item 1", 100, 2);
    const item2 = new OrderItem("2", "2", "Item 2", 200, 1);

    const order1 = new Order("1", "1", [item1]);
    const order2 = new Order("2", "2", [item2]);

    const total = OrderService.total([order1, order2]);

    expect(total).toBe(400);
  });
});
