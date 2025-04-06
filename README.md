# Company-Website

## Overview
This repository contains the source code for our company's official website. The website showcases our products/services, company information, and provides contact details for potential clients.

## Table of Contents
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Project Structure](#project-structure)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Code Style](#code-style)
- [Deployment](#deployment)
- [Common Issues](#common-issues)
- [Contributing](#contributing)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (recommended version)
- Package manager (npm or yarn)
- Git

### Installation
1. Clone the repository
   ```
   git clone https://github.com/your-org/Company-Website.git
   cd Company-Website
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn install
   ```

## Project Structure
```
Company-Website/
├── public/            # Static assets
├── src/               # Source files
│   ├── components/    # Reusable UI components
│   ├── pages/         # Page components
│   ├── styles/        # CSS/SCSS files
│   └── utils/         # Utility functions
└── [other directories and files]
```

## Development

### Running Locally
To start the development server:
```
npm run dev
# or
yarn dev
```

The site will be available at http://localhost:3000 (or your configured port)

### Code Style
We follow consistent code styling throughout the project. Please run linters before submitting your code.

## Deployment
Our deployment process is automated through CI/CD pipelines. The main branch is automatically deployed to production when changes are merged.

## Common Issues

### Git Push Errors
If you encounter "HTTP 400" errors when pushing large changes:
```
error: RPC failed; HTTP 400 curl 22 The requested URL returned error: 400
```

Run these commands to fix:
```
git config http.postBuffer 524288000
git config http.compression 0
git push --set-upstream origin <your-branch>
```

## Contributing
1. Create a feature branch from `main`
2. Commit your changes with clear messages
3. Push your branch to the repository
4. Submit a pull request with a description of your changes

## License
[Add license information]

## Contact
[Add contact information]