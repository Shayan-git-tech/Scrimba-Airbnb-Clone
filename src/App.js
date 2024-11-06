import './App.css';
import Airbnb from './Components/Home/Airbnb.js';
import Main from './Components/Home/Main.js'
import MemeGenerator from './Components/MemeGenerator/MemeGenerator.js';
import Header from './Components/Shared/Header.js';

import {
  HashRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const airbnbLogo = `${process.env.PUBLIC_URL}/Images/Color-Airbnb-Logo.jpg`;
const memeLogo = `${process.env.PUBLIC_URL}/Images/Troll Face.png`;
function App() {
  
 
  return (
    
<Router>
    <div>
        
        
        <Routes>
        <Route path="/" element={
                    <>
                        <Header logo={airbnbLogo} bgColor="white" />
                        <Airbnb />
                        <Main />
                    </>
                    }
                     />
        
        <Route path="/tools" element={
          <>
          <Header logo={memeLogo} bgColor="linear-gradient(90deg, #672290 10%, #A626D3 80%)" title="Meme Generator"/>
          <MemeGenerator /> 
          </>
        }
        />
        </Routes>
        
        
    </div>
</Router>
          

  );
}


export default App;
