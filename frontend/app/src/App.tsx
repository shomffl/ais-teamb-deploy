import "./App.css";
import Card from "./components/parts/Card";
import Header from "./components/parts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto mt-20">
        <Card />
      </div>
    </div>
  );
}

export default App;
