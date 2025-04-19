# AquaMate Project Guidelines

## Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run all tests
- `pnpm test path/to/test.ts` - Run specific test

## Code Style
- **Naming**: PascalCase for components/types, camelCase for functions/variables, kebab-case for files/directories
- **TypeScript**: Use types over interfaces, strict typing, and functional patterns over classes
- **React**: Prefer React Server Components (RSC), minimize `'use client'` directives
- **Imports**: Use absolute imports with `@/` prefix (e.g., `import Button from '@/components/ui/button'`)
- **Error Handling**: Implement robust error handling with user-friendly messages
- **UI/Styling**: Use Shadcn UI, Radix UI components with Tailwind CSS (mobile-first approach)
- **Performance**: Optimize for Web Vitals, use `next/image` for optimized images
- **State Management**: Prefer React hooks and server actions for mutations

## Best Practices
- Follow functional programming patterns, avoid classes
- Prefer iteration and modularization over code duplication
- Start function names with verbs to indicate purpose
- Use descriptive variable names with auxiliary verbs (e.g., `isLoading`, `hasError`)
- Minimize client-side JavaScript by leveraging server components where possible