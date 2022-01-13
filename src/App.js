import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import TutList from "./components/TutList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <TutList />
        <ThemeToggle />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
