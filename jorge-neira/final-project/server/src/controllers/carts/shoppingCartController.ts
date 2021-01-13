import { Request, Response } from 'express';

function shoppingCartController(ShoppingCartModel: any, UserModel: any) {
  const assignUserShoppingCart = async (userId: string, shoppingCartId: string) => {
    const query = { _id: userId };
    const update = { shoppingCart: shoppingCartId };
    await UserModel.findOneAndUpdate(query, update);
  };

  const updateUserShoppingCart = async (shoppingCartId: string, update: object) => {
    const query = { _id: shoppingCartId };
    const updatedCart = await ShoppingCartModel.findOneAndUpdate(query, update, { new: true });
    return updatedCart;
  };

  const userShoppingCart = async (req: Request, res: Response): Promise<any> => {
    const { _id, ...cart } = req.body;

    const isUserExists = await UserModel.exists({ _id });
    if (!isUserExists) return res.status(400).json({ errors: [{ msg: 'Debe iniciar sesión para añadir articulos al carrito' }] });

    const checkUserShoppingCart = await UserModel.findById(_id);
    if (checkUserShoppingCart.shoppingCart !== undefined) {
      const updatedCart = await updateUserShoppingCart(checkUserShoppingCart.shoppingCart, cart);
      return res.json(updatedCart);
    }

    const shoppingCart = new ShoppingCartModel({
      ...cart,
    });

    await assignUserShoppingCart(_id, shoppingCart._id);
    const newShoppingCart = await ShoppingCartModel.create(shoppingCart);
    res.json(newShoppingCart);
    return true;
  };

  const getCurrentCart = async (req: Request, res: Response) => {
    const { id } = req.params;
    if (id === null) return res.end('end');
    const userData = await UserModel.findById(id);
    if (userData.shoppingCart) {
      const cartId = String(userData.shoppingCart);
      const currentUserShoppingCart = await ShoppingCartModel.findById(cartId);
      return res.json(currentUserShoppingCart);
    }
    return false;
  };

  return { userShoppingCart, getCurrentCart };
}

export default shoppingCartController;
