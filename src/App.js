import Header from "./components/Header";
import './default.scss'
import HomePage from "./pages/Homepage";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  );
}

export default App;
