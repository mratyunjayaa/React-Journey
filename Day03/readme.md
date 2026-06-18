# GitHub Profile Explorer

A simple React project that fetches and displays GitHub user profiles using the GitHub API.

## Overview

This project allows users to view GitHub profiles dynamically. By entering a number and clicking the search button, the application fetches that many GitHub users and displays their profile information in a clean card layout.

Each profile card includes:

- Profile Picture
- GitHub Username
- Direct Link to GitHub Profile

## Features

- Fetch GitHub user data using the GitHub API
- Display multiple user profiles dynamically
- Responsive card-based UI
- User-controlled profile count
- External links to GitHub profiles

## What I Learned

While building this project, I practiced and improved my understanding of:

- React Functional Components
- `useState` Hook
- `useEffect` Hook
- Handling API requests using `fetch`
- Working with asynchronous JavaScript (`async/await`)
- Handling user input with forms
- Rendering lists using `.map()`
- Managing React state
- Basic error handling with `try...catch`
- Dynamic UI updates based on user interaction

## Technologies Used

- React
- JavaScript (ES6+)
- HTML
- CSS
- GitHub REST API

## How It Works

1. When the application loads, it fetches 10 GitHub profiles by default.
2. Users can enter a number in the input field.
3. Clicking the button fetches the specified number of GitHub profiles.
4. The profiles are displayed as cards with profile images and links.

## Future Improvements

- Search GitHub users by username
- Add a dedicated search feature to find a specific user easily
- Display additional profile information such as:
  - Followers
  - Following
  - Public Repositories
  - Bio
- Add loading indicators
- Improve error handling
- Pagination for larger datasets
- Dark/Light theme toggle

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/mratyunjayaa/React-Journey
```

### Install Dependencies

```bash
npm install
```

### Run the Project

```bash
npm run dev
```

## Author

**Vishal Tomar**

Built while learning React and working with APIs to strengthen frontend development skills.
