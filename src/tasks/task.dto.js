const moment = require('moment');

const PROCESSING_STATUSES = ['new', 'processing', 'open', 'in-progress'];

class TaskDto {
  constructor(task) {
    this.status = task.status;
    if (this.status !== 'update-needed') {
      this.delayed = moment().isAfter(Number(task.due_date) * 1000);
    }

    if (this.status === 'update-needed') {
      this.photos_reupload_link = '';
      this.photos_to_resubmit = task?.photos_to_resubmit
        ? task.photos_to_resubmit.split(', ')
        : [];
    }

    if (
      this.status === 'scheduled' ||
      PROCESSING_STATUSES.includes(this.status)
    ) {
      const dueDate = moment(Number(task.due_date) * 1000);
      const seconds = dueDate.diff(moment(), 'seconds');
      const daysDiff = dueDate.diff(moment(), 'days');
      const hoursDiff = dueDate.diff(moment(), 'hours');
      const minDiff = dueDate.diff(moment(), 'minutes');

      const expires_readable = `${daysDiff} days, ${hoursDiff} hours, ${minDiff} minutes`;

      this.expires_timestamp = task.due_date;
      this.expires_sec = seconds < 0 ? 0 : seconds;
      this.expires_readable =
        seconds < 0 ? '0 days, 0 hours, 0 minutes' : expires_readable;
    }

    if (this.status === 'closed') {
      this.outcome = task.outcome || 'unknown';
      this.fake_outcome_reason = task.fake_outcome_reason || 'unknown';
      this.certificate_url = '';
    }
  }
}

module.exports = { TaskDto };
