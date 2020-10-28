import React, { useEffect, useState } from 'react';
import Select from './Select';
import TextInput from './TextInput';
import Textarea from './Textarea';
import EmailInput from './EmailInput';
import TelInput from './TelInput';
import ButtonInput from './ButtonInput';
import {
	loadOptions,
	loadFlight,
	deleteFlight
} from '../actions/action-creators';
import optionsStore from '../stores/options-store';
import flightsStore from '../stores/flights-store';

function Main() {
	const [options, setOptions] = useState(optionsStore.getOptions());
	const [flight, setFlight] = useState(flightsStore.getFlight(''));

	useEffect(() => {
		optionsStore.addEventListener(onChange);
		if (!options) {
			loadOptions();
		}

		return () => {
			optionsStore.removeEventListener(onChange);
		};
	}, [options]);

	function onChange() {
		const options = optionsStore.getOptions();
		setOptions(options);
	}

	useEffect(() => {
		console.log('entroo');
		flightsStore.addEventListener(onChangeFlight);

		return () => {
			flightsStore.removeEventListener(onChangeFlight);
		};
	}, [flight]);

	function onChangeFlight() {
		const flight = flightsStore.getFlight();
		setFlight(flight);
	}

	return (
		<main>
			<a href="#">Book for 10+ passengers</a>
			<form id="form" action="">
				<div className="select">
					{options &&
						options.map((object) => (
							<Select type={object.type} options={object.options} />
						))}
				</div>
				<TextInput flight={flight} />
				<Textarea />
				<EmailInput />
				<TelInput />
				<ButtonInput />
				<p>
					<button
						onClick={() => {
							loadFlight();
						}}
					>
						Add flight
					</button>
				</p>
				<p>
					<button
						onClick={() => {
							deleteFlight();
						}}
					>
						Delete flight
					</button>
				</p>
			</form>
		</main>
	);
}

export default Main;
