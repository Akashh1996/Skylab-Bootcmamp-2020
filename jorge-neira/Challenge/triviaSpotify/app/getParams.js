const getIdParam = (location) => {
	const params = new URLSearchParams(location.search.substring(1));
	const getCurId = params.get('id');
	return getCurId;
};

module.exports = getIdParam;
