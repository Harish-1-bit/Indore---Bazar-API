🛒 Indore-Bazar
AI-Powered Instant Grocery Delivery Platform

Indore-Bazar is a Swiggy Instamart–inspired e-commerce platform built for fast, intelligent, and seamless grocery shopping. This project integrates AI-powered recommendations and chat-based assistance to simplify the entire shopping experience — from product discovery to checkout.

🚀 Features
🧠 AI-Powered Shopping Assistant

Chat with an AI agent directly inside the app

Get smart suggestions for groceries based on:

Previous purchases

Pricing

Dietary preferences

Popular items

Ask questions like “What’s the best oil for cooking?” or “Suggest fruits under ₹200.”

🛍️ Customer Experience (Frontend)

Clean and modern UI inspired by Instamart/Zepto

Browse categories like Fruits, Vegetables, Snacks, Beverages, Essentials

Real-time cart updates

Sleek product cards with images, prices, and discounts

Fast search with auto-suggestions

🏪 Shopkeeper Dashboard

Shop onboarding and authentication

Add/update product inventory

Manage orders in real-time

Track sales and store insights

Separate theme & UI for shop owners

🛠️ Admin Panel

Manage users, shopkeepers, and orders

Approve/verify shops

Monitor platform analytics

Dedicated admin UI design (separate from customer and shopkeeper themes)

📦 Order & Delivery Flow

Add to cart → checkout → order created → shop receives request

Real-time order status updates

Delivery instructions and address handling

🧰 Tech Stack
Frontend

React.js

Tailwind CSS

Custom UI themes for Customer, Shopkeeper, and Admin

Redux / Recoil (if used)

React Router

Backend

Node.js + Express

MongoDB / Firebase (mention what you used)

JWT Authentication

REST APIs

AI Integration

OpenAI / Gemini / Llama (mention your model)

Custom prompt engineering for grocery suggestions

Chat-based workflow for smart recommendations

Other Tools

Cloudinary (for images)

Stripe / Razorpay (if payment integration exists)

Postman (API testing)

📁 Project Structure
Indore-Bazar/
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── store/
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── utils/
│── ai/
│   ├── recommendation-engine.js
│── README.md

🔥 Core Highlights

⚡ Instamart-inspired ultra-fast UI & user flow

🧠 AI-powered product discovery & conversation-based shopping

🎯 Role-based dashboard for Customers, Shopkeepers & Admins

📊 Smart analytics for store owners and admin

🛡️ Secure authentication and API flow

📸 Screenshots (optional section)

Add preview images of:

Customer home

AI chat section

Shopkeeper dashboard

Admin panel

Product listing

🏗️ How to Run Locally
Frontend
cd frontend
npm install
npm run dev

Backend
cd backend
npm install
npm start


Create a .env file with:

MONGO_URI=
JWT_SECRET=
OPENAI_API_KEY=
CLOUDINARY_KEY=

📌 Future Improvements

Voice-based shopping assistant

Automatic cart optimization

Delivery partner tracking system

Live order map

Push notifications

❤️ Contributions

Contributions are welcome!
Fork the repo → create a feature branch → open a pull request.

📞 Contact

For queries or collaboration, feel free to reach out!
Developer: Harish Soni