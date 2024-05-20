var express = require('express');
var util = require('../config/util.js');
var router = express.Router();
var contract = require('../config/contractSetup.js')

router.get('/getBalance', async (req, res) => {
    const account = req.query.account;

    try {
        const balance = await contract.methods.balanceOf(account).call();
        res.json({ success: true, balance: balance.toString() });
    } catch (error) {
        console.error("Error retrieving balance: ", error);
        res.status(500).json({ success: false, message: "Failed to retrieve balance" });
    }
});

router.get('/', function(req, res) {
    res.render('partials/play', {
        title: 'Chess Hub - Game',
        user: req.user,
        isPlayPage: true
    });
});

router.post('/', function(req, res) {
    var side = req.body.side;
    //var opponent = req.body.opponent; // playing against the machine in not implemented
    var token = util.randomString(20);
    res.redirect('/game/' + token + '/' + side);
});

module.exports = router;
