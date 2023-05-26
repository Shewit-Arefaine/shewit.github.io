
class Product {
  constructor(name, price, image, quantity, id = null) {
    this.id = ++counter;
    this.name = name;
    this.price = price;
    this.image = image;
    this.quantity = quantity;
  }

  save() {
    
    dbProducts.push(this);
    return this;
  }

  edit() {
    const index = dbProducts.findIndex((user) => user.id === this.id);

    if (index === -1) throw "Product doesn't exist!";

    if (this.quantity == 0) dbProducts.splice(index, 1);
    else dbProducts.splice(index, 1, this);

    return this;
  }

  static getAll() {
    return dbProducts;
  }

  static findById(id) {
    const product = dbProducts.find((product) => product.id == id);

    if (product === undefined) throw "Product doesn't exist!";

    return product;
  }

  static delete(id) {
    const index = dbProducts.findIndex((product) => product.id == id);

    if (index === -1) throw "Product doesn't exist!";

    const product = dbProducts[index];
    dbProducts.splice(index, 1);

    return product;
  }
}

let counter = 0;
let dbProducts = [
  new Product("Chloe perfume", 170, "images/chloe.jpg", 20),
  new Product("Chloe Love story", 140, "images/love.jpeg", 10),
  new Product("Narciso", 79, "images/Narciso.jpeg",10 ),
];

module.exports = Product;
