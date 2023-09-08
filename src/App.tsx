import {JSX} from 'react';
import './App.scss';
import Ticket from "./components/Ticket/Ticket";
import Filter from "./components/Filter/Filter";

function App ():JSX.Element {
  return (
    <div className="App">
            <Filter/>
            <Ticket/>
    </div>
  );
}

export default App;
