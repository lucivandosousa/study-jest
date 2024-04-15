const Product = require('../Product')

const product = new Product("Coca-Cola", 5.00)

describe("Test on product information", () => {

  test("should return that the stock property is undefined", () => {
    expect(product.stock).toBeUndefined()
  })

  test("should return that the description property is defined", () => {
    expect(product.description).toBeDefined()
  })

})