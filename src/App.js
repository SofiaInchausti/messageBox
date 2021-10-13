import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import SentMessages from './components/Box-messages/SentMessages';
import Home from './components/Home/Home' ;
import MessageForm from './components/Message-form/MessageForm'


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route exact path= '/' component={Home}/>
        <Route exact path='/message-form' component={MessageForm}/>
        <Route exact path= '/sent-messages' component={SentMessages}/> 
      </Switch>
    </div>
    </BrowserRouter>
  )
}
    
export default App;
