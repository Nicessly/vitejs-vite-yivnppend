import { useState } from 'react';
import PostBox from './comp/comp';
import Nav from './nav/nav';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Pages/>
      <Nav/>
      <PostBox/>
    </div>
  );
}

export default App;
