import { Routes, Route, Outlet } from "react-router-dom";
import useGlobalState from "./globalstate";
import Homepage from "./router/Homepage";
import Dashboard from "./router/Dashboard";
import Home from "./router/Dashboard/Home";
import Keluar from "./router/Dashboard/Keluar";
import Kuis from "./router/Dashboard/Kuis";
import No from "./router/Dashboard/Kuis/No";
import Hasil from "./router/Dashboard/Kuis/Hasil";
function App() {
  const { isLoggedIn } = useGlobalState();
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {isLoggedIn && (
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="kuis" element={<Outlet />}>
            <Route index element={<Kuis />} />
            <Route path="mengerjakan" element={<No />} />
            <Route path="hasil" element={<Hasil />} />
          </Route>
          <Route path="keluar" element={<Keluar />} />
        </Route>
      )}
    </Routes>
  );
}

export default App;
