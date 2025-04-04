# ResuMeUp - Professional Resume Builder

ResuMeUp is a modern, responsive web application built with Next.js that helps users create professional, ATS-friendly resumes. This project includes a complete UI/UX implementation with login/signup functionality, responsive design, and various resume-related features.

![ResuMeUp Screenshot](/placeholder.svg?height=400&width=800)

## 🚀 Features

- **Responsive Design**: Mobile-first approach ensuring optimal viewing across all devices
- **Authentication System**: Complete login/signup flow with social login options
- **Resume Templates**: Various professional resume templates
- **ATS Optimization**: Templates designed to pass through Applicant Tracking Systems
- **Accessibility**: WCAG compliant components and semantic HTML
- **SEO Friendly**: Optimized metadata and semantic structure
- **Dark Mode Support**: Built-in theme switching functionality
- **Form Validation**: Robust form handling with React Hook Form and Zod
- **Modern UI Components**: Built with Radix UI and Tailwind CSS
- **Type Safety**: Full TypeScript support

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18.17.0 or later)
- [pnpm](https://pnpm.io/) (v8.6.0 or later) - Recommended package manager
- [Git](https://git-scm.com/) for version control

## 🛠️ Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/ichikapaull/ResuMeUp.git
cd ResuMeUp
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
ResuMeUp/
├── app/                    # Next.js app directory
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   ├── forgot-password/   # Password recovery
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── ui/               # UI components
│   ├── header.tsx        # Header component
│   ├── footer.tsx        # Footer component
│   └── ...              # Other components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/              # Static assets
└── styles/              # Global styles
```

## 🛠️ Technologies Used

- **Framework**: [Next.js](https://nextjs.org/) 15.2.4
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Form Handling**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **State Management**: React Context
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Charts**: [Recharts](https://recharts.org/)

## 🔧 Development

### Running Tests
```bash
pnpm test
```

### Building for Production
```bash
pnpm build
```

### Starting Production Server
```bash
pnpm start
```

### Linting
```bash
pnpm lint
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) team for the amazing framework
- [Radix UI](https://www.radix-ui.com/) for the accessible components
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📞 Support

For support, email support@resumeup.com or join our Slack channel.

---

Made with ❤️ by the ResuMeUp team

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
