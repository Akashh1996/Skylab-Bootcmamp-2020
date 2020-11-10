process.stdin.on('readeble', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		process.stdout.write('hola');
	}
});
