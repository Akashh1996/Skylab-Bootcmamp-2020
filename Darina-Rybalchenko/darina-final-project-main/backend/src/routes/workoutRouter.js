const { Router } = require('express');
const workoutsController = require('../controllers/workoutsController');
const workoutController = require('../controllers/workoutController');

function workoutRouter (workoutSchema) {
  const router = Router();
  const workouts = workoutsController(workoutSchema);
  const workout = workoutController(workoutSchema);

  router.route('/')
    .get(workouts.getWorkoutMethod)
    .post(workouts.postWorkoutMethod)
    .put(workouts.patchWorkoutMethod)
    .delete(workouts.deleteWorkoutMethod);

  router.route('/:workoutId')
    .get(workout.getWorkoutMethod);

  return router;
}

module.exports = workoutRouter;
