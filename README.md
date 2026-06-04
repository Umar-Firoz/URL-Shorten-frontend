# URL Shortener Frontend

A modern, responsive frontend for a URL Shortener service built with React, Vite, and Tailwind CSS. This application allows users to transform long URLs into beautiful, manageable short links.

## 🚀 Live Demo

[https://url04.vercel.app/](https://url04.vercel.app/)

## ✨ Features

- **URL Shortening**: Easily convert long URLs into short, shareable links.
- **Real-time Click Analytics**: Automatically polls and displays the live click count for the generated short URL.
- **Persistent State**: Utilizes `localStorage` to save your recent shortened URL and its click count across browser sessions.
- **Responsive Design**: Beautiful and user-friendly interface that works seamlessly on desktop and mobile devices.
- **Modern Tech Stack**: Built for speed and developer experience using Vite and React.

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Icons**: [Lucide React](https://lucide.dev/)

## ⚙️ Local Development

### Prerequisites

- Node.js (v18 or higher recommended)
- npm, yarn, or pnpm

### Setup

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd URL-Shorten-frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🔌 API Integration

The frontend seamlessly connects to a backend service.
- **Shorten URL Endpoint:** `POST https://url04.up.railway.app/url/shorten`
- **Analytics Endpoint:** `GET https://url04.up.railway.app/url/analytics/:shortCode`
