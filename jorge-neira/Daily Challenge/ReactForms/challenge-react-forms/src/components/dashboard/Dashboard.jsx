import React from 'react';
// import SelectOption from './components/store/SelectOptions';
import HeaderNav from './Header';
import UserLogin from './UserLogin';
import Date from './Date';
import Input from './Input';

function FormSection() {
	return (
		<section className="form-section">
			<HeaderNav />
			<form>
				<UserLogin />
				<Date />
				<Input />
			</form>
		</section>
	);
}

export default FormSection;
