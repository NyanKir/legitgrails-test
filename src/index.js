const { TasksRepository } = require('./tasks/task.repository');
const server = require('./server');

(async () => {
  //Process csv file
  await TasksRepository.init();

  await server.run();
})();
