import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './components/Home';
import Transactions from "./components/Transactions";
import Information from "./components/Information";
 
function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/movimientos" element={<Transactions/>}>
      </Route>
      <Route path="/informacion" element={<Information/>}/>
      </Routes>
      </BrowserRouter>
    </div>
     
  );
}

export default App;

