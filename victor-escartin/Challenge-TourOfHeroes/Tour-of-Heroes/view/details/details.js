class DetailComponent {
	constructor(heroes) {
		this.heroes = heroes;
	}

	updateHtmlHeroDetails(element) {
			element.innerHTML =
				element.innerHTML +
				`
				<div id="hero-card" class="hero">
				<div class="hero-profile">
					<div class="hero-title">${this.heroes.name} details!</div>
					<div class="hero-image">
						<img src="${this.heroes.images.sm}" alt="" />
						<div id="hero-primaryData">
							<div id="id" class="details-atributes">
								<div id="id-prop" class="data-prop">ID:</div>
								<div id="id-value" class="data-value">${this.heroes.id}</div>
							</div>
							<div id="name" class="details-atributes">
								<div id="name-prop" class="data-prop">Name:</div>
								<div id="name-value" class="data-value">${this.heroes.name}</div>
							</div>
							<div id="slug" class="details-atributes">
								<div id="slug-prop" class="data-prop">Slug:</div>
								<div id="slug-value" class="data-value">${this.heroes.slug}</div>
							</div>
						</div>
					</div>
				</div>

				<div class="details-card">
					<div class="hero-secundaryData">
						<div id="appearance">
							<div id="gender">
								<div class="secData-title">Gender:</div>
								<div class="secData-data">${this.heroes.appearance.gender}</div>
							</div>
							<div id="race">
								<div class="secData-title">Race:</div>
								<div class="secData-data">${this.heroes.appearance.race}</div>
							</div>
							<div id="height">
								<div class="secData-title">Height:</div>
								<div class="secData-data">${this.heroes.appearance.height[2]}</div>
							</div>
							<div id="weight">
								<div class="secData-title">Weight:</div>
								<div class="secData-data">${this.heroes.appearance.weight[2]}</div>
							</div>
							<div id="eyeColor">
								<div class="secData-title">Eye Color:</div>
								<div class="secData-data">${this.heroes.appearance.eyeColor}</div>
							</div>
							<div id="hairColor">
								<div class="secData-title">Hair Color:</div>
								<div class="secData-data">${this.heroes.appearance.hairColor}</div>
							</div>
						</div>
						<div id="biography">
							<div>
								<div class="secData-title">Full Name:</div>
								<div id="fullName" class="secData-data">
									${this.heroes.biography.fullName}
								</div>
							</div>
							<div id="alterEgos">
								<div class="secData-title">Alter Egos:</div>
								<div class="secData-data">${this.heroes.biography.alterEgos}</div>
							</div>
							<div id="aliases">
								<div class="secData-title">Aliases:</div>
								<div class="secData-data">${this.heroes.biography.aliases[0]}</div>
							</div>
							<div id="placeOfBirth">
								<div class="secData-title">Place Of Birth:</div>
								<div class="secData-data">
									${this.heroes.biography.placeOfBirth}
								</div>
							</div>
							<div id="firstAppearance">
								<div class="secData-title">First Appearance:</div>
								<div class="secData-data">
									${this.heroes.biography.firstAppearance}
								</div>
							</div>
							<div id="publisher">
								<div class="secData-title">Publisher:</div>
								<div class="secData-data">${this.heroes.biography.publisher}</div>
							</div>
							<div id="alignment">
								<div class="secData-title">Alignment:</div>
								<div class="secData-data">${this.heroes.biography.alignment}</div>
							</div>
						</div>
						<div id="work">
							<div id="occupation">
								<div class="secData-title">Occupation:</div>
								<div class="secData-data">${this.heroes.work.occupation}</div>
							</div>
							<div id="base">
								<div class="secData-title">Base:</div>
								<div class="secData-data">${this.heroes.work.base}</div>
							</div>
						</div>
						<div id="connections">
							<div id="groupAffiliation">
								<div class="secData-title">Group affiliation:</div>
								<div class="secData-data">
									${this.heroes.connections.groupAffiliation}
								</div>
							</div>
							<div id="relatives">
								<div class="secData-title">Relatives:</div>
								<div class="secData-data">${this.heroes.connections.relatives}</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div id="stats-card" class="data-atributes">
				<span>Power Stats:</span>
				<div class="stat-data">
					<div id="intelligence" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Intelligence: <br />${this.heroes.powerstats.intelligence}
						</div>
					</div>
					<div id="strenght" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Strenght: <br />${this.heroes.powerstats.strength}
						</div>
					</div>
					<div id="speed" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Speed: <br />${this.heroes.powerstats.speed}
						</div>
					</div>
					<div id="durability" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Durability: <br />${this.heroes.powerstats.durability}
						</div>
					</div>
					<div id="power" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Power: <br />${this.heroes.powerstats.power}
						</div>
					</div>
					<div id="combat" class="stats-circles">
						<svg width="40" height="40">
							<circle
								cx="20"
								cy="20"
								r="15"
								stroke="orange"
								stroke-width="3"
								fill="white"
							/>
						</svg>
						<div class="number-data">
							Combat: <br />${this.heroes.powerstats.combat}
						</div>
					</div>
				</div>
			</div>
				`;
	
	}

	

}

module.exports = DetailComponent;