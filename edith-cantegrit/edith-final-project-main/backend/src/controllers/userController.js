function userController(User) {
  function getMethod(req, res) {
      const query = {};
      User.find(query)
      .populate('favourite_cookers')
      .populate('store_recipes')
      .populate('weekmenu_tuppers')
      .exec((error, users) => {
        if (error) {
          res.send(error);
        }
        res.json(users);
      });
    }; 
    // async function putMethod(req, res) {
    //   const { address, ...userInfo } = req.body;
    //   console.log(address.country);
    //   try {
    //     const createdCountryResponse = await Country.create(address.country);
  
    //     const createdAddressResponse = await Address.create(
    //       { ...address, country: createdCountryResponse._id },
    //     );
  
    //     const createdUserResponse = await User.create(
    //       { ...userInfo, address: createdAddressResponse._id },
    //     );
  
    //     res.json(createdUserResponse);
    //   } catch (error) {
    //     res.send(error);
    //   }
    // }
  
    return { getMethod };
  }
  
  module.exports = userController;