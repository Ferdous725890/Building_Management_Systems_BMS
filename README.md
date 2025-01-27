# Building Management System

A web-based application designed to streamline apartment management processes, including user authentication, apartment agreements, payment systems, and admin control over tenants and announcements.

---

## Key Features

1. **User-Friendly Navbar**  
   - Displays a logo, website name, Home, Apartment, and a conditional Login/Profile icon.  
   - Profile drop-down includes User Name, Dashboard, and Logout button.  

2. **Dynamic Banner & Sections**  
   - Auto-sliding banner showcasing beautiful apartment/building images.  
   - Dedicated "About the Building" section with elegant typography.  
   - Location details section with map integration using an NPM package.  

3. **Apartment Listings with Search & Pagination**  
   - Displays apartment details (image, floor, block, rent, etc.).  
   - Includes a search feature for filtering apartments by rent range.  
   - Pagination implemented to show 6 apartments per page.

4. **Authentication System**  
   - Email/password-based login and registration with validation.  
   - Google or GitHub login option.  
   - Toast/sweet alert notifications for success and errors.  
   - Password validation with uppercase, lowercase, and minimum length.  

5. **Private Dashboards**  
   - **User Dashboard:** Shows profile info and announcements.  
   - **Member Dashboard:** Includes payment options, payment history, and announcements.  
   - **Admin Dashboard:** Offers full control over users, announcements, agreements, and coupons.

6. **Payment System**  
   - Members can pay rent with the option to apply discount coupons.  
   - Payments are logged in the user's payment history.

7. **Coupon Management**  
   - Admin can add, update, or manage coupons.  
   - Members can use valid coupons to get discounts on rent payments.

8. **Agreement Management**  
   - Users can request apartment agreements; requests are managed by the admin.  
   - Admin can accept or reject agreements and update user roles.  

9. **Real-Time Role & Status Updates**  
   - Admins can change user roles (e.g., Member → User) and apartment statuses dynamically.  
   - Automatic room availability updates based on agreements.

10. **Additional Features**  
    - JWT-based authentication with tokens stored in localStorage.  
    - Axios interceptors for secure API calls.  
    - Framer Motion animations for a smooth user experience.

---

## Technologies Used

- **Frontend:** React, Tailwind CSS, React Router, Framer Motion.  
- **Backend:** Node.js, Express.js.  
- **Database:** MongoDB (with Mongoose).  
- **Authentication:** Firebase (Google Auth) & JWT.  
- **Other Tools:** Axios, imgbb API, SweetAlert, React Pagination, Map libraries (e.g., Leaflet).  

---

## Installation & Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/yourusername/building-management-system.git
   cd building-management-system
