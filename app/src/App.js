import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Nav from './Components/Nav';
import Search from './Components/Search';


function App() {
  return (
    <div className="container-fluid">
      <header className="App-header">
        <Nav/>
      </header>
      <section>
       <Search></Search>
      </section>
      <footer>
        <p>Copyright © 2020 Design by Misza</p>
      </footer>
    </div>
  );
}

export default App;
