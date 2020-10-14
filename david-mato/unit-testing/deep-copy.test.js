const { TestScheduler } = require('jest');
const copyObject = require('./deep-copy');

test('do sth', () => {
	expect(copyObject({ a: 'algo', b: 'otra cosa' }));
});
