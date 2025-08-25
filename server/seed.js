const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mern_ecommerce')
  .then(() => {
    console.log('Connected to MongoDB');
    insertProducts();
  })
  .catch(err => console.error('Connection error', err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  stock: Number,
  description: String,
});

const Product = mongoose.model('Product', productSchema);

const products = [
  {
    name: "Air Sneakers",
    price: 2499,
  image: "/Air Sneakers.png",
    stock: 20,
    description: "Comfortable and stylish running sneakers."
  },
  {
    name: "Bluetooth Headphones",
    price: 1599,
  image: "/Bluetooth Headphones.png",
    stock: 30,
    description: "Wireless headphones with premium sound."
  },
  {
    name: "Smart Watch",
    price: 3499,
  image: "/Smart Watch.png",
    stock: 10,
    description: "Multifunction smartwatch with health tracking."
  },
  {
    name: "Eco Water Bottle",
    price: 399,
  image: "/Eco Water Bottle.png",
    stock: 50,
    description: "Reusable BPA-free water bottle."
  }
];

async function insertProducts() {
  try {
    await Product.deleteMany({}); // Clear existing products
    await Product.insertMany(products);
    console.log('Sample products inserted!');
  } catch (err) {
    console.error('Error inserting products:', err);
  } finally {
    mongoose.connection.close();
  }
}
