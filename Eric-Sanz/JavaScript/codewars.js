String.prototype.toJadenCase = function () {
	answer = [];
	arrayString = this.valueOf().split(' ');
	for (let i = 0; i < arrayString.length; i++) {
		answer.push(
			arrayString[i].charAt(0).toUpperCase() + arrayString[i].slice(1)
		);
	}
	return answer.join(' ');
};

return Number(
	('' + num)
		.split('')
		.map(function (val) {
			return val * val;
		})
		.join('')
);

function solution(list) {
	var c = 0;
	var x = 0;
	var st = '';
	for (var i = 0; i < list.length; i++) {
		if (list[i + 1] - 1 == list[i]) {
			if (c == 0) {
				x = list[i];
				c++;
			} else {
				c++;
			}
		} else {
			if (c > 1) {
				st += x.toString() + ',' + list[i].toString() + ',';
				x = 0;
				c = 0;
			} else if (c == 1) {
				st += list[i - 1].toString() + ',' + list[i].toString() + ',';
				c = 0;
			} else {
				st += list[i].toString() + ',';
				+',';
				x = 0;
				c = 0;
			}
		}
	}
	return st.slice(0, -1);
}
