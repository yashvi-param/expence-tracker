Expense Tracker (React)
<img width="1896" height="918" alt="Screenshot 2026-01-08 130730" src="https://github.com/user-attachments/assets/a0852842-308c-4c6d-afa0-ffcee824ea39" />

A simple Expense Tracker built with React, React Context API, and React Bootstrap.
This application allows users to add, edit, and manage expenses with categories, credit/debit types, and amounts.

✨ Features

Add new expenses with:

Title

Amount

Credit / Debit type

Category

Edit existing expenses (auto-fills form using Context API)

Clean and responsive UI using React Bootstrap

State management with React Hooks and Context API

🛠️ Technologies Used

React

React Hooks (useState, useEffect, useContext)

Context API

React Bootstrap

JavaScript (ES6)

📂 Project Structure
src/
│── LocalForm.jsx
│── LocalContainer.jsx
│── App.jsx
│── index.js
│── styles/

🚀 Getting Started
Prerequisites

Make sure you have the following installed:

Node.js

npm or yarn

Installation

Clone the repository:

git clone https://github.com/your-username/expense-tracker.git


Navigate to the project directory:

cd expense-tracker


Install dependencies:

npm install


Start the development server:

npm start

🧩 Component Overview
LocalForm

Manages expense input fields using useState

Uses useContext to access add and editValue

Automatically fills form fields when editing an expense

Submits data to global state via Context API

📸 UI Preview

Responsive card layout

Radio buttons for Credit/Debit

Dropdown category selector

Bootstrap-based styling

📌 Future Improvements

Expense list with delete option

LocalStorage / Database integration

Expense summary & charts

Form validation

🤝 Contributing

Contributions are welcome!
Feel free to fork the repo and submit a pull request.

📄 License

This project is licensed under the MIT License.

If you want, I can also:

Make it shorter

Customize it for GitHub

Add screenshots section

Write a README for beginners
