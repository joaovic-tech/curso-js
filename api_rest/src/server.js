import app from './app';

app.listen(process.env.APP_PORT, () => {
  console.log(`api_rest: ${process.env.APP_URL_DEV ? process.env.APP_URL_DEV : process.env.APP_URL}`);
});
