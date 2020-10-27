import React from 'react';

function Detail() {
	return (
		<div class="main-container">
			<div class="name-foto">
				<h1>
					<span id="detail-title"></span>
				</h1>

				<div>
					<img id="image" />
				</div>

				<div>
					<span>
						<b>ID:</b>{' '}
					</span>
					<span id="hero-id__value"></span>
				</div>
				<div>
					<label>
						<b>Name:</b>
						<input id="hero-name__input" placeholder="name" />
					</label>
				</div>
				<div>
					<span>
						<b>Slug:</b>{' '}
					</span>
					<span id="slug"></span>
				</div>
			</div>
			<div class="power-bio">
				<div>
					<span>
						<b>
							<h3>Powerstats</h3>
						</b>
					</span>
				</div>
				<div>
					<span>Intelligence: </span>
					<span id="intelligence"></span>
				</div>
				<div>
					<span>Strength:</span>
					<span id="strength"></span>
				</div>
				<div>
					<span>Speed: </span>
					<span id="speed"></span>
				</div>
				<div>
					<span>Durability:</span>
					<span id="durability"></span>
				</div>
				<div>
					<span>Power:</span>
					<span id="power"></span>
				</div>
				<div>
					<span>Combat:</span>
					<span id="combat"></span>
				</div>

				<div>
					<span>
						<b>
							<h3>Biography</h3>
						</b>
					</span>
				</div>
				<div>
					<span>FullName:</span>
					<span id="fullName"></span>
				</div>
				<div>
					<span>AlterEgos:</span>
					<span id="alterEgos"></span>
				</div>
				<div>
					<span>Aliases:</span>
					<span id="aliases"></span>
				</div>
				<div>
					<span>PlaceOfBirth:</span>
					<span id="placeOfBirth"></span>
				</div>
				<div>
					<span>FirstAppearance:</span>
					<span id="firstAppearance"></span>
				</div>
				<div>
					<span>Publisher:</span>
					<span id="publisher"></span>
				</div>
				<div>
					<span>Alignment:</span>
					<span id="alignment"></span>
				</div>
			</div>

			<div class="appe-work-conect">
				<div>
					<span>
						<b>
							<h3>Appearance</h3>
						</b>
					</span>
				</div>
				<div>
					<span>Gender:</span>
					<span id="gender"></span>
				</div>
				<div>
					<span>Race:</span>
					<span id="race"></span>
				</div>
				<div>
					<span>Height:</span>
					<span id="height"></span>
				</div>
				<div>
					<span>Weight:</span>
					<span id="weight"></span>
				</div>
				<div>
					<span>Eye Color:</span>
					<span id="eyeColor"></span>
				</div>
				<div>
					<span>Hair Color:</span>
					<span id="hairColor"></span>
				</div>
				<div>
					<span>
						<b>
							<h3>Work</h3>
						</b>
					</span>
				</div>
				<div>
					<span>Occupation:</span>
					<span id="occupation"></span>
				</div>
				<div>
					<span>Base:</span>
					<span id="base"></span>
				</div>
				<div>
					<span>
						<b>
							<h3>Connections</h3>
						</b>
					</span>
				</div>
				<div>
					<span>GroupAffiliation:</span>
					<span id="groupAffiliation"></span>
				</div>
				<div>
					<span>Relatives:</span>
					<span id="relatives"></span>
				</div>
			</div>
		</div>
	);
}

export default Detail;
