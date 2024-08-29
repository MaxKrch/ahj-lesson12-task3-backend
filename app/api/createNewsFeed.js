const createNews = require('./createNews');

const createNewsFeed = async (count) => {
	const response = {
		success: false,
	}
	try {
		const newsList = new Set();

		for(let i = 0; i < count; i += 1) {
			const news = createNews();
			newsList.add(news)
		}

		const newsListArray = Array.from(newsList);
		const newsListJson = JSON.stringify(newsListArray);
		
		response.data = newsListJson;
		response.success = true;
	} catch (err) {
		console.log(err)
	} finally{
		return response;
	}
}

module.exports = createNewsFeed;