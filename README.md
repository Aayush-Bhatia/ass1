🚀 Feedback Portal

A clean, modern, and responsive web app for collecting and managing user feedback. This project is built from the ground up using React, Material-UI, and Tailwind CSS, featuring a responsive design that works beautifully on both desktop and mobile.

Here's a quick look at the interface:
<img width="1470" height="827" alt="Screenshot 2025-11-03 at 6 00 36 PM" src="https://github.com/user-attachments/assets/7d21c471-5a03-48c1-84ff-b57afa7aeb45" />
<img width="1470" height="827" alt="Screenshot 2025-11-03 at 6 01 18 PM" src="https://github.com/user-attachments/assets/0f6d625a-4d97-4e06-9d68-bc53a687c99a" />
<img width="1470" height="827" alt="Screenshot 2025-11-03 at 6 02 42 PM" src="https://github.com/user-attachments/assets/87130335-0b06-4985-be02-f75a1b44b685" />
<img width="1470" height="827" alt="Screenshot 2025-11-03 at 6 03 37 PM" src="https://github.com/user-attachments/assets/d84bd53b-5f75-4e53-8634-ff20e8c89fec" />




✨ Features

Responsive Design: A professional layout with a permanent sidebar on desktop and a clean, slide-in drawer on mobile.

Modern Form: A user-friendly feedback form built with Material-UI components (TextFields, Buttons, etc.).

EmailJS Integration: Automatically sends an email notification to the admin on every new submission.

Feedback List: View all entries in a clean, scrollable list of MUI Cards.

Live Search: Instantly filter feedback in real-time by name, email, or message content.

Date Filter: A simple MUI Date Picker to see all feedback submitted on a specific date.

Delete with Confirmation: A pop-up modal prevents accidental deletions.

Persistent Storage: All feedback is saved securely in the browser's localStorage, so the data persists even after a page refresh.

💻 Tech Stack

Frontend: React (v18+)

UI Library: Material-UI (MUI) v5

Styling: Tailwind CSS v3 (Used alongside MUI for custom and responsive styling)

Icons: MUI Icons

Email: EmailJS

Date Handling: @mui/x-date-pickers & date-fns

Unique IDs: uuid

📁 File Structure

The project follows a clean, standard React file structure to keep things organized.

src/
├── components/     # Reusable UI components (FeedbackForm, FeedbackList, etc.)
├── pages/          # Page-level views (HomePage, FeedbackPage, etc.)
├── services/       # Data handling logic (FeedbackService.js)
├── utils/          # Helper functions (formatDate.js)
├── App.jsx         # Main layout (Header, Drawer, Content)
└── index.js        # Entry point


🛠️ Getting Started: Installation & Setup

Here's how to get this project running on your local machine.

1. Clone the Repository

First, clone this repository to your computer:

git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
cd your-repo-name


2. Install All Dependencies

This project uses several libraries. This single command will install all of them (MUI, Tailwind, EmailJS, Date Pickers, etc.):

npm install @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-date-pickers date-fns @emailjs/browser uuid


And for Tailwind (as dev dependencies):

npm install -D tailwindcss postcss autoprefixer


3. Configure EmailJS (Very Important!)

To make the email form work, you need to connect it to your EmailJS account.

Sign up for a free account at EmailJS.com.

Add an Email Service (like Gmail).

Create an Email Template. Make sure your template includes variables for {{name}}, {{email}}, and {{message}}.

Find your Service ID, Template ID, and Public Key from your account.

4. Add Your API Keys

For security, never hardcode API keys. Create a new file in the root of your project (the same folder as package.json) and name it .env.

Add your keys like this (Vite projects need the VITE_ prefix):

VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here


Now, your FeedbackForm.jsx file can securely access these keys:

// Example from src/components/FeedbackForm.jsx
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


5. Run the Application

You're all set! Start the development server:

npm run dev


The app should now be live at http://localhost:5173 (or a similar port).

👤 Author

Designed and Developed by Aayush Bhatia
