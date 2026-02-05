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

1. **Client–Server**
   - Client handles UI
   - Server handles data & logic

2. **Stateless**
   - Server does not store client state
   - Each request contains all required information

3. **Uniform Interface**
   - Consistent URLs and HTTP methods

4. **Resource-Based**
   - Everything is treated as a resource (users, posts, comments)

5. **Representation**
   - Data is exchanged using JSON (mostly)

---

## 3. What is a RESTful API?
A **RESTful API** is an API that follows REST principles.

### Example
```http
GET /posts
POST /posts
PUT /posts/1
DELETE /posts/1
```
## Learning Outcome

# By building a Twitter-like app, we learn REST practically by:

- Designing resources (posts, users)
- Mapping CRUD operations to HTTP methods
- Using RESTful routes
- Understanding real-world API flow

