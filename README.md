# CareerKick

A modern, full-stack e-commerce web application designed to deliver a seamless shopping experience. CareerKick includes a robust backend API and a feature-rich React frontend with a beautiful UI, real-time updates, and secure authentication.

---

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Getting Started](#getting-started)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Overview](#api-overview)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Overview
CareerKick is a full-stack e-commerce solution with a focus on performance, scalability, and user experience. The application allows users to browse products, manage their cart, place orders, and handle authentication securely. The backend provides a RESTful API, while the frontend offers a responsive and interactive UI.

## Features
- User authentication (register, login, JWT-based)
- Product catalog with search and filtering
- Shopping cart management
- Order placement and order history
- Responsive, modern UI
- Secure API endpoints
- Modular code structure for scalability

## Tech Stack
### Frontend
- [React 19](https://react.dev/) (with Hooks)
- [Vite](https://vitejs.dev/) (build tool)
- [Redux](https://redux.js.org/) (state management)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) (styling)
- [Axios](https://axios-http.com/) (API requests)
- [Framer Motion](https://www.framer.com/motion/) (animations)

### Backend
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) (via [Mongoose](https://mongoosejs.com/))
- [JWT](https://jwt.io/) (authentication)
- [bcryptjs](https://www.npmjs.com/package/bcryptjs) (password hashing)
- [dotenv](https://www.npmjs.com/package/dotenv) (env config)

## Folder Structure
```
careerkick/
├── backend/      # Express.js API server
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── ...
├── frontend/     # React client app
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   └── ...
│   ├── index.html
│   └── ...
└── README.md
```

## Getting Started

### Backend Setup
1. **Navigate to the backend folder:**
   ```bash
   cd backend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Configure environment variables:**
   - Copy `.example.env` to `.env` and fill in your MongoDB URI and other secrets.
4. **Start the server:**
   ```bash
   npm start
   ```
   The backend runs by default on `http://localhost:5001`.

### Frontend Setup
1. **Navigate to the frontend folder:**
   ```bash
   cd frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend runs by default on `http://localhost:5173`.

## API Overview
The backend exposes RESTful endpoints for core e-commerce functionality:

### Auth
- `POST /api/users/register` — Register a new user
- `POST /api/users/login` — Login and receive JWT

### Products
- `GET /api/products` — Get all products
- `POST /api/products` — Add a new product
- `GET /api/products/search` — Search products

### Cart
- `GET /api/cart/:userId` — Get cart for user
- `POST /api/cart/:userId` — Add to cart
- `DELETE /api/cart/:userId/:productId` — Remove from cart

### Orders
- `POST /api/orders` — Place an order

## Usage
1. Register or login as a user from the frontend UI.
2. Browse products, search, and filter as needed.
3. Add products to your cart and proceed to checkout.
4. Place orders and view order history in your account section.

## Contributing
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License
This project is licensed under the MIT License.

---

## Assignment Feature Checklist

| Feature                                   | Implemented? |
|--------------------------------------------|:------------:|
| Product listing page                       |      ✅      |
| Product search/filter                      |      ✅      |
| Add to cart                               |      ✅      |
| Cart page (item list + total price)        |      ✅      |
| Responsive design (mobile + desktop)       |      ✅      |
| Store data in database (MongoDB)           |      ✅      |
| Order summary/confirmation                 |      ✅      |
| Dummy login/register system                |      ✅      |
| Use of framework (React, Express)          |      ✅      |
| API usage for fetching product data        |      ✅      |

---

## Screenshots

> _Add screenshots of your UI below. Example:_

![Home Page](frontend/screenshots/home.png)
![Product List](frontend/screenshots/products.png)
![Cart Page](frontend/screenshots/cart.png)

---

## Live Demo

> _If deployed, add your link below:_

[Live Demo](https://your-live-demo-link.com)

---

## How to Run Tests

_No automated tests included yet. To manually test, follow usage instructions and try all flows (register, login, add to cart, checkout, view orders)._

---

## Contact

For questions, open an issue or email: [support@careerkick.com](mailto:support@careerkick.com)

