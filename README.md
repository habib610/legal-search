# 🎓 Legal-Docs — An online educational platform

> **Legal-Docs** is a modern online assistant tool that helps users search and summarize legal documents.

---

## 📖 Table of Contents

- [🎓 Legal-Docs — An online educational platform](#-legal-docs--an-online-educational-platform)
  - [📖 Table of Contents](#-table-of-contents)
  - [🧩 Project Overview](#-project-overview)
  - [✨ Features](#-features)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation \& Running](#installation--running)
    - [Frontend](#frontend)
    - [Backend](#backend)

---

## 🧩 Project Overview

> **Legal-Docs** is an online assistant tools which helps a user to search and summarizes various legal documents

## ✨ Features

-   Search legal documents
-   View detailed information of the documents

---

## 🚀 Getting Started

### Prerequisites

-   Node.js `>=20.0.0`
-   npm, or yarn
-   Git

### Installation & Running

Using Docker

```bash
# Clone the repository (HTTPS)
git clone https://github.com/habib610/legal-search.git

#or (SSH)
git clone git@github.com:habib610/legal-search.git

# Go into the project directory
cd legal-search

# Build and run frontend and backed
docker-compose up --build

```

or without Docker

```bash
# Clone the repository (HTTPS)
git clone https://github.com/habib610/legal-search.git

#or (SSH)
git clone git@github.com:habib610/legal-search.git

# Go into the project directory
cd legal-search

# Install front end dependencies
cd frontend && yarn install

# or
cd frontend && npm install

# Install backend dependencies
cd ..
cd backend && RUN pip install --no-cache-dir -r requirements.txt
```

Run the development server:

### Frontend

```bash
# navigate to frontend directory
cd frontend && npm run dev
# or
cd frontend && yarn dev
```

### Backend

```bash
# add new terminal window and navigate to backend directory
cd backend && uvicorn main:app --reload
```
