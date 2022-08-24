import {
  BrowserRouter, Routes, Route,
} from "react-router-dom";
import Home from './components/Home';
import Transactions from "./components/Transactions";
import Information from "./components/Information";
import SharingWith from "./components/SharingWith";
import Codi from "./components/Codi";

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
          <Route path="/codi" element={<Codi />} />

        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

