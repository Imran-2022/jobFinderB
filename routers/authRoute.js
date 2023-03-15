const router = require('express').Router();
const { getGoogleOAuthUrlRoute } = require('../controllers/userControllers');

router.route('/google/url')
    .get(getGoogleOAuthUrlRoute)

module.exports = router;
