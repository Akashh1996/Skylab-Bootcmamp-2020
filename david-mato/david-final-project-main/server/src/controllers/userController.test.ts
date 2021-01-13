const UserModel = require('../models/userModel');
const userControllerTest = require('./userController')(UserModel);

jest.mock('../models/userModel');

describe('userController', () => {
  afterEach(() => {
    UserModel.mockRestore();
    });

  describe('getMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        query: {
          product: null
        }
    }

    UserModel.find.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      userControllerTest.getMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
        setHeader: jest.fn(),
      };
      const req = {
          query: {
            product: null
          }
      }

      UserModel.find.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      userControllerTest.getMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('postMethod', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
          query: null
        }
      }

      UserModel.create.mockImplementationOnce((query, callback) => {
        callback(true, {});
      });
      userControllerTest.postMethod(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.json', () => {
      const res = {
        json: jest.fn(),
      };
      const req = {
          body: {
            query: null
          }
      }

      UserModel.create.mockImplementationOnce((query, callback) => {
        callback(false, {});
      });
      userControllerTest.postMethod(req, res);

      expect(res.json).toHaveBeenCalled();
    });
  });

  describe('putFavoriteRecipe', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                favoriteRecipes: []
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(true, {});
      });
      userControllerTest.putFavoriteRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                favoriteRecipes: []
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(false, null, null, {});
      });
      userControllerTest.putFavoriteRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('deleteFavoriteRecipe', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                favoriteRecipes: [ { strMeal: null } ]
            },
            recipe: {
                strMeal: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(true, {});
      });
      userControllerTest.deleteFavoriteRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                favoriteRecipes: []
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(false, null, null, {});
      });
      userControllerTest.deleteFavoriteRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putListItem', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(true, {});
      });
      userControllerTest.putListItem(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(false, null, null, {});
      });
      userControllerTest.putListItem(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putMenu', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(true, {});
      });
      userControllerTest.putMenu(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(false, {});
      });
      userControllerTest.putMenu(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });

  describe('putOwnRecipe', () => {
    test('should call res.send when there is an error', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(true, {});
      });
      userControllerTest.putOwnRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });

    test('should call res.send on success', () => {
      const res = {
        send: jest.fn(),
      };
      const req = {
        body: {
            user: {
                id: null
            }
        }
      }

      UserModel.findOneAndUpdate.mockImplementationOnce((query, update, added, callback) => {
        callback(false, {});
      });
      userControllerTest.putOwnRecipe(req, res);

      expect(res.send).toHaveBeenCalled();
    });
  });
});
