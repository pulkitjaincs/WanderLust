# 🧳 Wanderlust

[![MERN Stack](https://img.shields.io/badge/MERN-Stack-000000?style=for-the-badge&logo=react&logoColor=61DAFB)](https://www.mongodb.com/mern-stack)
[![React](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB Atlas](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/cloud/atlas)
[![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A full-stack travel listing application built with the MERN stack (MongoDB, Express, React, Node.js). Browse, create, edit, and manage travel listings with a modern React frontend and a robust Node/Express backend.

## ✨ Key Features

- 🏠 **Full CRUD Operations**: Create, Read, Update, and Delete listings.
- ⚛️ **Modern Frontend**: Built with React and Vite for a fast, responsive user experience.
- 🔌 **RESTful API**: Express.js backend serving JSON data.
- ☁️ **Cloud Database**: Data stored securely in MongoDB Atlas.
- 📱 **Responsive Design**: Styled with Bootstrap and custom CSS.

## 🛠️ Tech Stack

### Frontend (`/client`)
- **React**: UI Library
- **Vite**: Build tool
- **React Router**: Client-side routing
- **Axios**: HTTP client
- **Bootstrap 5**: Styling framework

### Backend (`/server`)
- **Node.js & Express**: Server environment
- **MongoDB & Mongoose**: Database and ODM
- **Dotenv**: Environment configuration
- **Cors**: Cross-Origin Resource Sharing

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm
- MongoDB Atlas Connection String

### installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd wanderlust
    ```

2.  **Setup the Backend**:
    ```bash
    cd server
    npm install
    ```
    - Create a `.env` file in the `server` directory.
    - Add your MongoDB Atlas connection string:
        ```env
        ATLASDB_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/wanderlust
        ```

3.  **Setup the Frontend**:
    ```bash
    cd ../client
    npm install
    # Note: If you encounter dependency issues, try downgrading Vite to v5 as optimized in this project.
    ```

### Running the Application

You need to run the backend and frontend in separate terminals.

**Terminal 1 (Backend):**
```bash
cd server
node app.js
```
*Server runs on port 8080*

**Terminal 2 (Frontend):**
```bash
cd client
npm run dev
```
*Client runs on default Vite port (usually 5173)*

## 📁 Project Structure

```
wanderlust/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components (Navbar, Footer)
│   │   ├── pages/          # Page components (ListingList, DetailListing, etc.)
│   │   ├── App.jsx         # Main App component with Routing
│   │   └── ...
│   └── vite.config.js      # Vite configuration (with proxy)
├── server/                 # Express Backend
│   ├── models/             # Mongoose Models
│   ├── init/               # DB Initialization Scripts
│   ├── app.js              # Main Server Entry Point
│   └── ...
└── README.md               # Project Documentation
```

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Pulkit Jain**
- GitHub: [@pulkitjaincs](https://github.com/pulkitjaincs)
- LinkedIn: [@pulkitjaincs](https://linkedin.com/in/pulkitjaincs)
