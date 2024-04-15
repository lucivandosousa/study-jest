module.exports = class Product {
  description;
  price;
  stock;

  constructor(description, price, stock = undefined) {
    this.description = description
    this.price = price
    this.stock = stock
  }
};
