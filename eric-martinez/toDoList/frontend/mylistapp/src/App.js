import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ItemsList from './components/ItemsList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ItemsList}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;