/*Create a TypeScript program for managing an online store's inventory. The program should include the following features:
1. Inventory object which has following data:  _id (readonly), name, product[], getAllProducts(), getProductsById()
2. Above mentioned product is an object which contains: _id (readonly), name, price
3. Extend a new object discountProduct which is same as product object but has an additional field discountPrice.
4. Write a function calculateDiscount() which would take the product object as parameter and returns discountPrice object. Calculate Discount logic = 12% off on all products

You can hard code product object (atleast 3 values)
Functions getAllProducts(), getProductsById() should be defined inside the object and called with the help of inventory object.
calculateDiscount() function is an independent function and not a part of any object.
*/

interface Product {
  readonly _id: number;
  name: string;
  price: number;
}

interface Inventory {
  readonly _id: number;
  name: string;
  products: Product[];
  getAllProducts(): Product[];
  getProductsById(id: number): Product | undefined;
}

interface DiscountProduct extends Product {
  discountPrice: number;
}

function calculateDiscount(product: Product): DiscountProduct {
    // 12 % discount
  const discountAmount = (product.price * 12) / 100;
  const discountPrice = product.price - discountAmount;

  return {
    ...product,
    discountPrice,
  };
}

// Hardcoding values
const inventory: Inventory = {
  _id: 1,
  name: 'Grocery',
  products: [
    { _id: 1, name: 'Apple', price: 100 },
    { _id: 2, name: 'Banana', price: 50 },
    { _id: 3, name: 'Orange', price: 75 },
  ],
  getAllProducts() {
    return this.products;
  },

  getProductsById(id: number) {
    return this.products.find((product:Product) => product._id === id);
  },
};
// Get all products
const allProducts = inventory.getAllProducts();
console.log('All Products:', allProducts);

// Search product by id
const productIdToSearch = 2;
const productById = inventory.getProductsById(productIdToSearch);

if (productById) {
  console.log(`Product with ID ${productIdToSearch}:`, productById);
  const discountedProduct = calculateDiscount(productById);
  console.log('Discounted Product:', discountedProduct);
} else {
  console.log(`Product with ID ${productIdToSearch} not found.`);
}
