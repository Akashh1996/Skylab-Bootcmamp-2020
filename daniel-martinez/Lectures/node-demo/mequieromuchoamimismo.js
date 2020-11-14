process.stdin.on('readable', () => {
	const chunk = process.stdin.read();
	if (chunk !== null) {
		const res = ['si, claro', 'ok', 'vale'];
		process.stdout.write(res[2]);
	}
});
