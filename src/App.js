import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './components/Home';
import Transactions from "./components/Transactions";
import Information from "./components/Information";
import SharingWith from "./components/SharingWith";
import Category from "./components/Category";
import Codi from "./components/Codi";
import SpendingHistory from "./components/SpendingHistory";
import CodeQR from "./components/CodeQR";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="/movimientos" element={<Transactions />}>
          </Route>
          <Route path="/informacion" element={<Information />} />
          <Route path="/compartir" element={<SharingWith />} />
          <Route path="/categoria" element={<Category />} />
          <Route path="/codi" element={<Codi />} />
          <Route path="/historial" element={<SpendingHistory/>} />
          <Route path="/codeqr" element={<CodeQR/>} />
        </Routes>
      </BrowserRouter>
    </div>

  );
};

export default App;

