process.stdin.on('readable', () => {
    const chunk = process.stdin.read();
    if (chunk !== null) {
        const res = ['si mi amor', 'lo que digas cariño', 'claro', 'ok', 'siempre tienes razon']
        // random 
        process.stdout.write('claro mi amor')
    }
})
