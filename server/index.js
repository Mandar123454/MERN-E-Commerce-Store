const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/mern_ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

// Product Schema
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  image: String,
  stock: Number,
  description: String
});
const Product = mongoose.model('Product', productSchema);

// Cart Schema
const cartSchema = new mongoose.Schema({
  items: [{ productId: mongoose.Schema.Types.ObjectId, quantity: Number }]
});
const Cart = mongoose.model('Cart', cartSchema);

// Sample API Endpoints
app.get('/items', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});
app.post('/cart', async (req, res) => {
  // Add item to cart logic
});
app.delete('/cart/:id', async (req, res) => {
  // Remove item from cart logic
});
app.get('/cart', async (req, res) => {
  // Get cart items logic
});
app.put('/cart/:id', async (req, res) => {
  // Update cart item quantity logic
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
