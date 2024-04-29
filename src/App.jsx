import { useState } from 'react';
import Nav from './nav/nav';
import Share from './share/share';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav />
      <Share />
    </div>
  );
}

export default App;
