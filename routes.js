const express = require('express');
const router = express.Router();
const quoteController = require('./quoteController');
const userController = require('./userController');
const twitterController = require('./twitterController');



router.get('/twitter', twitterController.home);

router.get('/', quoteController.getQuotes);

router.get('/login', userController.getForm);

router.get('/edit/:id', quoteController.editQuote);
router.post('/edit', quoteController.submitEdit);


router.post('/', quoteController.postQuote);

router.get('/delete/:id', quoteController.deleteQuote);

// router.post('/login', userController.login);

// router.post('/register', userController.register);
// router.get('/register', userController.getForm);


//trying it wes' way
router.get('/loginwes', userController.loginFormWes);

router.get('/registerwes', userController.registerFormWes);

//1. we eneed to validate the registration data
//2. Register the user
//3. We need to log them in. 
router.post('/registerwes', userController.validateRegister);
// userController.registerFormWes

module.exports = router;