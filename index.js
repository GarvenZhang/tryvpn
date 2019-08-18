// const Koa = require('koa')
// const request = require('request')
// const router = require('koa-router')()

// const PORT = 8081

// const app = new Koa()

// router.all('/*', (ctx, next) => {
//   let url = 'https://www.baidu.com/' + ctx.url
//   ctx.request.pipe(request(url).pipe(ctx.response))
//   next()
// })

// app
//   .use(router.routes())
//   .use(router.allowedMethods())


// app.listen(PORT, (err) => {
//   err && console.error(`app.listen error: ${PORT}`)
//   console.log(`Listening at localhost:${PORT}`)
// })

var http = require('http'),
  request = require('request'),
  proxyhandle = function(req, res) {
    console.log(req.url)
    req.pipe(request('https://www.google.com/search?q=' + req.url.slice('1'))).pipe(res);
  };
http.createServer(proxyhandle).listen(process.env.PORT || 3000);