# 🧳 Stayza

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A modern, full-stack travel listing application built with the MERN stack. Features comprehensive CRUD operations, a premium custom design system, dark mode, and seamless sorting/filtering.

## ✨ Key Features

- **🏠 Full CRUD Operations**: Seamlessly Create, Read, Update, and Delete travel listings.
- **🎨 Premium Custom Design**: Completely bespoke UI built with CSS Variables, Flexbox, and Grid (No Bootstrap). Features glassmorphism headers and responsive layouts.
- **⚡ Enhanced UX**: Features Skeleton Loading states and "Load More" pagination for a premium experience.
- **🚀 High Performance**: Optimized with MongoDB Indexes, `.lean()` queries, Gzip compression, and caching strategies.
- **🛡️ Enterprise Security**: Protected with `Helmet` (Secure Headers), `Rate Limiting` (DDoS protection), and Joi Validation.
- **⚡ Lazy Loading**: React Code Splitting via `Suspense` and `React.lazy` for lightning-fast initial load.
- **🌗 Dark Mode Support**: Native dark mode with system preference detection and a manual toggle.
- **🛡️ Error Handling**: React Error Boundaries to gracefully handle crashes and prevent white screens.
- **⭐ Ratings & Sorting**: Sort listings by Price, Popularity, or Ratings interactively.
- **⚛️ Modern Frontend**: Built with React and Vite for a lightning-fast, responsive user experience.
- **📱 Responsive Design**: Fully responsive layout optimized for all device sizes.

## 🎬 Demo

**[🚀[ Live Demo Link](https://stayza-phi-pearl.vercel.app/)]**

## 🛠️ Tech Stack

| Category           | Technology           |
|--------------------|----------------------|
| **Frontend Framework** | React 18.2.0         |
| **Build Tool**         | Vite 5.x             |
| **Routing**           | React Router DOM 6.x |
| **Styling**           | Vanilla CSS (Custom Variables, Context API) |
| **Backend Environment**| Node.js              |
| **Framework**         | Express.js (with Rate Limiting, Helmet, Compression) |
| **Database**          | MongoDB Atlas        |
| **ODM**               | Mongoose             |
| **API Client**        | Axios                |

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB Atlas Connection String

### Installation

```bash
# Clone the repository
```bash
git clone https://github.com/pulkitjaincs/Stayza.git
cd Stayza
```

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file and add your MongoDB connection string
echo "ATLASDB_URL=your_connection_string" > .env

# Initialize Database (Seed with ratings/reviews)
node init/index.js

# Start the server
node app.js
```
_Server runs on `http://localhost:8080`_

### Frontend Setup

```bash
# Open a new terminal and navigate to client directory
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```
_Client runs on `http://localhost:5173`_

## 📁 Project Structure

```
WanderLust/
├── client/                 # React Frontend
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # Navbar, Footer, Loader, ErrorBoundary
│   │   ├── context/        # ThemeContext for Dark Mode state
│   │   ├── pages/          # ListingList (Sorting), DetailListing, Forms
│   │   ├── App.jsx         # Main application component with routing
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global design system & variables
│   └── vite.config.js      # Vite configuration
├── server/                 # Express Backend
│   ├── controllers/        # Business Logic & Request Handling
│   ├── init/               # Database seed scripts
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API Routes (Listings)
│   ├── public/             # Server static assets
│   ├── schema.js           # Joi Validation Schemas
│   ├── .env                # Environment variables
│   └── app.js              # Server entry point
└── README.md               # Project documentation
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and create a pull request.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 👨‍💻 Author

**Pulkit Jain**
- 🌐 GitHub: [@pulkitjaincs](https://github.com/pulkitjaincs)
- 💼 LinkedIn: [@pulkitjaincs](https://linkedin.com/in/pulkitjaincs)
- 📧 Email: pulkitjain.cse@gmail.com

---

<div align="center">

⭐ **Star this repository if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/pulkitjaincs/Stayza?style=social)](https://github.com/pulkitjaincs/Stayza/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/pulkitjaincs/Stayza?style=social)](https://github.com/pulkitjaincs/Stayza/network/members)

*Built with ❤️ using the MERN Stack*

</div>
