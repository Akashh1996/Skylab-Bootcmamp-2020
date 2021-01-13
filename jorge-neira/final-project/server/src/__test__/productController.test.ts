import { Request, Response } from 'express';
import ProductsModel from '../models/productModel';
import productController from '../controllers/products/productController';

const ProductModel = productController(ProductsModel);

jest.mock('../../models/productModel');

describe('Products Controller', () => {
  let res: Response;
  let req: Request;
  let fakeProduct
  beforeEach(() => {
    res = {
      send: jest.fn(),
      json: jest.fn(),
    };
    req = { body: {} };
    fakeProduct: {name: "test product"}
  });
  test('getProductById should call res.send if error occurs', async () => {
    ProductsModel.findOne = jest.fn().mockResolvedValueOnce({});

    await productController.getProductById(req, res);

    expect(res.send).toHaveBeenCalledWith(fakeProduct: {name: "test product"});
  });
});
