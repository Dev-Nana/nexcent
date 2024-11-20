import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Clients from "./components/clients/Clients";

import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Banner />
      <Clients />
    </div>
  );
}

export default App;
