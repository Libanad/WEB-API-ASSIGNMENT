const router = require('express').Router();
const reservationControllers = require('../controllers/reservationControllers')


// Creating user registration route
router.post('/reservation', reservationControllers.createReservation)


// exporting the router
module.exports = router;