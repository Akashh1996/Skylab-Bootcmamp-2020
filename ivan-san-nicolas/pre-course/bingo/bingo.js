function bingo() {
  var usedNums = []; //To no repeat the number to check
  var foundNums = []; //To show the numbers found so far
  var ranking = [];
  var rankingNames = [
    'Jennifer',
    'Esteban',
    'Robin',
    'Richard',
    'Diana',
    'Barney',
    'Lilly',
    'Ted',
    'Marshall',
  ];
  var player = {
    name: '',
    board: [
      [],
      [],
      []
    ],
    points: 100,
    turns: 0,
    firstTurn: true,
    line: false,
    bingo: false
  }
  var numOfX;

  function askName() {
    clear();
    player.name = window.prompt('Insert your name, please.');
    if (player.name === '') {
      alert('Please, enter a name.');
      return askName();
    } else if (player.name !== '' && player.name !== undefined && player.name !== null) {
      alert('Welcome ' + player.name + '!');
      initBoard();
      initRanking();
      return showRules();
    } else return alert('Bye!');
  }

  function board() { //Create the ranking, the board and show the board
    showBoard();
    if (player.firstTurn === true) {
      if (window.confirm('Do you want to keep this board?'));
      else {
        initBoard();
        return board();
      }
    }
    return checkNewNum();
  }

  function showBoard() {
    clear();
    console.log('Board:\n');
    for (let i = 0; i < player.board.length; i++) {
      console.log(player.board[i].join(' | '));
    }
    if (foundNums[0] !== undefined && foundNums[0] !== '') { //If foundNums isn't empty, show the nums found so far
      for (let i = 0; i < foundNums.length; i++) {
        if (typeof foundNums[i] !== 'number') console.log(foundNums[i]); //To not say 'The number Line! coincides!
        else console.log('The number ' + foundNums[i] + ' coincides!');
      }
    }
  }

  function checkNewNum() {
    var newNum = Math.floor(Math.random() * (100 - 1)) + 1;
    var coincidence = false;
    for (let i = 0; i < usedNums.length; i++) { //Check if the num was checked before
      if (newNum === usedNums[i]) return checkNewNum();
    }
    usedNums.push(newNum);
    if (window.confirm('Do you want to check the number ' + newNum + '?')) {
      for (let i = 0; i < player.board.length; i++) {
        for (let k = 0; k < player.board[i].length; k++) {
          if (player.board[i][k] === newNum) {
            foundNums.push(newNum);
            coincidence = true;
            player.board[i][k] = 'X';
            showBoard();
          }
        }
      }
      if (coincidence === false) {
        alert("There's no coincidence...");
      }
      return checkX();
    } else return newTurn();
  }

  function checkX() {
    if (player.line === false) {
      for (let i = 0; i < player.board.length; i++) { //Check for lines
        if (player.board[i].every(allX)) {
          player.line = true;
          player.points += 10;
          foundNums.push('Line!');
        }
      }
    }
    if (player.bingo === false) {
      for (let i = 0; i < player.board.length; i++) {
        for (let k = 0; k < player.board[i].length; k++) {
          if (player.board[i][k] === 'X') numOfX++;
        }
      }
      if (numOfX === 15) {
        player.bingo = true;
        player.points += 30;
        alert('BINGO!');
        return endGame();
      } else {
        return newTurn();
      }
    }
  }

  function allX(x) { //To check if the array is full of X
    return x === 'X';
  }

  function newTurn() {
    if (window.confirm('Do you want to do another turn?')) {
      player.firstTurn = false;
      player.points--;
      player.turns++;
      return board();
    } else return endGame();
  }

  function endGame() {
    clear();
    console.log('Congrats! You finished the game in ' + player.turns + ' turns!');
    ranking.push(player);
    showRanking();
    if (window.confirm('Do you want to play again?')) {
      usedNums = [];
      foundNums = [];
      player = {
        name: '',
        board: [
          [],
          [],
          []
        ],
        points: 0,
        turns: 0,
        firstTurn: true,
        line: false,
        bingo: false
      }
      askName();
    } else return alert('Bye!');
  }

  function showRanking() {
    console.log('Ranking:\n')
    for (let i = 0; i < ranking.length; i++) {
      console.log('Name: ' + ranking[i].name + '\nPoints: ' + ranking[i].points + ' | Turns: ' + ranking[i].turns + '\nLine: ' + ranking[i].line + ' | Bingo: ' + ranking[i].bingo);
    }
  }

  function rankingFactory(name, points, turns, line, bingos) {
    return {
      name: name,
      points: points,
      turns: turns,
      line: line,
      bingo: bingos
    }
  }

  function showRules() {
    console.log('Rules:\nYou start with 100 points.\nEach turn costs 1 point.\nGetting Line! gives you 10 points.\nGetting Bingo! gives you 30 points');
    if (window.confirm('Do you understand the rules?')) return board();
    else return showRules();
  }

  function initRanking() {
    for (let i = 0; i < 9; i++) { //Initialize ranking
      ranking.push(rankingFactory(rankingNames[i], Math.floor(Math.random() * (130 - 1)) + 1, Math.floor(Math.random() * (100 - 1)) + 1, Math.random() >= 0.5, Math.random() >= 0.5));
    }
  }

  function initBoard() {
    for (let i = 0; i < 3; i++) { //Initialize the board
      for (let k = 0; k < 5; k++) {
        player.board[i][k] = Math.floor(Math.random() * (100 - 1)) + 1;
      }
    }
  }
  askName();
}
bingo();

/*
Points system:

You start with 30 points.
Each turn you loose 1 point.
Making a Line! gives you 10 points.
Making a Bingo! gives you 30 points.


*/