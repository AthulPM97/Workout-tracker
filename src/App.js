import { Route, Switch } from "react-router-dom";
import LegDay from "./components/LegDay/LegDay";
import PullDay from "./components/PullDay/PullDay";
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
        <Route path="/leg-day">
          <LegDay/>
        </Route>
        <Route path="/pull-day">
          <PullDay/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
