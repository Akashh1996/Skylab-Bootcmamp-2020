(async () => {
    const store = new Store();
    await store.loadSingersFromAPI('BQDpwcWEbgikHu4at72zmXnVoE6n429F_kyPk1gxlHVGkwx7lOHxabgv3IrbyrpmccSrkt_aJSRONzxXCgrwVK9Pbwx_oYB-xUdJP7a1wPgk2AYng-XZZKhIlWLhQghMQGZED6q1s3z8u5dONtf8bt_wybZc9VxmBo1S3juPcL7O-UNyygZaV5oy8_6AoKYTSyp8b3a6')
    const singers = store.getSingers();
    console.log(singers)
})()
