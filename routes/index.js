let express = require('express'),
    router = express.Router(),
    {addUser} = require('../dao/user/userDao')

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', {title: '知乎'});
});

module.exports = router;
