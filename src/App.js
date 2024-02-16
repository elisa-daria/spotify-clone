import MainStructure from "./components/MainStructure";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <header className="col col-2">
            <Sidebar />
          </header>
          <main className="col-12 col-md-9 offset-md-3 mainPage">
            <MainStructure />
          </main>
        </div>
      </div>
      <footer className="container-fluid fixed-bottom bg-container pt-1">
        <Player />
      </footer>
    </>
  );
}

export default App;
