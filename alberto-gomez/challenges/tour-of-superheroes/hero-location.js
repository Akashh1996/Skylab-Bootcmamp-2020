function getIdFromUrlParams(locationSearch) {
	let locationSearchSplitted = locationSearch.split('=');
	let heroId = locationSearchSplitted[1];
	return +heroId;
}

module.exports = getIdFromUrlParams;
