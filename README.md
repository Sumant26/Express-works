# 🚀 EXPRESS WORKS (ES6 + Node.js)

A simple REST API built using **Node.js** and **Express (ES6 modules)**.  
This project demonstrates how to create, read, update, and delete (CRUD) data using modern JavaScript syntax.

---

## 📁 Project Structure
```
Express-works/
│
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── auth.controller.js
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── error.middleware.js
│   │   └── validation.middleware.js
│   ├── models/
│   │   └── user.model.js
│   ├── routes/
│   │   └── auth.routes.js
│   ├── services/
│   │   └── auth.service.js
│   ├── utils/
│   │   └── logger.js
│   └── app.js
│
├── .env
├── .gitignore
├── package.json
└── server.js





```

---

## ⚙️ Setup Instructions
    Follow these steps to set up and run the project on your local machine:
### 1️⃣ Clone the repository
```bash
git clone https://github.com/Sumant26/Basic-express-api.git
cd Basic-express-api
npm install
npm start
http://localhost:3000
```
---

## 💡 Features
```bash
Built using best practices for Node.js + Express
Easy to extend for any API project
Clean and modular — suitable for teams and scaling
Ready for deployment to Render, AWS, Vercel, etc.
 ```
---
 ## EndPoints
 ```bash

| Method | Endpoint             | Description                   |
| ------ | -------------------- | ----------------------------- |
| `POST` | `/api/auth/register` | Register a new user           |
| `POST` | `/api/auth/login`    | Login and receive a JWT token |
| `GET`  | `/api/auth/profile`  | Get user profile (protected)  |

```
---
## 🧰 Technologies Used
```bash
| Category            | Package                        |
| ------------------- | ------------------------------ |
| Server              | **Express.js**                 |
| Authentication      | **jsonwebtoken**, **bcryptjs** |
| Validation          | **express-validator**          |
| Logging             | **morgan**                     |
| Environment Config  | **dotenv**                     |
| Database (optional) | **MongoDB** (using Mongoose)   |

```

## 🧑‍💻 Author
```bash
Sumant Tulshibagwale
🌐 https://github.com/Sumant26
```

---

