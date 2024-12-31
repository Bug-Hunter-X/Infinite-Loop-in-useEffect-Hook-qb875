```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic. The empty dependency array ensures this runs only once on mount.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); // Increment every 1000ms

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return <div>Count: {count}</div>;
}
```