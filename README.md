# 🏠 MERN Estate - Real Estate Application

A full-stack real estate web application built with the **MERN** stack (MongoDB, Express, React, Node.js) and styled with **Tailwind CSS**. This application provides a modern platform for listing, browsing, and managing real estate properties.

## ✨ Features

- **User Authentication** - Secure signup and login with JWT tokens
- **Property Listings** - Browse and search real estate properties
- **Advanced Search** - Filter properties by location, price, amenities, and more
- **User Profiles** - Manage personal listings and saved properties
- **Property Details** - View comprehensive information about each property
- **Responsive Design** - Mobile-friendly interface built with Tailwind CSS
- **Modern UI Components** - Interactive elements using React Icons and Swiper
- **State Management** - Redux Toolkit for efficient state handling
- **Persistent Storage** - Redux Persist for local state persistence

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **Redux Persist** - Local storage persistence
- **React Router DOM** - Client-side routing
- **React Icons** - Icon library
- **Swiper** - Touch slider component
- **Firebase** - Authentication and services

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web server framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication tokens
- **bcryptjs** - Password hashing
- **Cookie Parser** - Cookie middleware
- **dotenv** - Environment configuration

### Development Tools
- **Nodemon** - Auto-restart server during development
- **ESLint** - Code linting
- **Babel** - JavaScript transpiler
- **Webpack** - Module bundler

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- MongoDB (local or Atlas connection)
- Git

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Ahamid047/Mern-Estate01.git
cd Mern-Estate01
```

### 2. Install Dependencies

Install root dependencies:
```bash
npm install
```

Install client dependencies:
```bash
npm install --prefix client
```

### 3. Environment Setup

Create a `.env` file in the root directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
FIREBASE_API_KEY=your_firebase_api_key
NODE_ENV=development
```

Create a `.env` file in the `client` directory:
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_API_URL=http://localhost:5000
```

### 4. Run the Application

**Development Mode:**
```bash
npm run dev
```

**Production Mode:**
```bash
npm start
```

**Build for Production:**
```bash
npm run build
```

The frontend will be available at `http://localhost:5173` (Vite default)
The backend will run on `http://localhost:5000` (configurable)

## 📁 Project Structure

```
Mern-Estate01/
├── api/                 # Backend server
│   ├── index.js        # Server entry point
│   ├── models/         # Database models
│   ├── routes/         # API routes
│   ├── controllers/     # Route controllers
│   └── middleware/      # Custom middleware
├── client/             # Frontend React app
│   ├── src/
│   │   ├── components/ # Reusable components
│   │   ├── pages/      # Page components
│   │   ├── redux/      # Redux store, slices
│   │   ├── App.jsx     # Main App component
│   │   └── main.jsx    # Entry point
│   ├── public/         # Static assets
│   └── vite.config.js  # Vite configuration
├── .env                # Environment variables (root)
├── package.json        # Root dependencies
└── README.md          # This file
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for secure authentication:

- Passwords are hashed using **bcryptjs**
- JWT tokens are stored in HTTP-only cookies
- Protected routes require valid authentication
- Firebase integration for additional auth options

## 🌐 API Routes

### Users
- `POST /api/users/signup` - User registration
- `POST /api/users/signin` - User login
- `POST /api/users/logout` - User logout
- `GET /api/users/profile` - Get user profile (protected)
- `PUT /api/users/profile` - Update user profile (protected)

### Properties
- `GET /api/properties` - Get all properties
- `GET /api/properties/:id` - Get property details
- `POST /api/properties` - Create new property (protected)
- `PUT /api/properties/:id` - Update property (protected)
- `DELETE /api/properties/:id` - Delete property (protected)
- `GET /api/properties/search` - Search properties

## 🎨 Styling

The application uses **Tailwind CSS** for styling with custom configurations:
- Responsive design for mobile, tablet, and desktop
- Custom color schemes
- Utility-first CSS approach
- Optimized production builds

## 📦 Build Information

### Development
```bash
npm run dev              # Start development server
```

### Production Build
```bash
npm run build            # Build frontend and install dependencies
npm start                # Start production server
```

The build script automatically:
1. Installs root dependencies
2. Installs client dependencies
3. Builds the React frontend with Vite
4. Prepares for production deployment

## 🚢 Deployment

To deploy this application:

1. **Frontend** - Deploy `client/dist` to services like Vercel, Netlify, or GitHub Pages
2. **Backend** - Deploy to services like Heroku, Railway, or AWS

Update environment variables for production URLs and credentials.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License - see the LICENSE file for details.

## 👨‍💻 Author

**Ahamid047**
- GitHub: [@Ahamid047](https://github.com/Ahamid047)

## 🐛 Issues & Support

If you encounter any issues or have questions:
1. Check existing [GitHub Issues](https://github.com/Ahamid047/Mern-Estate01/issues)
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 📚 Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)

## 🎯 Future Enhancements

- [ ] Advanced property filters and sorting
- [ ] Map integration for property locations
- [ ] Image upload and gallery
- [ ] Property favorites/wishlist
- [ ] User reviews and ratings
- [ ] Email notifications
- [ ] Admin dashboard
- [ ] Payment integration

---

**Happy coding! 🚀**
