import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { RegisterPage } from "./pages/register page/RegisterPage";
import { LoginPage } from "./pages/login page/LoginPage";
import { DashboardPage } from "./pages/dashboard page/DashboardPage";
import { FavoritePage } from "./pages/favorite/FavoritePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer />
    </div>
  );
}

export default App;
