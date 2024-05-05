import { useState } from 'react';
import Nav from './nav/nav';
import Share from './share/share';
import SearchBox from './search/search';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Nav/>
      <Share/>
      <SearchBox/>
    </div>
  );
}

export default App;
