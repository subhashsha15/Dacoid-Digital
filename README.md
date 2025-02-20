# Quiz Platform

Quiz Platform is a dynamic web application built with React, Redux Toolkit, React Router, Tailwind CSS, and JavaScript. The app allows users to attempt quizzes, receive instant feedback, track their progress, and view their quiz history. It also features authentication with a signup page where user data is stored in local storage, complete with form validations.

## Features

- **Quiz Creation & Management:**
  - Displays a list of quiz questions.
  - Allows multiple attempts.
  - Stores attempt history using Redux and IndexedDB.

- **User Interaction:**
  - Users can select answers and get immediate feedback.
  - Timer-based quizzes with a 30-second countdown per question.

- **Progress Tracking:**
  - Displays a scoreboard at the end of each quiz.
  - Redirects to a dedicated Scoreboard page upon quiz completion.

- **Authentication:**
  - Signup page with form validations.
  - User data is stored securely in local storage.

- **Responsive Design:**
  - Styled using Tailwind CSS for a modern look and feel.

- **Routing:**
  - Uses React Router to seamlessly navigate between Home, Quiz, Scoreboard, History, and Signup pages.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/subhashsha15/Dacoid-Digital.git

  

2. **Running the App Locally:**

   ```bash
   cd Dacoid-Digital
   npm install
   npm run dev

### Deployed Link

   https://dacoid-digital0.netlify.app/