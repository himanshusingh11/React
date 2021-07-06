import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap"
import {ToastContainer,toast} from "react-toastify"
import Home from './components/Home';

function App() {
  const btnHandle = () => {
    toast("This is first message" ,{position :"top-center"});
  }

  return (
    <div>
    <ToastContainer/>
      <Home/>

     
    </div>
  );
}


export default App;
