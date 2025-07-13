# Contributing to Ready Mail

Thanks for your interest in contributing to Ready Mail! We welcome contributions from developers of all skill levels.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v9.7.1 or higher - we use pnpm for this project)
- Git

> **Note**: This project uses pnpm as the package manager. Please do not use npm or yarn as they may cause dependency conflicts.

### Local Development Setup

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/ready-mail.git
   cd ready-mail
   ```

3. Install dependencies:
   ```bash
   pnpm install
   ```

4. Set up environment variables:
   ```bash
   cp .env.example .env
   ```
   Fill in the required environment variables.

5. Start the development server:
   ```bash
   pnpm dev
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
   pnpm test
   pnpm build
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
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm test         # Run tests
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm db:push      # Push database schema changes
pnpm db:studio    # Open Prisma Studio (database GUI)
pnpm db:generate  # Generate Prisma client
```

Thanks for helping make Ready Mail better for the developer community!
