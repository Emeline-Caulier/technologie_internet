import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Bienvenue from "./composants/Bienvenue";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Compteur from "./composants/Compteur";
import UseState from "./composants/UseState";
import Destinations from "./composants/Destinations";

export default function App() {
    let nombre  = 15;
    return (
      <>
          <main className="main">
              <h3>Programme react</h3>
                <BrowserRouter>
                    <nav>
                        <button> <Link to={"/Bienvenue"}>Bienvenue</Link> </button>
                        <button> <Link to={"/Compteur"}>Compteur</Link> </button>
                        <button> <Link to={"/UseState"}>UseState</Link> </button>
                        <button> <Link to={"/Destinations"}>Nos destinations</Link> </button>
                    </nav>

                    <Routes>
                        <Route path="/Bienvenue" element={<Bienvenue />} />
                        <Route path="/Compteur" element={<Compteur />} />
                        <Route path="/UseState" element={<UseState nbr={nombre} />} />
                        <Route path="/Desitnations" element={<Destinations />} />

                    </Routes>
                </BrowserRouter>
              {/*<Bienvenue nombre={nombre}/>*/}
          </main>

      </>

  );
}

