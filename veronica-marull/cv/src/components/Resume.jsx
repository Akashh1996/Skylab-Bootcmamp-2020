import React from 'react';
import BlockTimeline from './BlockTimeline';
import CodingSkills from './CodingSkills';
import Title from './Title';
import './resume.css';

function Resume() {
	const block1 = {
		title: 'Education',
		year: '2020',
		place: 'Skylab',
		titleDescription: 'Frontend Development',
		description:
			'Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac doloraliquam sodales.'
	};

	const block2 = {
		title: 'Experience',
		year: '2020',
		place: 'Google',
		titleDescription: 'Lead Ui/Ux Designer',
		description:
			'Praesent dignissim sollicitudin justo, sed elementum quam lacinia quis. Phasellus eleifend tristique posuere. Sed vitae dui nec magna.'
	};

	let skillsTitle = 'Coding Skills';

	let skills = {
		skill1: { name: 'HTML', level: '50' },
		skill2: { name: 'CSS', level: '50' },
		skill3: { name: 'JavaScript', level: '50' }
	};

	return (
		<>
			<div className="resume">
				<div className="resume_title">
					<h1>Resume</h1>
					<hr />
				</div>
				<div className="main">
					<div className="resume_container">
						<BlockTimeline
							title={block1.title}
							year={block1.year}
							place={block1.place}
							titleDescription={block1.titleDescription}
							description={block1.description}
						/>
						<BlockTimeline
							title={block2.title}
							year={block2.year}
							place={block2.place}
							titleDescription={block2.titleDescription}
							description={block2.description}
						/>
					</div>

					<div className="skills">
						<Title title={skillsTitle} />
						<CodingSkills
							skill={skills.skill1.name}
							level={skills.skill1.level}
						/>
						<CodingSkills
							skill={skills.skill2.name}
							level={skills.skill2.level}
						/>
						<CodingSkills
							skill={skills.skill3.name}
							level={skills.skill3.level}
						/>
					</div>
				</div>
			</div>
		</>
	);
}

export default Resume;
