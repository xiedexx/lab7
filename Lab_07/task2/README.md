# Lab 7.2: Error Handling with Error Boundaries

## Overview

This lab extends Lab 7.1 by adding error handling using Error Boundaries. The application combines lazy loading with Error Boundary components to gracefully handle errors when lazy-loaded components fail to load or throw errors.

## Key Concepts

### What is an Error Boundary?

An Error Boundary is a React component that catches JavaScript errors anywhere in its child component tree and displays a fallback UI instead of crashing the entire application.

**Key characteristics:**
- Must be a class component (not a function component)
- Catches errors in child components during rendering
- Displays a fallback UI when an error is caught
- Can include error logging and recovery mechanisms

### When to Use Error Boundaries

Error Boundaries are useful for catching:
- Rendering errors in components
- Errors in lifecycle methods
- Errors in component constructors
- Errors in events (with proper error handling)

**Error Boundaries DO NOT catch:**
- Event handler errors (use try/catch instead)
- Asynchronous code errors (use try/catch)
- Server-side rendering errors
- Errors in the Error Boundary itself

### getDerivedStateFromError

This static method is called after an error is thrown by a component. It updates the state so the next render will show the fallback UI.

```typescript
static getDerivedStateFromError(error: Error): State {
  return { hasError: true, error };
}
```

### componentDidCatch

This lifecycle method is called after an error has been thrown. It's useful for error logging and reporting.

```typescript
componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
  console.error("Error caught:", error, errorInfo);
}
```

## Project Structure

```
Lab_07/task2/
├── App.tsx              # Main app with ErrorBoundary wrapping Suspense
├── App.css              # Styles including error fallback UI
├── ErrorBoundary.tsx    # Error Boundary class component
├── Dashboard.tsx        # Lazy-loaded dashboard page
├── Settings.tsx         # Lazy-loaded settings page
├── Profile.tsx          # Lazy-loaded profile page
├── main.tsx             # Application entry point
└── README.md            # This file
```

## Features Implemented

✅ **Task 1: Create Error Boundary (20 points)**
- `ErrorBoundary` class component with proper TypeScript types
- `getDerivedStateFromError()` static method for error handling
- `componentDidCatch()` for error logging
- Props interface for children and fallback
- State interface tracking error status

✅ **Task 2: Wrap Components (15 points)**
- `ErrorBoundary` wraps `Suspense` in the component tree
- `Suspense` contains all lazy-loaded routes
- User-friendly error fallback message displayed on error
- Error Boundary catches errors from lazy-loaded chunks

✅ **Task 3: Retry Functionality (15 points)**
- `resetError()` method in ErrorBoundary to clear error state
- "Try Again" button rendered along with error fallback
- Click handler resets the error boundary state
- Users can recover from errors without page reload

## Component Hierarchy

```
App
└── ErrorBoundary
    └── Suspense (fallback={LoadingSpinner})
        └── Routes
            ├── Route "/" (Home - loads immediately)
            ├── Route "/dashboard" (Dashboard - lazy loaded)
            ├── Route "/settings" (Settings - lazy loaded)
            └── Route "/profile" (Profile - lazy loaded)
```

## How Error Boundaries Work with Lazy Loading

1. **Normal flow**: Lazy component loads → Suspense shows fallback → Component renders
2. **Error flow**: Lazy component fails to load → Error Boundary catches error → Shows error fallback → User clicks "Try Again" → Error state resets → Can retry loading

## Code Quality

- **TypeScript Strict Mode**: ✅ Enabled
- **No `any` type usage**: ✅ All types properly defined
- **Zero compiler errors**: ✅ Full type safety
- **Proper class component typing**: ✅ Props and State interfaces

## How to Run

1. Copy files from `Lab_07/task2/` to your project
2. Update your `main.tsx` to point to task2's main.tsx
3. Update your `vite.config.ts` if using a different entry point
4. Run: `npm run dev`
5. Navigate to different routes to test lazy loading and error handling

## Testing Error Handling

To simulate an error in development:

1. Update one of the lazy imports temporarily:
   ```typescript
   // This will cause an error when you navigate to dashboard
   const Dashboard = lazy(() => import("./NonExistentFile"));
   ```

2. Navigate to that route
3. The Error Boundary will catch the error
4. The error fallback UI will display
5. Click "Try Again" to reset the error state

## Learning Outcomes

After completing this lab, you should understand:
- How Error Boundaries catch errors in child components
- The difference between class and function components in error handling
- How `getDerivedStateFromError()` and `componentDidCatch()` work
- How to wrap lazy components with error protection
- How to provide retry mechanisms for users
- The limitations of Error Boundaries
- How to combine Suspense and Error Boundaries effectively

## Real-World Applications

Error Boundaries are commonly used for:
- Protecting entire pages or features
- Handling third-party component failures
- Gracefully degrading when lazy chunks fail to load
- Providing fallback UI for critical features
- Error logging and analytics
