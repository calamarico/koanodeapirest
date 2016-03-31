/**
 * Routes module.
 * @module routes
 */

var client = require('./client.js'),
  router = require('koa-router')();

router.get('/', function (req, res) {
  res.send('TrendMicro Node API Rest');
});

router.post('/login', client.login);
router.delete('/login', client.logout);
router.get('/computers/groups', client.getComputerGroups);
router.get('/computers/hosts', client.getComputerHosts);
router.get('/computers/hosts/detail', client.getComputerHostsDetail);

module.exports = router;
