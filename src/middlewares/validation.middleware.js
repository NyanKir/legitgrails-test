const { ErrorBuilder } = require('./http.exception');

const ValidationSource = {
  BODY: 'body',
  HEADER: 'headers',
  QUERY: 'query',
  PARAMS: 'params'
};
const ValidationMiddleware = function (schema, source) {
  return async (req, res, next) => {
    let data;
    switch (source) {
      case 'body':
        data = req[source];
        break;
      case 'query':
        data = req[source];
        break;
      case 'params':
        data = req[source];
        break;
      case 'headers':
        data = req[source];
        break;
      default:
        break;
    }

    const { error } = schema.validate(data, {
      abortEarly: true,
      errors: {
        wrap: {
          label: ''
        }
      }
    });

    if (!error) {
      return next();
    }

    next(ErrorBuilder.BadRequest(error.details[0].message));
  };
};

module.exports = {
  ValidationMiddleware,
  ValidationSource
};
