function getHeroId(location) {
	const params = new URLSearchParams(location.search.substring(1));
	const getId = parseInt(params.get('heroId'));
	return getId;
}
module.exports = getHeroId;
