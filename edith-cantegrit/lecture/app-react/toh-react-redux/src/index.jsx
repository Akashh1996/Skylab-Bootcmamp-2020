import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './redux/configureStore';
import reportWebVitals from './reportWebVitals';

const store = configureStore();

render(
	<React.StrictMode>
		<ReduxProvider store={store}>
			<BrowserRouter>
				<Header />
				<hr />
				<Switch>
					<Route path="/dashboard" exact component={Dashboard} />
					<Route path="/heroes" exact component={HeroList} />
					<Route path="/heroes/:algo" component={HeroDetails} />
				</Switch>
			</BrowserRouter>
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

reportWebVitals();
