import { useState } from 'react';
import Label from './Label';

function InputText({ label, text }) {
	const [input, setInput] = useState(text);

	return (
		<>
			<div className="blocks">
				<Label text={label} />
				<input
					type="text"
					value={input}
					onChange={(event) => setInput(event.target.value)}
				></input>
			</div>
		</>
	);
}

export default InputText;
