const axios = require('axios');
const recipesControllerTest = require('./recipesController')();

jest.mock('axios');

describe('recipesController', () => {
  afterEach(() =>
      axios.mockRestore()
  )

  describe('getRandomRecipe', () => {
    test('should call res.send when there is an error', async () => {
      const res = {
        send: jest.fn(),
      };

      axios.get.mockImplementationOnce(() => Promise.reject());
      await recipesControllerTest.getRandomRecipe(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', async () => {
      const res = {
        send: jest.fn(),
      };
      const response = {};

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await recipesControllerTest.getRandomRecipe(null, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('getRecipeByName', () => {
    test('should call res.send when there is an error', async () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        params: {
          name: null
        }
      }

      axios.get.mockImplementationOnce(() => Promise.reject());
      await recipesControllerTest.getRecipeByName(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', async () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        params: {
          name: null
        }
      }
      const response = {};

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await recipesControllerTest.getRecipeByName(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    [
      {initialState: 'Provençal Omelette Cake', finalState: 'Omelette Cake'},
      {initialState: 'Gołąbki (cabbage roll)', finalState: 'cabbage roll'},
      {initialState: 'Vegetable Shepherd’s Pie', finalState: 'Vegetable Shepherd'},
      {initialState: 'Rosół (Polish Chicken Soup)', finalState: 'Polish Chicken Soup'},
      {initialState: 'Polskie Naleśniki (Polish Pancakes)', finalState: 'Polish Pancakes'},
      {initialState: 'Seafood fideuà', finalState: 'Seafood'},
      {initialState: 'Sledz w Oleju (Polish Herrings)', finalState: 'Polish Herrings'},
      {initialState: 'Boulangère Potatoes', finalState: 'Boulang'}
    ].forEach((_) => {
      test(`should reassign ${_.initialState} to ${_.finalState}`, async () => {
        const req = {
          params: {
            name: _.initialState
          }
        }
        
        recipesControllerTest.getRecipeByName(req, null);

        expect(req.params.name).toBe(_.initialState);
      });
    })
  });

  describe('getRecipeCategories', () => {
    test('should call res.send when there is an error', async () => {
      const res = {
        send: jest.fn(),
      };

      axios.get.mockImplementationOnce(() => Promise.reject());
      await recipesControllerTest.getRecipeCategories(null, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', async () => {
      const res = {
        send: jest.fn(),
      };
      const response = {};

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await recipesControllerTest.getRecipeCategories(null, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
  
  describe('getCategoryRecipes', () => {
    test('should call res.send when there is an error', async () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        params: {
          name: null
        }
      }

      axios.get.mockImplementationOnce(() => Promise.reject());
      await recipesControllerTest.getCategoryRecipes(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', async () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        params: {
          name: null
        }
      }
      const response = {};

      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      await recipesControllerTest.getCategoryRecipes(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
