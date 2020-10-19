const Life = require('./life');
const lifeStateList = require('./shared/life-states');

describe('Life', function () {
	let initialStateIndex;
	let life;

	beforeEach(function () {
		initialStateIndex = 0;
		life = new Life();
	});

	test('should create', function () {
		expect(life).toBeTruthy();
	});

	describe('next', () => {
		test('should not call next without initial state', function () {
			expect(life.next()).not.toBeDefined();
		});

		test('should call next with Blinker initial state', function () {
			expect(life.next(lifeStateList.blinker[initialStateIndex])).toEqual(
				lifeStateList.blinker[initialStateIndex + 1]
			);
		});

		test('should call next with Toad initial state', function () {
			expect(life.next(lifeStateList.toad[initialStateIndex])).toEqual(
				lifeStateList.toad[initialStateIndex + 1]
			);
		});

		test('should call next with Beacon initial state', function () {
			expect(life.next(lifeStateList.beacon[initialStateIndex])).toEqual(
				lifeStateList.beacon[initialStateIndex + 1]
			);
		});
	});

	describe('play', () => {
		test('should toggle play button', () => {
			// arrange
			let playButton = document.createElement('button');
			playButton.style.display = 'inline';

			let stopButton = document.createElement('button');
			stopButton.style.display = 'inline';

			life = new Life(playButton, stopButton);

			// act
			life.play();

			// assert
			expect(playButton.style.display).toBe('none');

			// act
			life.play();

			// assert
			expect(playButton.style.display).toBe('inline');
		});

		test('should toggle stop button', () => {
			// arrange
			let playButton = document.createElement('button');
			playButton.style.display = 'inline';

			let stopButton = document.createElement('button');
			stopButton.style.display = 'inline';

			life = new Life(playButton, stopButton);

			// act
			life.play();

			// assert
			expect(stopButton.style.display).toBe('none');

			// act
			life.play();

			// assert
			expect(stopButton.style.display).toBe('inline');
		});
	});

	describe('stop', () => {
		test('should stop playing', () => {
			// arrange
			let playButton = document.createElement('button');
			playButton.style.display = 'inline';

			let stopButton = document.createElement('button');
			stopButton.style.display = 'none';

			life = new Life(playButton, stopButton);

			// act
			life.play();
			life.stop();

			// assert
			expect(stopButton.style.display).toBe('none');
		});
	});

	describe('clear', () => {
		test('should disable button on clear', () => {
			let clearButton = document.createElement('button');
			let lifeForm = [{ checked: true }];

			life = new Life(null, null, clearButton);
			life.clear(lifeForm);

			expect(clearButton.disabled).toBe(true);
		});
	});

	describe('splitId', () => {
		test('should return an object with id and column values', () => {
			const id = 'cell--4--5';
			const element = { id };
			debugger;
			life = new Life(null, null, null);
			const response = life.splitId(element);

			expect(response).toEqual({ row: '4', column: '5' });
		});
	});

	describe('setInitialState', () => {
		test('should return an 2d array with 1/0 values', () => {
			//arrange
			let lifeForm = document.createElement("form");

			//act
			const response = serInitialState();

			//assert
			expect(response).toEqual();
		});
	});
});
