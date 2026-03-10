# MMU SecurePass

A password strength checker and security education site built with React, Vite, and Tailwind CSS.

## Features

- **Password Strength Checker** — real-time feedback on password strength with criteria breakdown
- **Data Breach Detection** — checks passwords against the [Have I Been Pwned](https://haveibeenpwned.com) database using k-anonymity (your password never leaves your browser)
- **Strong Password Suggestions** — automatically suggests an improved version of weak passwords
- **Security Guides** — tips, best practices, and a password guide to help users stay safe online

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)

### Installation

```bash
git clone https://github.com/penguin12463/MMU-pass-checker.git
cd MMU-pass-checker
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder — ready to deploy to any static host.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Radix UI](https://www.radix-ui.com/) + [shadcn/ui](https://ui.shadcn.com/)

## Privacy

Password breach checking uses the HIBP [k-anonymity model](https://haveibeenpwned.com/API/v3#SearchingPwnedPasswordsByRange) — only the first 5 characters of a SHA-1 hash are sent to the API. Your actual password is never transmitted.
