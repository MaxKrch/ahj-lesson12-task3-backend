const { faker } = require('@faker-js/faker');

class News {
	constructor() {
		this.date = Date.now();
		this.id = faker.string.uuid();
		this.poster = faker.image.urlLoremFlickr({ 
			category: 'nightlife',
		});
		this.teaser = faker.lorem.lines({ min: 2, max: 4 });
	}
}

const createNews = () => {
	return new News();
}

module.exports = createNews;
