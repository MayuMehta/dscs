import './App.css';
import Footer from './components/Footer.js';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm.js';


function App() {
  return (
    <>      
        <Navbar title='TextWorld'/>
        <TextForm/>
        <Footer/>
        
    </>
  );
}

export default App;
