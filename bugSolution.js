```javascript
// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    console.log('Count:', count);
    // Add count to the dependency array to fix the infinite loop
  }, [count]);

  return <div>Count: {count}</div>;
}
```