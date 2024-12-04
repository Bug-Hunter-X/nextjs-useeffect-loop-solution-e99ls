# Next.js useEffect Infinite Loop Bug

This repository demonstrates a common bug in Next.js applications involving the `useEffect` hook.  The bug is caused by an infinite loop due to a missing dependency array in `useEffect`, leading to a constantly updating counter.

## Bug Description

The `MyComponent` component uses `useEffect` to log and increment a counter.  Without a dependency array, the effect runs after every render, creating an infinite loop.

## Solution

The solution involves adding the `count` variable to the dependency array. This ensures the effect only runs when the `count` value changes, breaking the infinite loop.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the Next.js development server.
4. Observe the console and the page's counter—it will rapidly increase.