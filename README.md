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

## Screenshots
- **Login Page** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599463/samples/animals/Screenshot_2025-02-26_165629_honk6n.png)

<br>

- **Home Page** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599483/samples/animals/Screenshot_2025-02-26_172842_dusxmf.png)

<br>

- **My Learning Page** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740600239/samples/animals/Screenshot_2025-02-27_013305_mekxjt.png)

<br>

- **Course Details Page** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599481/samples/animals/Screenshot_2025-02-26_172750_wyphx6.png)

<br>

- **Payment Page** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599473/samples/animals/Screenshot_2025-02-26_172332_zc3use.png)

<br>

- **Access Lectures Page (After Purchase)** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599470/samples/animals/Screenshot_2025-02-26_172309_j5ubqy.png)

<br>

- **Create Course (For Instructor)** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599464/samples/animals/Screenshot_2025-02-26_170032_f4rhaq.png)
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599464/samples/animals/Screenshot_2025-02-26_170138_pyb73c.png)

<br>

- **Create Lecture (For Instructor)** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740601036/samples/animals/Screenshot_2025-02-27_014631_rps8pf.png)
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599469/samples/animals/Screenshot_2025-02-26_170407_urtrka.png)

<br>

- **Dashboard (For Instructor)** 
![](https://res.cloudinary.com/dkk2rer7z/image/upload/v1740599475/samples/animals/Screenshot_2025-02-26_172549_jtuvqt.png)


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

