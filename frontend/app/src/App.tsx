import "./App.css";
import Card from "./components/parts/Card";
import Header from "./components/parts/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto my-20">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 justify-items-center">
          {[...Array(5)].map((_) => (
            <div className="">
              <Card />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
