# 💬 Mini-WhatsApp Chat Clone – CRUD Chat Application

A simple **WhatsApp-style Chat Management System** built using **Node.js, Express.js, MongoDB, EJS, HTML, and CSS**. This project demonstrates full **CRUD operations** (Create, Read, Update, Delete) using a clean MVC structure and MongoDB database integration.

---

## 🚀 Features

* ✨ Create a new chat message
* 📜 View all chats in a structured UI
* ✏️ Edit existing messages
* 🗑️ Delete chats using method-override
* 🕒 Show date and time of each message
* 🎨 Simple UI using HTML + CSS
* 🔗 MongoDB database connection with Mongoose

---

## 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB with Mongoose
* **Frontend:** EJS Templates, HTML, CSS
* **Middleware:** Method-Override, Body Parser

---

## 📂 Project Structure

```
project/
│── models/
│    └── chat.js
│
│── views/
│    ├── home.ejs
│    ├── index.ejs
│    ├── new.ejs
│    └── edit.ejs
│
│── public/
│    └── style.css
│
│── app.js
│── package.json
```

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```
git clone https://github.com/vikashkr96/chat-app.git
cd chat-app
```

2. **Install dependencies**

```
npm install
```

3. **Start MongoDB**
   Make sure MongoDB is running locally on
   `mongodb://127.0.0.1:27017/watsapp`

4. **Run the server**

```
node app.js
```

5. Open browser:

```
http://localhost:8080
```

---

## 🧠 Learning Objectives

This project helps you understand:

* Express routing
* MongoDB CRUD operations
* Using Mongoose models
* Method Override for PUT & DELETE
* EJS templating
* MVC architecture basics

---

## 📌 Future Improvements

* 🔐 User authentication system
* 📱 Responsive UI like real WhatsApp
* 🌐 Real-time chat using Socket.io
* 📸 Image & file sharing
* 🔔 Notifications

---

## 🤝 Contribution

Feel free to fork this repo, improve UI, add features, or fix bugs. Pull requests are welcome!

---

## 📧 Contact

Made with ❤️ by **Vikash Kumar**
If you like this project, don’t forget to ⭐ the repo!
