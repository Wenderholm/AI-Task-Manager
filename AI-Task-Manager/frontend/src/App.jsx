import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
