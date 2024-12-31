# <img src="https://i.ibb.co.com/H46zND8/foundify-05.png" alt="Crowdcube Icon" width="28" height="28"> Foundify

A comprehensive platform designed to assist users in reporting and recovering lost items, as well as finding and returning found items. The application offers user authentication, a robust database for item records, and a responsive, intuitive interface to facilitate ease of use.

## 🚀 **Live Demo**

Check out the live site: [https://foundify-raufur-a11.web.app](https://foundify-raufur-a11.web.app/)

## Purpose

The purpose of this project is to create a centralized platform where users can:

- Report items they have lost.
- Report items they have found.
- Search for lost or found items based on category or location.
- Recover their belongings with ease through detailed recovery actions.

## Key Features

- **Authentication:** Secure login and registration using email/password or third-party providers (Google/GitHub).
- **Dynamic Home Page:**
  - Attractive slider/banner with transitions.
  - Latest lost/found items section.
  - Additional meaningful sections with animations.
- **Add Lost/Found Items:** User-friendly forms to report items with detailed descriptions and images.
- **Search and Filter:** Advanced filtering options for lost and found items.
- **Post Management:** Users can update or delete their posts directly from a dedicated dashboard.
- **Recovered Items:** A separate page showcasing all recovered items with multiple view options.
- **Animations:** Interactive transitions using Framer Motion.
- **Responsive Design:** Optimized for all devices.

## Technology Stack

- **Frontend:** React, Tailwind CSS, DaisyUI, Framer Motion
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication
- **Deployment:** Vercel (Frontend), Render (Backend)

## NPM Packages Used

- **React Router DOM:** For seamless navigation between pages.
- **Framer Motion:** For animations.
- **React Icons:** To add visually appealing icons.
- **SweetAlert2:** For elegant alert dialogs.
- **Axios:** For HTTP requests.
- **Dotenv:** For environment variable management.
- **Cors:** To handle cross-origin requests.
- **Body-Parser:** For parsing incoming request bodies.

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd whereisit
   ```
3. Install dependencies for both client and server:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```
4. Add environment variables for Firebase and MongoDB in `.env` files for both client and server.
5. Run the client and server:
   ```bash
   cd client
   npm start
   cd ../server
   npm run start
   ```
6. Open `http://localhost:3000` in your browser to access the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an issue to discuss changes.

---

Thank you for checking out **WhereIsIt**! We hope this platform makes it easier for people to recover their lost items.
