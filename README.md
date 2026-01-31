# E-commerce Product Management Frontend

This is the **React + TypeScript** frontend for the E-commerce Product Management System.  
It fetches product data from the backend, calculates discounted prices, and displays products dynamically with loading and error handling.

## Features

- Display all products from the backend API.
- Show discounted prices automatically.
- Loading and error states for API requests.
- Fully typed with TypeScript for type safety.
- Easy to extend with additional UI components.

## Tech Stack

- React 18
- TypeScript
- Axios
- Vanilla CSS

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/pahmadinasabemran1998/e-commerce-frontend.git
```
2. Install dependencies:
```bash
npm install
```
3. Set the API URL in .env (default is http://localhost:5000):
```bash
VITE_API_URL=http://localhost:5000
```
4. Run the development server:
```bash
npm run dev
```
5. Open http://localhost:5173 in your browser.

## Backend Reference
The frontend consumes the backend API from the E-commerce Backend project: [E-Commerce Backend](https://github.com/pahmadinasabemran1998/e-commerce-backend).