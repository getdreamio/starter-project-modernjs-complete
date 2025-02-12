import express from 'express';

const app = express();
app.use(async (req, res, next) => {
  console.info(`Fetch access url: ${req.url}`);
  next();
});

export default app;
