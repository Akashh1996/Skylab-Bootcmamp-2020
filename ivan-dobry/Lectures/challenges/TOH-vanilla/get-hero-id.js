function getHeroId(location) {
	let search = location.search;
	search = search.slice(1, search.length);
	const andSplitted = search.split('&');
	const query = andSplitted.find((value) => value.includes('heroId'));
	const result = query && query.split('=');
	return result && +result[1];
}
module.exports = getHeroId;