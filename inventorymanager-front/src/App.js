import './App.css';
import TeamBuild from './components/TeamBuild';
import Logo from './assets/logo.png'

function App() {
  return (
    <div className="App">
      <img src={ Logo } alt="Inventory"/>
      <h1>Hello, Inventory Manager</h1>
      <TeamBuild />
    </div>
  );
}

export default App;
