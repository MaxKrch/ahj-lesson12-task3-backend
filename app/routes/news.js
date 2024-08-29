const koaRouter = require('koa-router');
const createNeswFeed = require('../api/createNewsFeed') 

const news = new koaRouter();

news.get('/news', async ctx => {
	try {
		const success = getRandomSuccessResponse();
	
		if(!success) {
			throw new Error(500, 'Server Error');
		}
	
		const newsFeed = await createNeswFeed(5);
		ctx.response.body = newsFeed;
	} catch {
		ctx.response.status = 500;
	}
})

const getRandomSuccessResponse = () => {
	const min = 0;
	const max = 9;
	const randomNumb = Math.floor(Math.random() * 10);

	if(randomNumb < 6) {
		return false;
	}
	return true;
}

module.exports = news;