import { BrowserRouter, Routes, Route } from "react-router-dom";

import Adduser from "./components/Adduser";
import Navbar from "./components/Navbar";
import Alluser from "./components/Alluser";
import Edituser from "./components/Edituser";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Alluser />} />
        <Route path="/add" element={<Adduser />} />
        <Route path="/edit/:id" element={<Edituser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
