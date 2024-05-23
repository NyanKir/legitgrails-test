const {
  ValidationMiddleware,
  ValidationSource
} = require('../middlewares/validation.middleware');
const { getTaskSchema } = require('./task.schemas');

const { Router } = require('express');
const { TasksRepository } = require('./task.repository');
const { TaskDto } = require('./task.dto');

const router = Router();

router.get(
  '/tasks/:id',
  ValidationMiddleware(getTaskSchema, ValidationSource.PARAMS),
  (req, res) => {
    const { id } = req.params;

    const task = TasksRepository.getTask(id);

    res.send(new TaskDto(task));
  }
);

module.exports = {
  tasksRouter: router
};
