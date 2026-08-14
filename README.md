# Devign - Portfolio Website

![Devign](devign.png)

Welcome to the **Devign** project! This README provides an overview of the project, setup instructions, and other relevant details.

## Table of Contents

- [Visit](#visit)
- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Structure](#structure)
- [Contributors](#contributors)
- [Contributing](#contributing)
- [License](#license)

## Visit

- [Repository](https://github.com/aabubokarr/devign)
- [Website](https://aabubokarr.github.io/devign/)

## About

**Devign** is a digital agency blending creative design and modern development to build user-centric experiences, powerful interfaces, and innovative digital solutions that help brands stand out, connect with audiences, and grow.

## Features

- Modern UI/UX
- Interactive Animation
- Swiper & infinite Scroll
- Responsive Design

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/aabubokarr/devign.git
   ```
2. Navigate to the project directory:
   ```bash
   cd devign
   ```
3. Install dependencies:
   ```bash
   npm i
   ```
4. Start the application:
   ```bash
   npm run dev
   ```
5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Structure

```
devign/
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions deployment workflow
├── public/
│   ├── img/                          # Static images and assets
│   │   ├── case-*.jpg                # Case study images
│   │   ├── feedback-*.jpg            # Feedback profile images
│   │   ├── scroll.svg                # Scroll icon
│   │   └── star.svg                  # Star icon
│   ├── manifest.json                 # Web app manifest (PWA)
│   ├── robots.txt                    # SEO robots file
│   └── vite.svg                      # Vite favicon
├── src/
│   ├── components/
│   │   ├── animations/
│   │   │   └── framer.js             # Framer Motion animation utilities
│   │   ├── data/
│   │   │   └── data.json             # Static data (cases, feedback, etc.)
│   │   ├── icons/
│   │   │   ├── company.jsx           # Company logo icons
│   │   │   ├── logo.jsx              # Main logo component
│   │   │   └── menu.jsx              # Menu/hamburger icon
│   │   ├── sections/
│   │   │   ├── Case.jsx              # Case studies section
│   │   │   ├── Contact.jsx           # Contact form section
│   │   │   ├── Expertise.jsx         # Expertise section
│   │   │   ├── Feedback.jsx          # Client feedback section
│   │   │   ├── Home.jsx              # Home/hero section
│   │   │   ├── Navbar.jsx            # Navigation bar
│   │   │   └── Question.jsx          # FAQ section
│   │   └── ui/
│   │       ├── input.jsx             # Reusable input component
│   │       └── section-title.jsx     # Section title component
│   ├── constants/
│   │   └── index.js                  # App constants (animations, configs)
│   ├── App.jsx                       # Main app component
│   ├── index.css                     # Global styles
│   └── main.jsx                      # Application entry point
├── dist/                             # Build output directory (generated)
├── node_modules/                     # Dependencies (generated)
├── index.html                        # HTML entry point
├── LICENSE                           # MIT License file
├── package.json                      # Dependencies and scripts
├── package-lock.json                 # Locked dependency versions
├── postcss.config.js                 # PostCSS configuration
├── tailwind.config.js                # Tailwind CSS configuration
├── vite.config.js                    # Vite configuration
└── README.md                         # Project documentation
```

## Contributors

<p align="center">
  <a href="https://github.com/aabubokarr/devign/graphs/contributors">
    <img src="https://contrib.rocks/image?repo=aabubokarr/devign" alt="Contributors" />
  </a>
</p>

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
