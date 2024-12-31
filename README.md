# React useEffect Infinite Loop Bug

This repository demonstrates a common React bug involving the `useEffect` hook that causes an infinite loop. The bug occurs when the state update inside the `useEffect` hook depends on the current state, leading to continuous re-renders and updates.

## Bug Description

The `MyComponent` uses `useState` to manage a count. The `useEffect` hook attempts to increment the count on every render.  This creates a loop because each increment causes a re-render, which triggers the `useEffect` again, resulting in an infinite loop and potentially crashing the application.