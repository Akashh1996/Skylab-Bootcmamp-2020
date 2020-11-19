import './App.css';

import UserList from './components/UserList/UserList'
import { BrowserRouter, Switch } from 'react-router-dom'



function App() {
	return (
		<BrowserRouter>
			<Switch>
				<UserList />,
			</Switch>
		</BrowserRouter>
	);
}

export default App;
