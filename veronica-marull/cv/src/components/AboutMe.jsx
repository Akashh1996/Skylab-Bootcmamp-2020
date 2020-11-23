import React, { useEffect, useState } from 'react';
import './aboutMe.css';
import { loadData } from '../actions/actions';
import store from '../store/store';

function AboutMe() {
	const [data, setData] = useState(store.getData());

	function handleChange() {
		setData(store.getData());
	}

	useEffect(() => {
		store.addEventListener(handleChange);
		if (!data) {
			loadData();
		}
		return () => {
			store.removeEventListener(handleChange);
		};
	}, [data]);

	return (
		<>
			<div className="container_aboutme">
				{data && (
					<div>
						<h1 className="nameh1">{data.aboutMe.name}</h1>
						<p>{data.aboutMe.textAboutMe}</p>
					</div>
				)}
				{!data && <h2>LOADING...</h2>}
			</div>
		</>
	);
}

export default AboutMe;
