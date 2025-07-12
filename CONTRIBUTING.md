# Ready Mail

> Free professional email templates with drag-and-drop builder. Use ready-made templates or create your own.

Designing emails doesn't have to be hard. Ready Mail makes it effortless to create stunning, responsive emails—no coding required. With an intuitive visual editor and powerful collaboration features, you can focus on your message and your brand, not the technical details.

## Features

* **Visual email designer**: Notion-style block editor for building beautiful, responsive emails, no coding required (drag-and-drop interface coming soon).
* **Reusable templates**: Save and reuse your favorite designs for faster creation.
* **Export HTML**: Download production-ready HTML to use with your preferred email service.
* **Preview & test**: See exactly how your emails will look on desktop and mobile.
* **Flexible saving**: Start designing right away, log in when you want to save or reuse your designs later.
* **No vendor lock-in**: Use your email provider, Ready Mail focuses on design, not sending.

## Coming Soon

* Email workflows and automation
* Email tracking and analytics
* Audience management and segmentation
* Theme and branding tools

## Tech Stack

* Next.js – framework
* TypeScript – language
* Tailwind CSS – styling
* shadcn/ui – UI components
* Clerk – authentication and user management
* Prisma – ORM
* MongoDB – database
* Turborepo – monorepo

## Contributing

Thanks for your interest in contributing to Ready Mail! We welcome contributions from developers of all skill levels.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Local Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ready-mail.git
   cd ready-mail
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Fill in the required environment variables.

5. Start the development server:
   ```bash
   npm run dev
   ```

## How to Contribute

### Reporting Issues
- Check existing issues before creating a new one
- Use the issue templates when available
- Include steps to reproduce the bug
- Add screenshots if relevant

### Feature Requests
- Open an issue to discuss the feature before implementing
- Explain the use case and why it would be valuable
- Consider if it fits Ready Mail's focus on developer-friendly email design

#### Pull Request Process:

1. Create a feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes:
   - Follow the existing code style
   - Add tests if applicable
   - Update documentation if needed

3. Test your changes:
   ```bash
   npm run test
   npm run build
   ```

4. Commit your changes:
   ```bash
   git commit -m "feat: add new email template for password reset"
   ```
   Use conventional commit format: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `test:`

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

6. Open a pull request:
   - Use the PR template
   - Link any related issues
   - Add screenshots for UI changes
   - Describe what you've changed and why

## Code Guidelines

### Tech Stack
- **Framework**: Next.js with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Prisma with MongoDB
- **Authentication**: Clerk
- **Monorepo**: Turborepo

### Code Style
- Use TypeScript for type safety
- Follow ESLint and Prettier configurations
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Adding Email Templates
When contributing new email templates:
- Ensure they work across major email clients
- Test in both light and dark mode
- Include mobile-responsive design
- Add appropriate fallbacks for unsupported features
- Follow the existing template structure

## Development Tips

### Project Structure
```
apps/
  web/          # Main Next.js application
  api/          # API routes and backend logic
packages/
  ui/           # Shared UI components
  config/       # Shared configuration
  database/     # Database schema and utilities
```

### Testing Email Templates
- Use tools like Litmus or Email on Acid for cross-client testing
- Test on popular email clients: Gmail, Outlook, Apple Mail, Yahoo
- Verify both desktop and mobile rendering
- Check dark mode compatibility

### Useful Commands
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run test         # Run tests
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## Questions?

If you have questions about contributing, feel free to:
- Open an issue with the "question" label
- Reach out to the maintainers

Thanks for helping make Ready Mail better for the developer community!
