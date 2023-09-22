let gamePanel = document.querySelector('#gamePanel');
let congratPanel = document.querySelector('#successPanel');
let btnStart = document.querySelector('.startBtn');
let btnOk = document.querySelector('.btnOk');
let displayGuess = document.querySelector('#guessed');

btnStart.addEventListener('click', function () {
	let input = prompt('Enter status');
	let targetNum = Math.floor(Math.random() * 20) + 1;
	while (input !== targetNum) {
		input = parseInt(prompt('try again'));
	}

	if (targetNum === input) {
		gamePanel.style.display = 'none';
		congratPanel.style.display = 'block';
		displayGuess.innerHTML = input;
	}
});

btnOk.addEventListener('click', function () {
	congratPanel.style.display = 'none';
	gamePanel.style.display = 'block';
});
