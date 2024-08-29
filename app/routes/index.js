const koaCombineRouters = require('koa-combine-routers');
const news = require('./news');

const router = koaCombineRouters(
	news
)

module.exports = router;