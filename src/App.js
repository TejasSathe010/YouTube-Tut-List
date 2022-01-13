import Navbar from "./components/Navbar";
import TutList from "./components/TutList";
import ThemeContextProvider from "./contexts/ThemeContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <TutList />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
