# 🛍️ E-Commerce Shopping Cart System

A **full-stack e-commerce application** with product browsing, cart management, and complete checkout workflow. Built with **React 18**, **Node.js/Express**, and **MongoDB**.

[![Node.js](https://img.shields.io/badge/Node.js-v16+-green)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-v18-blue)](https://react.dev/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.2.7-green)](https://mongodb.com/)
[![Express](https://img.shields.io/badge/Express-Latest-black)](https://expressjs.com/)
[![Vite](https://img.shields.io/badge/Vite-v4.5-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow)](LICENSE)

---

## ✨ Key Features

✅ **1100+ Products** across 14 categories with real images  
✅ **User Authentication** - Register, Login with JWT & bcrypt  
✅ **Smart Search** - Filter products by name/category  
✅ **Shopping Cart** - Add/remove items, persistent storage  
✅ **Secure Checkout** - Shipping address, billing info, order creation  
✅ **Auto-Generated Order Numbers** - Unique format: ORD-YYYYMMDD-XXXXX  
✅ **Dark Theme UI** - Gradient animations, 3D hover effects  
✅ **Responsive Design** - Works on desktop, tablet, mobile  
✅ **Real Product Images** - picsum.photos integration  
✅ **Duplicate Email Support** - Register same email multiple times  

---

## 🚀 Quick Start (3 Steps)

### Step 1: Start MongoDB
```bash
mongod
```

### Step 2: Start Backend (in new terminal)
```bash
cd backend
npm install
npm start
```
Expected output: `[INFO] Server running on port 5000`

### Step 3: Start Frontend (in another terminal)
```bash
cd frontend
npm install
npm run dev
```
Expected output: `VITE ready in XXX ms → http://localhost:5173/`

### Step 4: Open Browser
```
http://localhost:5173
```

**That's it! App is ready to use! 🎉**

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI framework
- **Vite 4.5** - Lightning-fast build tool
- **Redux** - State management
- **Axios** - API client
- **CSS3** - Dark theme with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB 8.2.7** - NoSQL database
- **JWT** - Secure authentication
- **bcryptjs** - Password hashing
- **Mongoose** - MongoDB ODM

---

## 📁 Complete Project Structure

```
E-Commerce Shopping Cart System/
│
├── backend/
│   ├── src/
│   │   ├── server.js                 # Express server entry point
│   │   ├── config/
│   │   │   └── database.js           # MongoDB connection
│   │   │
│   │   ├── controllers/
│   │   │   ├── authController.js     # Register/Login logic
│   │   │   ├── cartController.js     # Cart operations (Add, Remove, Update)
│   │   │   ├── orderController.js    # Checkout & Order creation
│   │   │   └── productController.js  # Product listing & search
│   │   │
│   │   ├── middleware/
│   │   │   ├── authMiddleware.js     # JWT token verification
│   │   │   └── errorHandler.js       # Global error handling
│   │   │
│   │   ├── models/
│   │   │   ├── User.js               # User schema (email, password, profile)
│   │   │   ├── Product.js            # Product schema (name, price, image, stock)
│   │   │   ├── Cart.js               # Cart schema (items, totals)
│   │   │   └── Order.js              # Order schema (items, address, status)
│   │   │
│   │   ├── routes/
│   │   │   ├── authRoutes.js         # /auth/register, /auth/login
│   │   │   ├── productRoutes.js      # /products, /products/search
│   │   │   ├── cartRoutes.js         # /cart/add, /cart/remove, /cart/clear
│   │   │   └── orderRoutes.js        # /orders/create, /orders/my-orders
│   │   │
│   │   └── utils/
│   │       └── logger.js             # Logging utility
│   │
│   ├── seed.js                       # 🌱 Database seeder (1100+ products)
│   ├── package.json
│   ├── .env                          # Environment variables
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx            # Navigation bar
│   │   │   ├── ProductCard.jsx       # Product display card
│   │   │   ├── Cart.jsx              # Shopping cart
│   │   │   └── Checkout.jsx          # Checkout form
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.jsx              # Landing page
│   │   │   ├── Shop.jsx              # Product listing
│   │   │   ├── LoginRegister.jsx     # Auth page
│   │   │   ├── Cart.jsx              # Cart page
│   │   │   └── OrderConfirmation.jsx # Order success page
│   │   │
│   │   ├── redux/
│   │   │   ├── store.js              # Redux store
│   │   │   ├── authSlice.js          # Auth state
│   │   │   ├── cartSlice.js          # Cart state
│   │   │   └── productSlice.js       # Product state
│   │   │
│   │   ├── services/
│   │   │   ├── authService.js        # Auth API calls
│   │   │   ├── cartService.js        # Cart API calls
│   │   │   ├── productService.js     # Product API calls
│   │   │   └── orderService.js       # Order API calls
│   │   │
│   │   ├── styles/
│   │   │   ├── App.css               # Root styles with dark theme
│   │   │   ├── Header.css            # Header animations
│   │   │   ├── ProductCard.css       # 3D card effects
│   │   │   └── animations.css        # Gradient animations
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.html
│   │
│   ├── package.json
│   ├── vite.config.js
│   └── .env
│
└── README.md                         # This file
```

---

## ⚙️ Installation & Setup

### Prerequisites
- **Node.js** v16 or higher
- **MongoDB** 4.4 or higher (local or MongoDB Atlas)
- **npm** v8 or higher

### 1. Clone/Extract Project
```bash
cd "E-Commerce Shopping Cart System"
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `backend/.env` file:
```env
MONGODB_URI=mongodb://localhost:27017/ecommerce
PORT=5000
JWT_SECRET=your_super_secret_jwt_key_12345
NODE_ENV=development
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `frontend/.env` file:
```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Seed Database (1100+ Products)
```bash
cd backend
node seed.js
```

Output:
```
✅ Connected to MongoDB
🗑️ Cleared existing products
📦 Generated 1132 products...
📤 Inserted 100/1132 products
...
✅ Successfully added 1132 products!
📊 Categories: 14
🏷️ Average products per category: 81
```

---

## 🏃 Running the Application

### Terminal 1: MongoDB
```bash
mongod
```
Expected: `MongoDB is ready to accept connections`

### Terminal 2: Backend
```bash
cd backend
npm start
```
Expected: 
```
[INFO] 2026-04-20T18:48:14.007Z: Server running on port 5000
[INFO] 2026-04-20T18:48:14.030Z: MongoDB Connected: localhost
```

### Terminal 3: Frontend
```bash
cd frontend
npm run dev
```
Expected:
```
VITE v4.5.14  ready in 390 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

### Access Application
Open browser: **http://localhost:5173**

---

## 🔌 API Endpoints

### Authentication Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register new user |
| POST | `/api/auth/login` | Login user & get JWT token |

### Product Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/products` | Get all products (paginated) |
| GET | `/api/products?category=Electronics` | Filter by category |
| GET | `/api/products?search=laptop` | Search products |
| GET | `/api/products/:id` | Get product details |

### Cart Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/cart` | Get user's cart |
| POST | `/api/cart/add` | Add product to cart |
| PUT | `/api/cart/update/:productId` | Update item quantity |
| DELETE | `/api/cart/remove/:productId` | Remove item |
| DELETE | `/api/cart/clear` | Clear entire cart |

### Order Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/orders/create` | Create order (checkout) |
| GET | `/api/orders/my-orders` | Get user's orders |
| GET | `/api/orders/:orderId` | Get order details |

---

## 📊 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed with bcryptjs),
  name: String,
  phone: String,
  address: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Product Collection (1132 documents)
```javascript
{
  _id: ObjectId,
  name: String,
  description: String,
  price: Number,
  originalPrice: Number,
  image: String (picsum.photos URL),
  category: String (14 categories),
  subcategory: String,
  stock: Number,
  sku: String (unique),
  rating: Number (0-5 scale),
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Order Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId (reference to User),
  orderNumber: String (ORD-20260420-XXXXX),
  items: [
    {
      productId: ObjectId,
      name: String,
      price: Number,
      quantity: Number,
      image: String
    }
  ],
  totalAmount: Number,
  shippingAddress: Object,
  billingAddress: Object,
  paymentMethod: String,
  paymentStatus: String,
  orderStatus: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Cart Collection
```javascript
{
  _id: ObjectId,
  userId: ObjectId,
  items: [
    {
      productId: ObjectId,
      quantity: Number,
      price: Number
    }
  ],
  totalPrice: Number,
  totalItems: Number,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🧪 Complete Testing Workflow

### 1. Register New User
- Go to http://localhost:5173
- Click "Register"
- Enter email & password
- Submit

### 2. Login
- Use registered credentials
- Get JWT token stored in localStorage

### 3. Browse Products
- Click "Shop" page
- View 1132 products with images
- See prices, ratings, descriptions

### 4. Search Products
- Use search bar
- Examples: "laptop", "charger", "watch"
- Results filter in real-time
- Images load from picsum.photos

### 5. Add to Cart
- Click "Add to Cart" on product
- See cart count increase
- Cart updates in real-time

### 6. View Cart
- Click cart icon
- See all items with quantities
- View cart total
- Can update quantities or remove items

### 7. Checkout
- Click "Proceed to Checkout"
- Enter shipping address
- Enter billing address
- Select payment method
- Click "Place Order"

### 8. Order Confirmation
- See unique order number: **ORD-20260420-XXXXX**
- View order details
- Order saved to MongoDB
- Can view order history

---

## 🎨 UI/UX Features

### Dark Theme ✨
- **Dark background** with accent colors
- **Gradient animations** on hero section
- **Smooth color transitions** on hover
- **Glassmorphism** effect on modals

### 3D Effects 🎭
- **Product cards** scale up on hover (1.05x)
- **Brightness increase** on image hover
- **Rotation animation** (1deg tilt)
- **Shadow depth** effects
- **Glowing text** on buttons

### Animations 💫
- **Fade-in animations** for page load
- **Slide-in animations** for modals
- **Bounce animations** on buttons
- **Spin animations** on loading states
- **Gradient animation** on hero background

### Responsive Design 📱
- **Mobile-first** approach
- **Tablet optimized** layouts
- **Desktop HD** support
- **Touch-friendly** buttons
- **Flexible containers** with flexbox/grid

---

## 📦 Product Categories (14 Total)

1. **Electronics** - 80+ products (Chargers, CPU, GPU, RAM, etc.)
2. **Accessories** - 80+ products (Cases, Cables, Adapters, etc.)
3. **Home & Garden** - 80+ products (Lighting, Smart Home, etc.)
4. **Fashion** - 80+ products (T-Shirts, Jeans, Shoes, etc.)
5. **Books & Media** - 80+ products (Books, DVDs, eBooks, etc.)
6. **Sports & Outdoors** - 80+ products (Fitness, Camping, Bikes, etc.)
7. **Gaming** - 80+ products (Peripherals, Consoles, etc.)
8. **Beauty & Personal Care** - 80+ products (Skincare, Makeup, etc.)
9. **Toys & Games** - 80+ products (Figures, Puzzles, LEGO, etc.)
10. **Pet Supplies** - 80+ products (Food, Toys, Beds, etc.)
11. **Office Supplies** - 80+ products (Pens, Paper, Folders, etc.)
12. **Tools & Hardware** - 80+ products (Power Tools, Screwdrivers, etc.)
13. **Jewelry** - 80+ products (Rings, Necklaces, Watches, etc.)
14. **Automotive** - 80+ products (Car Accessories, Tools, etc.)

---

## 🔒 Security Features

✅ **JWT Authentication** - Secure token-based auth  
✅ **Password Hashing** - bcryptjs with salt rounds  
✅ **Protected Routes** - Auth middleware on all protected endpoints  
✅ **Environment Variables** - Secrets stored in .env  
✅ **CORS Enabled** - Cross-origin requests handled safely  
✅ **Input Validation** - Server-side validation on all inputs  

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows: Kill all node processes
taskkill /IM node.exe /F

# Find and kill specific port
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### MongoDB Connection Failed
```bash
# Ensure MongoDB is running
mongod

# Check .env has correct connection string
MONGODB_URI=mongodb://localhost:27017/ecommerce
```

### Images Not Loading
- Refresh browser and clear cache
- Ensure seed.js completed successfully
- Check network tab for image URL errors
- picsum.photos should be accessible

### Cart Not Saving
- Check browser localStorage (DevTools → Application)
- Verify JWT token is stored
- Ensure Redux is connected properly
- Check browser console for errors

### Checkout Failing
- Verify all address fields are filled
- Check order creation endpoint response
- Look for validation errors in console
- Ensure MongoDB has enough disk space

---

## 📝 Environment Variables

### backend/.env
```env
# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce

# Server
PORT=5000
NODE_ENV=development

# JWT
JWT_SECRET=your_jwt_secret_key_here_change_this

# Logging
LOG_LEVEL=info
```

### frontend/.env
```env
# API Configuration
VITE_API_URL=http://localhost:5000/api

# Environment
VITE_ENV=development
```

---

## 🎯 Key Implementation Details

### Authentication Flow
1. User registers → Password hashed with bcryptjs
2. User login → Credentials verified
3. JWT token generated → Stored in localStorage
4. Token sent with every API request
5. Middleware verifies token → Grants access

### Cart Management
1. Products added to cart → Redux state updated
2. Quantities can be modified → Total recalculated
3. Cart persisted in localStorage
4. Cart cleared on checkout

### Order Creation
1. Checkout form validation
2. Order number auto-generated (ORD-YYYYMMDD-XXXXX)
3. Order saved to MongoDB
4. Cart cleared after order
5. Order confirmation displayed

### Image Management
- Using **picsum.photos** API
- Each product gets unique random image
- URLs format: `https://picsum.photos/300/300?random={productId}`
- 100% reliable, no CORS issues

---

## 🚀 Performance Optimizations

✅ **Lazy Loading** - Images load on demand  
✅ **Pagination** - Products paginated (20 per page)  
✅ **Caching** - Redux caches product data  
✅ **Minification** - Vite bundles optimized  
✅ **Code Splitting** - Route-based splitting  
✅ **Async Operations** - Non-blocking API calls  

---

## 📄 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Order history & tracking page
- [ ] User profile management
- [ ] Product reviews & ratings system
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] SMS order updates
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Multiple payment methods

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

---

## 👨‍💻 Author

**Full-Stack E-Commerce Platform**  
Built with ❤️ for seamless shopping experience

---

**🌟 Ready to shop? Start the app now!**

```bash
# Terminal 1
mongod

# Terminal 2
cd backend && npm start

# Terminal 3
cd frontend && npm run dev

# Browser
http://localhost:5173
```

**Happy Shopping! 🛒✨**
