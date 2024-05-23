class HttpException extends Error {
  constructor(status, message) {
    super(message);

    this.message = message;
    this.status = status;
  }
}

class ErrorBuilder {
  static BadRequest(message) {
    return new HttpException(400, message || 'Bad request');
  }

  static Forbidden(message) {
    return new HttpException(403, message || 'Forbidden');
  }
}

module.exports = {
  ErrorBuilder
};
