const axios = require('axios');
const { getfavArticles } = require('./helperFn');

jest.mock('axios');

describe('PokeController tests', () => {
  test('Should call getFavArticles', async () => {
    const articles = ['hola', 'adeu'];
    axios.get = jest.fn().mockReturnValue(Promise.resolve({ data: 'hola' }));

    const response = await getfavArticles(articles);

    expect(response).toBe('hola');
  });
});
