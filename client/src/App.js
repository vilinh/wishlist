import { GlobalProvider } from "./context/GlobalContext";
import Layout from "./pages/Layout";
const API_BASE = "http://localhost:3001";

function App() {
  return (
    <div>
      <GlobalProvider>
        <Layout />
      </GlobalProvider>
    </div>
  );
}

export default App;
