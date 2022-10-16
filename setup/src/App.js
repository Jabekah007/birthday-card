import React, { useState } from 'react';
import data from './data';
import List from './List';
/**
 * We're using the useState hook to create a state variable called people, which is set to the data
 * array. We're then passing the people array to the List component as a prop
 */
function App() {
  const [people,setPeople] = useState(data);

  return(
    <main>
      <section className="container">
        <h3>{people.length} birthday today</h3>
        <List people={people}/>
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
