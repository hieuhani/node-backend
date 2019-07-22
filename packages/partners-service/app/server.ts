import * as Koa from 'koa';

const app = new Koa();
app.use(async ctx => {
    ctx.body = 'Hello from partners-service';
});

console.log(`Partners service is running on port 3000`);
  
app.listen(3000);