**Building Management System**:

---

# 🏢 Building Management System

*A web-based application to streamline apartment management processes including user authentication, apartment agreements, payment systems, and admin control over tenants and announcements.*

🌐 **Live Server:** [Visit Building Management System](https://fir-first-conceptual-83e2e.web.app)  
📂 **Code Repository:** [GitHub Repository](https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ferdous725890)

---

## 📌 Table of Contents  
- [🌟 Key Features](#-key-features)  
- [🛠️ Technologies Used](#-technologies-used)  
- [📦 Dependencies](#-dependencies)  
- [🚀 Installation & Setup](#-installation-setup)  
- [🎮 Usage](#-usage)  
- [🤝 Contributing](#-contributing)  
- [📜 License](#-license)  

---

## 🌟 Key Features  

- **User-Friendly Navbar:**
  - Displays logo, website name, and navigation links (Home, Apartment, Login/Profile).
  - Conditional Login/Profile icon with a dropdown menu for easy access to the User Dashboard, Profile, and Logout.

- **Dynamic Banner & Sections:**
  - Auto-sliding banner showcasing beautiful apartment/building images.
  - "About the Building" section with elegant typography and design.
  - Location details with an interactive map, utilizing a map package (e.g., Leaflet).

- **Apartment Listings with Search & Pagination:**
  - Apartments listed with details such as image, floor, block, rent, etc.
  - Search functionality for filtering apartments based on rent range.
  - Pagination to display 6 apartments per page.

- **Authentication System:**
  - Email/password-based login and registration with validation.
  - Google and GitHub login options.
  - Toast/SweetAlert notifications for success or error messages.
  - Password validation (uppercase, lowercase, and minimum length).

- **Private Dashboards:**
  - **User Dashboard:** Displays profile information and apartment-related announcements.
  - **Member Dashboard:** Shows payment options, payment history, and announcements.
  - **Admin Dashboard:** Allows full control over user roles, announcements, apartment agreements, and coupons.

- **Payment System:**
  - Members can pay rent with discount coupons.
  - Payment history logged for users.

- **Coupon Management:**
  - Admins can add, update, or manage coupons.
  - Members can apply valid coupons for rent payment discounts.

- **Agreement Management:**
  - Users can request apartment agreements; admin can accept or reject requests.
  - Admin can also update user roles.

- **Real-Time Role & Status Updates:**
  - Admins can dynamically update user roles (e.g., Member → User) and apartment status.
  - Room availability updates automatically based on agreement statuses.

- **Additional Features:**
  - JWT-based authentication with tokens stored in localStorage for secure access.
  - Axios interceptors for secure API calls.
  - Smooth animations using **Framer Motion** for an enhanced user experience.

---

## 🛠️ Technologies Used  

### 🔹 **Frontend:**  
- ⚛️ **React.js**  
- 📐 **Tailwind CSS**  
- 🔀 **React Router DOM**  
- 🖼️ **Framer Motion**  
- 🗺️ **Leaflet (Map Integration)**  
- 📅 **React Datepicker**  

### 🔹 **Backend:**  
- 🟢 **Node.js**  
- 🚀 **Express.js**  

### 🔹 **Database:**  
- 💾 **MongoDB** (with **Mongoose**)  

### 🔹 **Authentication:**  
- 🔑 **Firebase** (Google Authentication)  
- 🔒 **JWT (JSON Web Token)**  

### 🔹 **Other Tools:**  
- 🔌 **Axios**  
- 📸 **imgbb API** for image hosting  
- 🚀 **SweetAlert** for notifications  
- 🔢 **React Pagination**  

---

## 📦 Dependencies  
```json
"dependencies": {
  "@smastrom/react-rating": "^1.5.0",
  "@stripe/react-stripe-js": "^3.1.1",
  "@stripe/stripe-js": "^5.5.0",
  "@tanstack/react-query": "^5.64.1",
  "axios": "^1.7.9",
  "chart.js": "^4.4.7",
  "date-fns": "^4.1.0",
  "firebase": "^11.1.0",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "react": "^18.3.1",
  "react-chartjs-2": "^5.3.0",
  "react-copy-to-clipboard": "^5.1.0",
  "react-datepicker": "^7.6.0",
  "react-dom": "^18.3.1",
  "react-fast-marquee": "^1.6.5",
  "react-helmet": "^6.1.0",
  "react-helmet-async": "^2.0.5",
  "react-hook-form": "^7.54.2",
  "react-icons": "^5.4.0",
  "react-parallax": "^3.5.1",
  "react-pro-sidebar": "^1.1.0",
  "react-responsive-carousel": "^3.2.23",
  "react-router-dom": "^7.1.1",
  "react-simple-captcha": "^9.3.1",
  "react-tabs": "^6.1.0",
  "sort-by": "^1.2.0",
  "sweetalert2": "^11.15.10",
  "swiper": "^11.2.1"
}
```  

---

## 🚀 Installation & Setup  

### 📋 Prerequisites:  
- **Node.js** and **npm** installed.
- **MongoDB** database setup.

### 📂 Steps:

1️⃣ **Clone the repository:**  
```sh
git clone https://github.com/Programming-Hero-Web-Course4/b10a12-client-side-Ferdous725890
cd building-management-system
```  

2️⃣ **Install dependencies:**  
```sh
npm install
```  

3️⃣ **Start the application:**  
```sh
npm start
```  

---

## 🎮 Usage  
- **Login/Sign Up** to start managing your apartments and payments.
- **Explore apartments** with advanced search and pagination.
- **Request agreements** and view available payment options.
- **Admin Dashboard** for complete control over users, agreements, and payments.

---

## 🤝 Contributing  
Contributions are welcome! Feel free to submit **issues, pull requests, or feature suggestions.**  

---

## 📜 License  
This project is licensed under the **MIT License**.  

---
