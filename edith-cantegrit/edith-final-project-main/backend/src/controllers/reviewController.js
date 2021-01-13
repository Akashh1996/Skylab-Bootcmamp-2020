function reviewController(Review) {
    function getMethod(req, res) {
      const query = {};
      Review.find(query)
      .populate({
        path: 'author',
      })
      .exec((error, review) => {
        if (error) {
          res.send(error);
        }
        res.send(review);
      })
    }
    
    return { getMethod };
}
  
  module.exports = reviewController;