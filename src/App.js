
import './App.css';

import NavBar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar';
import Tasks from './pages/Tasks';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Tasks/>
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
