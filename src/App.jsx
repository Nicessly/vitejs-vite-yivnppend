import { useState } from 'react';
import Nav from './nav/nav';
import Post from './post/post';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
