import './App.css';
import { useState } from "react";
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import FirstTask from './FirstTask.js';
import SecondTask from './SecondTask.js';
import ThirdTask from './ThirdTask.js';
import FourthTask from './FourthTask.js';
import FifthTask from './FifthTask.js';

function renderTaskState(props){
  const state = props.taskState;

  switch(state){
    case 'start':
      return <FirstTask />
    case 'solution1':
      return <SecondTask />
    case 'solution2':
      return <ThirdTask />
    case 'solution3':
      return <FourthTask />
    case 'solution4':
      return <FifthTask />
    default:
      return <Main />
  }
}

function App() {

  const [taskState, setTaskState] = useState('start');

  return (
    <div className="App">
        <Header />
        {renderTaskState(taskState)}
        <Footer />
    </div>
  );
}

export default App;
