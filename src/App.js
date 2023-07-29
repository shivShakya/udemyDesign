import './App.css';
import Main from './component/Main/Main';
import AngularNav from './component/Navbar/AngularNav';
import Footer from './component/Footer/Footer';
import UdemyNav from './component/Navbar/UdemyNav';
import UpSub from './component/Navbar/UpSub';

function App() {
  return (
    <div className="App">

         <AngularNav/>
         <UdemyNav/>
         <UpSub/>
         <Main/>
         <Footer/>
     
    </div>
  );
}

export default App;
