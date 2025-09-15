# Red Planet Staffing

[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

Welcome to **Red Planet Staffing** – the premier staffing solution for Martian workplaces. As of the 2050 census, with over one million residents, Mars is experiencing unprecedented growth. Our platform bridges the gap between Martian businesses and skilled workers, ensuring seamless workforce management across the Red Planet.

![Red Planet Staffing](./assets/red-planet.webp)
*Martian landscape - Where opportunity meets innovation*

## 📋 Table of Contents
- [Business Context](#business-context)
- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Documentation](#-documentation)
- [Contributing](#-contributing)
- [License](#-license)

## Business Context

### The Challenge
Martian workplaces face unique staffing challenges due to the planet's growing population and dynamic work environment. While full-time staff form the backbone of operations, there's an increasing need for flexible, short-term staffing solutions.

### Our Solution
Red Planet Staffing provides a robust marketplace where:
- Workplaces can post available shifts with specific requirements
- Skilled workers can browse and claim shifts that match their expertise
- Seamless shift management from posting to payment
- Real-time tracking of workforce allocation

## ✨ Features

- **Effortless Shift Management**: Post, claim, and manage shifts with an intuitive interface
- **Real-time Matching**: Instantly connect workplaces with qualified workers
- **Flexible Staffing**: Fill last-minute vacancies or plan ahead for peak periods
- **Secure Payments**: Automated payment processing based on hours worked
- **Performance Tracking**: Rate and review system for both workers and workplaces

## 🚀 Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- MongoDB (for local development)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/red-planet-staffing.git
   cd red-planet-staffing
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install server dependencies
   cd server
   npm install
   
   # Install client dependencies
   cd ../client
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both client and server directories
   - Update the configuration values as needed

4. Start the development servers:
   ```bash
   # Start server
   cd server
   npm run dev
   
   # In a new terminal, start client
   cd client
   npm start
   ```

## 📁 Project Structure

```
.
├── client/                 # Frontend React application
├── server/                 # Backend Node.js/Express server
├── .github/                # GitHub workflows and configurations
├── assets/                 # Static assets (images, etc.)
└── README.md               # Project documentation
```

## 📚 Documentation

For detailed documentation, please refer to:
- [Server Documentation](./server/README.md)
- [Client Documentation](./client/README.md)

## 🤝 Contributing

We welcome contributions from the community! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

> **Note**: This is a Hatchways assessment project. Please submit your solution by creating a pull request (PR) on this repository. **Do not** merge your PR. Return to your Hatchways assessment page to confirm your submission.
