const router = require('express').Router();
const userController = require('../controllers/userControllers')


// Creating user registration route
router.post('/create', userController.addContact )


// exporting the router
module.exports = router;