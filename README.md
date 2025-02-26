# MentorMate

MentorMate is a full-fledged e-learning platform where instructors can sell courses, and students can purchase and study them. Built with the **MERN** (MongoDB, Express.js, React, Node.js) stack, the platform provides a seamless learning experience with a secure authentication system, course management, and payment integration.

## Features

### For Instructors
- **Course Creation:** Instructors can create and manage their courses.
- **Upload Content:** Video lectures.
- **Revenue Dashboard:** Track earnings from course sales.

### For Students
- **Course Enrollment:** Buy and access courses anytime.
- **Interactive Learning:** Watch videos lectures by instructors.
- **Progress Tracking:** Monitor course completion status.

### Other Features
- **Secure Authentication:** User authentication with JWT.
- **Payment Gateway:** Integrated for secure transactions.
- **Responsive UI:** User-friendly and mobile-friendly design.

## Tech Stack
- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JSON Web Token (JWT)
- **Payment Gateway:** Stripe (or any preferred service)

## Installation

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed.

### Steps to Run Locally

1. **Clone the repository**
   ```sh
   git clone https://github.com/your-username/mentormate.git
   cd mentormate
   ```

2. **Install dependencies**
   ```sh
   npm install
   cd client && npm install  # Install frontend dependencies
   ```

3. **Set up environment variables**
   - Create a `.env` file in the root directory and add:
     ```env
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     STRIPE_SECRET_KEY=your_stripe_key
     ```

4. **Run the backend server**
   ```sh
   npm start
   ```

5. **Run the frontend**
   ```sh
   cd client
   npm start
   ```

6. **Visit the application**
   - Open `http://localhost:8080` in your browser.

