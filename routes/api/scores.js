const express = require('express');

const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);
router.use(require('../../config/auth'));
router.post('/', checkAuth, scoresCtrl.create);
/*---------- Protected Routes ----------*/
// Process the token for only the routes below


function checkAuth(req, res, next) {
    if(req.user) return next();
    return res.status(401).json({msg: 'not authorized'});
}
module.exports = router;