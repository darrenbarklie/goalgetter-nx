import { useEffect, useState } from 'react';

export function App() {
  const [greeting, setGreeting] = useState<{ message: string }>({
    message: '',
  });

  useEffect(() => {
    fetch('http://localhost:3000/')
      .then((response) => response.json())
      .then((data) => {
        setGreeting(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>{import.meta.env.VITE_APP_TITLE}</h1>
      <h2>{greeting && greeting.message}</h2>
    </div>
  );
}

export default App;
