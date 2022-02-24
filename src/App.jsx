import './styles/App.css';
import { useContext } from 'react';
import Header from "./components/Header/Header.jsx";
import Main from "./pages/Main.jsx";
import Footer from "./components/Footer/Footer.jsx";
import TeamContext from './utility/Team';

function App() {
  
  const {team} = useContext(TeamContext);
  console.log(team);
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;