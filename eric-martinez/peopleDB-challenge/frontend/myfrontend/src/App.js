import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FormUser from './components/FormUser';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={FormUser}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;