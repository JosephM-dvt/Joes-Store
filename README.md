
# Joe's Store 🛒

A modern shopping cart web application built with **React, TypeScript, Context API, and Reducers**.  

The project uses the **Fake Store API** for product data and **HeroUI** as the component library.

---

## Features

- Product listing fetched from Fake Store API
- Add items to cart
- Remove items from cart
- Increase / decrease item quantity
- Cart summary showing:
  - Total items
  - Total price
- Product detail page
- Search filter for products
- Sorting options
- Responsive mobile-first layout
- Global state using **Reducer + Context**
- Custom hooks for state access

---

## Tech Stack

- **React**
- **TypeScript**
- **Vite**
- **React Router**
- **HeroUI**
- **TailwindCSS**
- **Fake Store API**

API Used


[https://fakestoreapi.com/](https://fakestoreapi.com/)


---

## Architecture

The application follows a **Reducer + Context architecture** for state management.

### Cart State

All cart logic is handled in a **Reducer**, which manages:

- Adding items
- Removing items
- Updating quantities
- Calculating totals

State is provided globally through the **CartProvider**.

### Context

Two contexts are exposed:

- `useCart()` – access cart state
- `useCartDispatch()` – dispatch actions to the reducer

This removes the need for **prop drilling**.

---

## Screenshots

### Home Page (Desktop)


![alt text](<Screenshot 2026-03-05 at 16.51.12.png>) 
---

### Home Page (Mobile)
![alt text](<Screenshot 2026-03-05 at 16.56.46.png>) 

---

### Cart View (Desktop)
![alt text](<Screenshot 2026-03-05 at 16.52.10.png>) 


---

### Cart View (Mobile)
![alt text](<Screenshot 2026-03-05 at 16.57.25.png>)
![alt text](<Screenshot 2026-03-05 at 16.57.29.png>) 


---

### Product View (Desktop)
![alt text](<Screenshot 2026-03-05 at 16.52.25.png>)


---

### Product View (Mobile)
![alt text](<Screenshot 2026-03-05 at 16.58.20.png>) 
![alt text](<Screenshot 2026-03-05 at 16.58.13.png>) 

---

## Installation

Clone the repository:

```bash
git clone https://github.com/JosephM-dvt/Joes-Store
````

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Build

To create a production build:

```bash
npm run build
```

