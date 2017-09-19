const randomiseArray = (array) => {
	const shuffled = array.slice(0);
	shuffled.forEach((_, ix, items) => {
		const newPosition = Math.floor(Math.random() * (ix + 1));
		[items[ix], items[newPosition]] = [items[newPosition], items[ix]];
	});
	return shuffled;
};

module.exports = {
	randomiseArray
};
