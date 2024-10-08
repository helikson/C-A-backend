import Order from "./order";
import OrderItem from "./order_item";

describe("Order unit tests", () => {
   it("should throw error when ID is empty", () => {
      expect(() => new Order("", "1", [])).toThrow("ID is required");
   });

   it("should throw error when CustomerID is empty", () => {
      expect(() => new Order("1", "", [])).toThrow("CustomerID is required");
   });

   it("should throw error when Items quantity is empty", () => {
      expect(() => new Order("1", "1", [])).toThrow("Item quantity must be greater than 0");
   });

   it("should calculate total", () => {
      const item = new OrderItem("1", "1", "Item 1", 150, 2);
      const order = new Order("1", "1", [item]);

      let total = order.total();

      expect(total).toBe(300);

      const item2 = new OrderItem("2", "1", "Item 2", 200, 4);
      const order2 = new Order("1", "1", [item, item2]);

      total = order2.total();

      expect(total).toBe(1100);
   });

   it("should throw error if the item quantity is less or equal 0", () => {
      expect(() => {
         const item = new OrderItem("1", "1", "Item 1", 150, 0);
         new Order("1", "1", [item]);
      }).toThrow("Quantity must be greater than 0");
   });
});
