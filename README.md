# Real-Time Chat Application (Frontend)

A responsive, real-time messaging platform built with React and Socket.io.

> [**View Live Demo**]
> <https://messenger-inky-kappa.vercel.app/>

## 🛠 Tech Stack

- **Core:** React.js, JavaScript (ES6+)
- **Styling:** Tailwind CSS
- **State Management:** React Context API
- **Real-time Communication:** Socket.io-client
- **Data Handling:** Custom Hooks (`useFetchUser`, `useFetchChat`, `useFetchFriends`)
- **Utilities:** Date-fns, RoboHash (Avatars)

## ✨ Key Features

- **Authentication:** User registration and login with secure credential handling. includes "One-click" demo login for recruiters/testers.
- **Real-Time Messaging:** Instant message delivery using Socket.io.
- **Friend System:** Search, add friends, and view real-time online/offline status.
- **Dynamic Theming:** specific implementation of Dark/Light mode utilizing Tailwind's `dark:` classes and local storage persistence.
- **Responsive UI:** Fully responsive layout optimized for mobile, tablet, and desktop views.

## 🚀 Getting Started

## 📂 Project Structure Highlights

- `/components`: Reusable UI components (Header, Friends, Chat).
- `/utils`: Custom hooks and Context providers (`UrlContext`, `useFetchUser`) to separate logic from UI.
- `/skelton`: Loading state skeletons for improved UX.

---
