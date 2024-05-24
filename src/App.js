
import React,{Component} from 'react';
import './App.css';
import Greet from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Count from './components/count';
import FunctionClick from './components/functionClick'
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import ListName from './components/ListName';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <FunctionClick/> */}
      {/* <Message/> */}
      {/* <Welcome/>
      <Greet name='ashu'/>
      <Greet name='abhi'/>
      <Hello /> */}
      {/* <Count/> */}

      {/* <EventBind/> */}
      {/* <ParentComponent/> */}
      <UserGreeting/>
      {/* <ListName/> */}

      


    </div>
  );
}
}

export default App
