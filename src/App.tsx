import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./page/HomePage";
import InventoryPage from "./page/InventoryPage";

function App() {
     return (
          <BrowserRouter>
               <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/inventario" element={<InventoryPage />} />
               </Routes>
          </BrowserRouter>
     );
}

export default App;
