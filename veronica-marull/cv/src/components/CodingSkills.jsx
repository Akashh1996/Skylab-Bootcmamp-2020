import React from 'react';
import './codingSkills.css';

function CodingSkills({ skill, level }) {
	return (
		<>
			<div className="skills_container">
				<div>{skill}</div>
				<div>
					<progress value={level} max="100"></progress>
				</div>
			</div>
		</>
	);
}

export default CodingSkills;
