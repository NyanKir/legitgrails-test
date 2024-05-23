const express = require('express');
const { tasksRouter } = require('./tasks/task.router');
const { ErrorMiddleware } = require('./middlewares/error.middleware');
const { PORT } = require('./config');
const app = express();

app.use(tasksRouter);
app.use(ErrorMiddleware);

async function run() {
  app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
  });
}

module.exports = {
  run
};
