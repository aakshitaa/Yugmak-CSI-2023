import logo from './logo.svg';
import './App.css';
import {About, Contact, Eventtimeline, Home} from './Components'

function App() {
  return (
    <div className="App">
      <Home />
     <div className="container-fluid doubleShade">
      <Eventtimeline/>
      <About/>
      <Contact/>
     </div>
    </div>
  );
}

export default App;
