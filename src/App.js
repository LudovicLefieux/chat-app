import './App.css';
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Contact 
        name="Roberto Garcia" 
        avatar="https://randomuser.me/api/portraits/men/55.jpg"
        online
      />
      <Contact 
        name="Lewis Steward" 
        avatar="https://randomuser.me/api/portraits/men/47.jpg"
      />
      <Contact 
        name="Julie Kennedy" 
        avatar="https://randomuser.me/api/portraits/women/52.jpg"
        online
      />
    </div>
  );
}

export default App;
