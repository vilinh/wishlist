import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import { GlobalProvider } from "./context/GlobalContext";
const API_BASE = "http://localhost:3001";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Navbar />
        <Home />
      </GlobalProvider>
    </div>
  );
}

export default App;
