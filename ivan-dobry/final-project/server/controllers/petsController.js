/* eslint-disable no-console */
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dixww76rl',
  api_key: '338983388184972',
  api_secret: 'Uy6t14AU4G8bGWdlfzYm9_e_Dz0',
});

function petsController(pets) {
  function getMethod(req, res) {
    console.log('getting data...');
    const query = {};
    pets.find(query, (errorFindPets, allPets) => (
      errorFindPets
        ? res.send(errorFindPets)
        : res.json(allPets)
    ));
  }

  async function putMethod({ body }, res) {
    let uploadedPhoto;
    let createdPet;

    console.log('creating....');
    await pets.create(body, (errorCreating, newPet) => {
      if (errorCreating) {
        res.send(errorCreating);
      } else {
        createdPet = newPet;
      }
    });
    await cloudinary.uploader.upload(String(body.photo),
      (error, result) => { console.log(result, error); uploadedPhoto = result; });

    pets.findByIdAndUpdate(createdPet._id, { photo: uploadedPhoto.url }, {
      useFindAndModify: false,
    },
    (errorFindPet, photoModified) => (
      errorFindPet
        ? res.send(errorFindPet)
        : res.json(photoModified)
    ));
  }

  return {
    getMethod, putMethod,
  };
}

module.exports = petsController;
