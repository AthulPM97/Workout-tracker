import Day from "./components/Exercise/Day";
import NavigationBar from "./components/UI/NavigationBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <NavigationBar/>
      <HomePage/>
      <Day />
    </div>
  );
}

export default App;
