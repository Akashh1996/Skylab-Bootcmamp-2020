process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		const res = ['si mi amor', 'lo que tu digas cariño', 'ok'];
		//random -> math.flor entre 0 y el length de las respuestas
		process.stdout.write();
	}
});
