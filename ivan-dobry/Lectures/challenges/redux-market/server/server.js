/* eslint-disable no-console */
const app = require('./index');

const port = process.env.PORT || 1980;
app.listen(port, () => {
  console.log(`Server up in port ${port}`);
});
