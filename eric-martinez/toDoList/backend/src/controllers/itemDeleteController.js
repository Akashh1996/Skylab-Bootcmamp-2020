function itemDeleteController(Items) {
  function deleteMethod(req, res) {
    const query = req.params.idItem;
    Items.findByIdAndRemove(query, (errorDeleteItem) => {
      if (errorDeleteItem) {
        return res.send(errorDeleteItem);
      }
      return res.send('delete');
    });
  }

  return { deleteMethod };
}

module.exports = itemDeleteController;
