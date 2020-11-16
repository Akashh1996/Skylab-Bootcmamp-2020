import React, { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

function ThirdDivContent() {
	const [startDate, setStartDate] = useState(new Date());
	return (
		<div class="third-row">
			<label>Fecha de viaje: </label>
			<DatePicker
				dateFormat="dd/MM/yyyy"
				selected={startDate}
				onChange={(date) => setStartDate(date)}
			/>
		</div>
	);
}

export default ThirdDivContent;
