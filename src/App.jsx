import logo from './logo.svg';
import './App.css';
import MyNavBar from './Components/MyNavBar';
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from './Components/MyFooter';
import AllTheBooks from './Components/AllTheBooks';
import MyAlert from './Components/MyAlert';
import SingleBook from './Components/SingleBook';



function App() {
  return (
    <div className="App">
      <MyNavBar/>
      <MyFooter/>
      <MyAlert/>
      <AllTheBooks/>
      
      
    </div>
  );
}

export default App;
