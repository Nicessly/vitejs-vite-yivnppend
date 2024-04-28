import { useState } from 'react';
import Nav from './nav/nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
    </div>
  );
}

export default App;
