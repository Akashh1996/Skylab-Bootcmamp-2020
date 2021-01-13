function userController (userSchema, scheduleSchema) {
  function getUsersMethod (req, res) {
    const query = {};
    userSchema.find(query, (usersError, user) => {
      if (usersError) {
        res.send(usersError);
      }
      res.json(user);
    });
  }

  function getUserMethod (req, res) {
    const query = { _id: req.params.userId };
    userSchema.findOne(query)
      .populate({ path: 'days' })
      .exec((usersError, user) => {
        if (usersError) {
          res.send(usersError);
        }
        res.json(user);
      });
  }

  function patchUserMethod ({ body }, res) {
    const query = { email: body.email };
    userSchema.findOneAndUpdate(query, body, { new: true, upsert: true, useFindAndModify: false })
      .populate({ path: 'days' })
      .exec((usersError, user) => {
        if (usersError) {
          res.send(usersError);
        }
        res.json(user);
      });
  }

  async function putUserMethod ({ body }, res) {
    const userId = body.user._id;

    let dayFound;
    const queryFound = { date: body.day };
    await scheduleSchema.findOne(queryFound, (daysError, days) => {
      if (daysError) {
        res.send(daysError);
      } else {
        dayFound = days;
        days.participants.push(userId);
        days.save();
      }
    });

    const query = { _id: userId };
    userSchema.findOne(query, (userError, user) => {
      if (userError) {
        res.send(userError);
      } else {
        user.days.push(dayFound._id);
        user.save();
        res.send(user);
      }
    });
  }

  return {
    getUserMethod, patchUserMethod, putUserMethod, getUsersMethod
  };
}

module.exports = userController;
