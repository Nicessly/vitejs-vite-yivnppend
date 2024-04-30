import { useState } from 'react';
import Nav from './nav/nav';
import Share from './share/share';
import PostBox from './comp/comp';
import Pages from './nav/pages/pages';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Pages/>
      <Nav/>
      <Share/>
    </div>
  );
}

export default App;
