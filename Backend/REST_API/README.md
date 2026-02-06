# REST, RESTful APIs & CRUD – Summary + Learning by Doing

## 1. What is REST?
**REST (Representational State Transfer)** is an architectural style used to design web services.  
It defines a set of rules for how clients and servers communicate over HTTP.

REST is:
- Not a programming language
- Not a framework
- A set of principles for API design

---

## 2. REST Principles (Core Rules)

### 1. Client–Server
- Client handles the user interface (UI)
- Server handles data storage and business logic

### 2. Stateless
- Server does not store client state
- Each request contains all required information

### 3. Uniform Interface
- Consistent URL structure
- Proper use of HTTP methods (GET, POST, PATCH, DELETE)

### 4. Resource-Based
- Everything is treated as a resource
- Examples: users, posts, comments

### 5. Representation
- Data is exchanged in representations
- Mostly JSON format is used

---

## 3. What is CRUD?
**CRUD** represents the four basic operations performed on resources:

- **Create** – Add new data
- **Read** – Retrieve existing data
- **Update** – Modify existing data
- **Delete** – Remove data

---

## 4. Mapping CRUD to HTTP Methods

| CRUD Operation | HTTP Method |
|---------------|------------|
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

---

## 5. What is a RESTful API?
A **RESTful API** is an API that follows REST principles and uses HTTP methods correctly to perform CRUD operations on resources.

## 6. Learning Outcomes 

**By building a Twitter-like RESTful application, we learn:**

- How to design resources such as posts and users
- How **CRUD** operations map to **HTTP** methods
- How to create RESTful routes
- How real-world client–server communication works
- How requests and responses flow in an API
- How backend logic is separated from frontend UI
- How REST APIs are structured in practical projects

## 7. Project Overview – RESTful Blog (Twitter-like App)

To understand REST and CRUD operations practically, we built a **mini Twitter-like post application** using **Node.js**, **Express.js**, **EJS**, and **RESTful routing**.

- This project demonstrates how REST principles are applied in a real backend application.

## 8. Tech Stack Used

- **Node.js** – Runtime environment
- **Express.js** – Web framework
- **EJS** – Templating engine
- **UUID** – Generates unique post IDs
- **Method-Override** – Enables PATCH and DELETE
- **RESTful Routing** – Implements CRUD operations

## 9. Project Features

- View all posts
- Create a new post
- View a single post
- Edit an existing post
- Delete a post
- Each post is treated as a REST resource

