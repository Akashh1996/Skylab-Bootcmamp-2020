import React, { useEffect, useState } from 'react';
import { loadForm1 } from '../actions/action-creators';
import airfranceStore from '../stores/airfrance-store';
import Label from './Label';

function InputText({ label, text }) {
	return (
		<>
			<div className="blocks">
				<Label text={label} />
				<input type="text" value={text}></input>
			</div>
		</>
	);
}

export default InputText;
