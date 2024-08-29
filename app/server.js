const Koa = require('koa');
const koaCors = require('@koa/cors');
// const { koaBody } = require('koa-body');
const koaSlow = require('koa-slow');
const router = require('./routes/index.js')

const server = new Koa();
server
	.use(koaCors())
	// .use(koaBody({
	// 	text: true,
	//   urlencoded: true,
  // 	multipart: true,
  // 	json: true,
	// }))
	.use(koaSlow())
	.use(router())

const port = process.env.PORY || 7070;
server
	.listen(port)