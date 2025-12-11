# 🧳 WanderLust

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=mongodb&logoColor=47A248)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A modern, full-stack travel listing application built with the MERN stack. Features comprehensive CRUD operations, responsive design, and integration with MongoDB Atlas for reliable cloud data storage.

## ✨ Key Features

- **🏠 Full CRUD Operations**: Seamlessly Create, Read, Update, and Delete travel listings.
- **⚛️ Modern Frontend**: Built with React and Vite for a lightning-fast, responsive user experience.
- **🔌 Robust API**: RESTful Express.js backend serving JSON data.
- **☁️ Cloud Database**: Secure and scalable data storage with MongoDB Atlas.
- **📱 Responsive Design**: Fully responsive layout powered by Bootstrap 5 and custom CSS.
- **🔄 Real-time Updates**: Instant feedback on listing creation and updates.

## 🎬 Demo

**[🚀 Live Demo Link Coming Soon]**

## 🛠️ Tech Stack

| Category           | Technology           |
|--------------------|----------------------|
| **Frontend Framework** | React 18.2.0         |
| **Build Tool**         | Vite 5.x             |
| **Routing**           | React Router DOM 6.x |
| **Styling**           | Bootstrap 5, Custom CSS |
| **Backend Environment**| Node.js              |
| **Framework**         | Express.js           |
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
git clone https://github.com/pulkitjaincs/WanderLust.git
cd WanderLust
```

### Backend Setup

```bash
# Navigate to server directory
cd server

# Install dependencies
npm install

# Create .env file and add your MongoDB connection string
echo "ATLASDB_URL=your_connection_string" > .env

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
│   │   ├── components/     # Reusable components (Navbar, Footer)
│   │   ├── pages/          # Page components (ListingList, DetailListing, ListingForm)
│   │   ├── App.jsx         # Main application component with routing
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   └── vite.config.js      # Vite configuration
├── server/                 # Express Backend
│   ├── init/               # Database initialization scripts
│   ├── models/             # Mongoose schemas (Listing)
│   ├── public/             # Server static assets
│   ├── .env                # Environment variables
│   └── app.js              # Server entry point
└── README.md               # Project documentation
```

## 🎯 Core Components

### 🧭 Navbar Component
```javascript
// Responsive navigation bar using Bootstrap
// Links to Home, All Listings, and New Listing page
```

### 🏠 ListingList Component
```javascript
// Fetches and displays all listings in a responsive grid
// Uses Axios to communicate with the backend API
```

### 📝 ListingForm Component
```javascript
// Form for creating and editing listings
// Validates input and sends POST/PUT requests to the API
```

### 📄 DetailListing Component
```javascript
// Displays detailed information for a single listing
// Include Edit and Delete actions
```

## ⚙️ Configuration

- **Environment Variables**: Managed via `dotenv` in `server/.env`.
- **API Proxy**: Configured in `client/vite.config.js` to forward requests to port 8080.
- **Database**: Mongoose connection configured in `server/app.js`.

## 🔮 Roadmap

- [ ] User Authentication & Authorization
- [ ] Image Upload & Storage Integration
- [ ] Map Integration for Locations
- [ ] Review & Rating System
- [ ] Advanced Search & Filters

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

[![GitHub stars](https://img.shields.io/github/stars/pulkitjaincs/WanderLust?style=social)](https://github.com/pulkitjaincs/WanderLust/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/pulkitjaincs/WanderLust?style=social)](https://github.com/pulkitjaincs/WanderLust/network/members)

*Built with ❤️ using the MERN Stack*

</div>
