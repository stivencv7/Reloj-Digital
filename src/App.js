import logo from './logo.svg';
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css"; 
import "primereact/resources/primereact.min.css";                 
import "primeicons/primeicons.css";   
import { TimeHooks } from './components/layout/getTime';

function App() {
  return (
    <div className="App">
     
      <TimeHooks/>
      
    </div>
  );
}

export default App;
