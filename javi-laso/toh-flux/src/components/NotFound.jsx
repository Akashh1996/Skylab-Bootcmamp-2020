import React, { useEffect } from 'react';

function NotFound(props) {
	useEffect(() => {
		setTimeout(() => {
			props.history.push('/');
		}, 2000);
	});

	return (
		<>
			<h1>Page not found!</h1>
			<h3>Coming back to dashboard...</h3>
		</>
	);
}

export default NotFound;
