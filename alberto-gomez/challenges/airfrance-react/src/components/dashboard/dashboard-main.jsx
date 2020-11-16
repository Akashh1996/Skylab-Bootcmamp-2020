import React, { useState } from 'react';
import FirstDivContent from './first-div-main/FirstDivContent';
import SecondDivContent from './second-div-main/SecondDivContent';
import ThirdDivContent from './third-div-main/ThirdDivContent';

function MainContent() {
	return (
		<form>
			<FirstDivContent />
			<SecondDivContent />
			<ThirdDivContent />
		</form>
	);
}

export default MainContent;
