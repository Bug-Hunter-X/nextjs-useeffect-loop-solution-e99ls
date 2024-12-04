```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <MyComponent/>
    </div>
  );
}

// components/MyComponent.js
export default function MyComponent() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    // This effect will run infinitely because it doesn't have a dependency array
    console.log('Count:', count);
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```