# User Management Portal

A responsive web application built with React JS for managing student details, including CRUD operations and search functionality.

The project is deployed on Netlify. Follow [https://user-management-portal.netlify.app/] to open the app on your browser

## Features

- **Add User Details:** Add new users with first name, last name, email, and avatar.
- **Display User Details:** View all user details in a responsive table or list.
- **Update User Details:** Edit existing user details.
- **Delete User Details:** Remove user details.
- **Search Functionality:** Search users by first name, last name, or email.
- **Responsive Design:** Supports multiple screen resolutions.

## Technologies Used

- React JS
- Material-UI (MUI)
- Axios

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-portal.git
   cd user-management-portal
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open `http://localhost:3000` in your browser.

## Project Structure

```
user-management-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── AddUserForm.js
│   │   ├── UserTable.js
│   │   ├── UserCard.js
│   │   └── SearchBar.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── package.json
```

## Usage

1. **Add a User:** Fill in the form and click "Add User".
2. **Update a User:** Click "Edit" on a user card, modify details, and click "Save".
3. **Delete a User:** Click "Delete" on a user card.
4. **Search Users:** Enter search terms in the search bar.

## Data Fetching

Initial user data is fetched from:
```
https://reqres.in/api/users?page=1&per_page=6
```
