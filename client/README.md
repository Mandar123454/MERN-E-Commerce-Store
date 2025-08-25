# MERN E-Commerce Website

## Overview
A functional E-Commerce website built with MongoDB, ExpressJS, ReactJS, and Node.js. Features include product listing, cart management, and dynamic price updates.

## Features
- Product listing with images, names, prices, and descriptions
- Add to Cart functionality
- Cart management: update quantity, remove items
- Dynamic total price calculation
- Responsive, modern UI (custom CSS + Bootstrap)
- Backend API for products and cart

## Setup Guide
### Prerequisites
- Node.js & npm
- MongoDB (local or Atlas)

### Backend Setup
1. `cd server`
2. Install dependencies: `npm install`
3. Start MongoDB locally (or update connection string for Atlas)
4. Seed products: `node seed.js`
5. Start server: `node index.js` (runs on http://localhost:5000)

### Frontend Setup
1. `cd client`
2. Install dependencies: `npm install`
3. Start React app: `npm start` (runs on http://localhost:3000)

## API Endpoints
- `GET /items` - Fetch all products
- `POST /cart` - Add item to cart
- `DELETE /cart/:id` - Remove item from cart
- `GET /cart` - Get all cart items
- `PUT /cart/:id` - Update item quantity

## Database Schema
### Items Collection
- name: String
- price: Number
- image: String
- stock: Number
- description: String

### Cart Collection
- items: [{ productId, quantity }]

## Screenshots
See `/public/Dashboard.png`, `/public/Cart.png`, `/public/Results.png` for UI examples.

## Author
- Mandar Kajbaje

## MIT License
This Project is under MIT License.
