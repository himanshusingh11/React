import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap"
import {ToastContainer,toast} from "react-toastify"

function App() {
  const btnHandle = () => {
    toast("This is first message" ,{position :"top-center"});
  }

  return (
    <div>
      <ToastContainer/>
      <h1>This is Bootstrap Components</h1>
      <Button color = "warning" outline onClick={btnHandle}>First React Button</Button>
    </div>
  );
}


export default App;
