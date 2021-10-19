import { Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import './default.scss'
import HomeLayout from "./Layout/HomeLayout";
import MainLayout from "./Layout/MainLayout";
import HomePage from "./pages/Homepage";
import Register from "./pages/Register";

function App() {
  return (
    <div className="app">
        <Switch>
            <Route exact path="/" >
              <HomeLayout>
                <HomePage />
              </HomeLayout>
            </Route>
          <MainLayout>
            <Route path="/register" >
              <Register />
            </Route>
          </MainLayout>
        </Switch>
    </div>
  );
}

export default App;
