import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
const API_BASE = "http://localhost:3001";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
