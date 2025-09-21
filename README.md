# 🧳 Wanderlust

[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-14+-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4.4-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Mongoose](https://img.shields.io/badge/Mongoose-6.x-880000?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongoosejs.com/)
[![EJS](https://img.shields.io/badge/EJS-3.x-A91E50?style=for-the-badge&logo=html5&logoColor=white)](https://ejs.co/)
[![CSS3](https://img.shields.io/badge/CSS3-3.x-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![ejs-mate](https://img.shields.io/badge/ejs--mate-1.x-FF6600?style=for-the-badge)](https://github.com/JacksonTian/ejs-mate)

> A travel and accommodation listing web application built with Node.js, Express, MongoDB, and EJS. Manage listings of cottages, villas, cabins, and more with full CRUD functionality.

## 🌐 Live Demo

**[🚀 Live Demo Coming Soon]**

## ✨ Key Features

- 🏠 Full CRUD operations for travel listings
- 🌍 Diverse sample listings from worldwide locations
- 📱 Responsive UI with card-based listing display
- 🗄️ MongoDB database with Mongoose ODM
- 🖥️ Server-side rendering using EJS templates
- 🎨 Static assets served from the public directory

## 🛠️ Tech Stack

| Category           | Technology           |
|--------------------|----------------------|
| **Backend**        | Node.js, Express.js  |
| **Database**       | MongoDB, Mongoose    |
| **Templating**     | EJS, ejs-mate        |
| **Frontend**       | HTML, CSS            |
| **Others**         | Method-Override      |

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm
- MongoDB (running locally on default port 27017)

### Installation

```bash
git clone <repository-url>
cd <repository-folder>
npm install
```

### Initialize Database with Sample Data

```bash
node init/index.js
```


## 📁 Project Structure

```
wanderlust/
├── app.js                 # Main application entry point and routes
├── init/                  # Database initialization scripts and sample data
│   ├── data.js            # Sample listings data
│   └── index.js           # DB initialization script
├── models/                # Mongoose schemas and models
│   └── listing.js         # Listing schema
├── public/                # Static assets (CSS, JS, images)
├── views/                 # EJS templates for server-side rendering
│   ├── includes/          # Partial templates (navbar, footer)
│   ├── layouts/           # Layout templates
│   └── listings/          # Listing-related views (index, show, new, edit)
└── README.md              # Project documentation
```

## 🧩 Core Components

### Listing Schema (models/listing.js)

```javascript
const listingSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, default: "default-image-url" },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  country: { type: String, required: true },
});
```

### Main Routes (app.js)

```javascript
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index.ejs", { allListings });
});

app.post("/listings", async (req, res) => {
  let listing = new Listing(req.body.listing);
  await listing.save();
  res.redirect("/listings");
});
```

## ⚙️ Configuration

- MongoDB connection string is set to `mongodb://localhost:27017/wanderlust`
- Server listens on port 8080
- Uses method-override for PUT and DELETE HTTP verbs

## 📦 Deployment

- Ensure MongoDB is running
- Run `node app.js` to start the server
- Access the app at `http://localhost:8080/listings`

## 🛣️ Roadmap

- [ ] Add user authentication and authorization
- [ ] Implement search and filtering for listings
- [ ] Add image upload functionality
- [ ] Improve UI/UX with modern frontend frameworks
- [ ] Deploy to cloud hosting platforms

## 🤝 Contributing

Contributions are welcome! Please fork the repository and submit pull requests.

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Pulkit Jain**

- GitHub: [@pulkitjaincs](https://github.com/pulkitjaincs)
- LinkedIn: [@pulkitjaincs](https://linkedin.com/in/pulkitjaincs)
- Email: pulkitjain.cse@gmail.com


---

<div align="center">

⭐ If you find this project helpful, please give it a star!

[![GitHub stars](https://img.shields.io/github/stars/yourusername/wanderlust?style=social)](https://github.com/yourusername/wanderlust/stargazers)

</div>
