import './App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Article from './Components/Article';
import Modal from './Components/Modal';
import Modal2 from './Components/Modal2';



function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Modal />
      <Article />
      {/* <Modal2 /> */}
    </>
  );
}

export default App;
