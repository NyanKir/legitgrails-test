class TaskDto {
  constructor(task) {
    this.id = task.id;
    this.status = task.status;
    this.outcome = task.outcome;
    this.fake_outcome_reason = task.fake_outcome_reason;
    this.photos_to_resubmit = task.photos_to_resubmit;
    this.answer_time = task.answer_time;
    this.date_created = task.date_created;
    this.due_date = task.due_date;
    this.date_closed = task.date_closed;
  }
}

module.exports = { TaskDto };
