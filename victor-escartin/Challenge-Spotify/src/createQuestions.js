class questionsComponent {
    constructor(question) {
        this.question = question;
    }

    updateQuestion(element) {
        element.innerHTML = '';
        this.question.forEach((eachPokemon) => {
            element.innerHTML =
                element.innerHTML +
                `
                <div class="list-item">
				<div class="box-position">${x++}</div>
				<a
					class="name-position"
					href="../details/details.html?pokemonName=${eachPokemon.name}"
					>${eachPokemon.name}</a
				>
			</div>

                `;
        });
    }
}

module.exports = PokemonComponent;