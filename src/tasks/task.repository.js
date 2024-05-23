const { resolve } = require('path');
const { parse } = require('csv-parse');
const fs = require('fs');
const { ErrorBuilder } = require('../middlewares/http.exception');

class TaskRepository {
  constructor() {
    this.records = {};
  }

  async #processFile() {
    const records = {};

    const parser = fs.createReadStream(resolve(__dirname, 'tasks.csv')).pipe(
      parse({
        columns: true
      })
    );

    for await (const record of parser) {
      Object.assign(records, {
        [record.id]: record
      });
    }

    return records;
  }

  async init() {
    this.records = await this.#processFile();
  }

  getTask(id) {
    const record = this.records[id];

    if (record) return record;

    throw ErrorBuilder.BadRequest('task not found');
  }
}

module.exports = { TasksRepository: new TaskRepository() };
