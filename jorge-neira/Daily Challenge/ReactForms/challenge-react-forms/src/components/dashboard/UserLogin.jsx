import React, { useState } from 'react';

function UserLogin() {
	const [email, setEmail] = useState();
	const [password, setPassword] = useState('');

	function handleChange({ target: { value } }, setValue) {
		setValue(value);
	}
	return (
		<section>
			<label>
				<span>Email</span>
				<input
					className="email"
					type="email"
					required
					pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
					onChange={(event) => handleChange(event, setEmail)}
					value="hola@as.com"
				></input>
			</label>
			<label>
				<span>Password</span>
				<input
					className="password"
					type="password"
					onChange={(event) => handleChange(event, setPassword)}
					value={password}
				></input>
			</label>
		</section>
	);
}

export default UserLogin;
