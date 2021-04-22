import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.scss";
import { Header } from "./nav/Header";
import { AppRoutes } from "./nav/routes";
import { PlacesPages } from "./features/places/PlacesPages";
import { Footer } from "./nav/Footer";

function App() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between bg-white dark:bg-gray-800 dark:text-gray-100">
      <BrowserRouter>
        <Header/>
        <main className="p-9 place-self-start self-stretch flex-grow">
          <Switch>
            <Route path={`/${AppRoutes.Places}`}>
              <PlacesPages/>
            </Route>
            <Route path={`/${AppRoutes.Bonjour}`}>
              <p>aperos</p>
            </Route>
            <Route path={`/${AppRoutes.Aurevoir}`}>
              <p>Aurevoir</p>
            </Route>
            <Route path={`/${AppRoutes.Root}`}>
              <p>root</p>
            </Route>
          </Switch>
        </main>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
