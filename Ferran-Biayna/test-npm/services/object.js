function greet() {
  return 'Hola mundo!';
}

function top() {
  return 'Skylab is the best bootcamp!';
}

exports.greet = greet;

exports.top = top;

exports.language = 'English';

exports.address = 'Barcelona';

exports.bootcamp = 'Skylab';

exports.html = (personalData) => `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${personalData.title}</title>
  </head>
  <body>
      <p>${personalData.name}</p>
      <p>${personalData.age}</p>
  </body>
  </html>`;
