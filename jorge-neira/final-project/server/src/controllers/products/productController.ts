import { Request, Response } from 'express';

function productController(ProductModel: any) {
  function getProductById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      ProductModel.findById(id, (errorFindProduct: any, product: any) => {
        if (errorFindProduct) res.send(errorFindProduct);
        res.json(product);
      });
    } catch (error) {
      res.send(error);
    }
  }

  function getProductList(req: Request, res: Response) {
    try {
      const { query } = req;
      ProductModel.find(query, (errorLoadingProducts: any, products: any) => {
        if (errorLoadingProducts) res.send(errorLoadingProducts);
        res.json(products);
      });
    } catch (error) {
      res.send(error);
    }
  }
  return { getProductById, getProductList };
}

export default productController;
