# Lab 7.1: Code Splitting with Suspense

## Overview

This lab demonstrates code splitting using React's `lazy()` function and the `Suspense` component. The application splits the code into separate chunks that load on demand, improving initial page load time.

## Key Concepts

### What is Code Splitting?

Code splitting is a technique that breaks apart your application into smaller chunks that can be loaded on demand instead of loading everything in one bundle. This reduces the initial load time and improves application performance.

**Benefits:**
- Faster initial page load
- Users only download code they need
- Better caching - changed code doesn't invalidate the entire bundle
- Improved user experience with lazy loading

### Making Components Lazy

The `lazy()` function from React allows you to define components that are loaded dynamically using `import()`. It returns a lazy component that loads the bundle when rendered.

```typescript
import { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));
const Settings = lazy(() => import("./Settings"));
```

**Key points:**
- Use default exports for lazy components
- The component only loads when it's first rendered
- Lazy components must be rendered inside `Suspense`

### Using the Suspense Component

`Suspense` lets you display fallback content while child components are loading. It acts as a boundary for lazy components.

```typescript
<Suspense fallback={<LoadingSpinner />}>
  <Routes>
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/settings" element={<Settings />} />
  </Routes>
</Suspense>
```

**Fallback UI ideas:**
- Simple text: `<p>Loading...</p>`
- Spinner with CSS animation
- Skeleton screens mimicking the layout
- Progressive loading showing partial content

## Project Structure

```
Lab_07/task1/
├── App.tsx              # Main app with routes and Suspense
├── App.css              # Styles including spinner animation
├── Dashboard.tsx        # Lazy-loaded dashboard page
├── Settings.tsx         # Lazy-loaded settings page
├── Profile.tsx          # Lazy-loaded profile page
├── main.tsx             # Application entry point
└── README.md            # This file
```

## Features Implemented

✅ **Task 1: Setup**
- React TypeScript project with Vite
- React Router installed and configured
- Navigation between pages with Link components

✅ **Task 2: Lazy Loading**
- Three page components (Dashboard, Settings, Profile) imported with `lazy()`
- Dynamic imports using `import()` create separate code chunks
- Each route renders the appropriate lazy-loaded page

✅ **Task 3: Suspense Fallback UI**
- Custom `LoadingSpinner` component with CSS animation
- Smooth spinner rotation animation
- Fallback shown while lazy components load
- Responsive design

## Code Quality

- **TypeScript Strict Mode**: ✅ Enabled
- **No `any` type usage**: ✅ All types properly defined
- **Zero compiler errors**: ✅ Full type safety

## How to Run

1. Copy files from `Lab_07/task1/` to your project
2. Update your `main.tsx` to point to task1's main.tsx
3. Update your `vite.config.ts` if using a different entry point
4. Run: `npm run dev`
5. Navigate to different routes to see lazy loading in action

## Expected Behavior

1. **Home page** loads immediately without lazy loading
2. **Dashboard, Settings, Profile pages** show loading spinner while chunks are being downloaded
3. Once loaded, pages display content
4. Navigate between pages to see Suspense fallback in action
5. With network throttling in DevTools, fallback UI is visible longer

## Learning Outcomes

After completing this lab, you should understand:
- How code splitting works and why it improves performance
- How to use React's `lazy()` function with dynamic imports
- How to implement `Suspense` as a boundary for lazy components
- How to create custom fallback UI during loading
- How webpack/Vite handles code chunks automatically
