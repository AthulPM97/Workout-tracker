import { Route, Switch } from "react-router-dom";
import PushDay from "./components/PushDay/PushDay";
import NavigationBar from "./components/UI/NavigationBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavigationBar />
      <br/>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/push-day">
          <PushDay />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
