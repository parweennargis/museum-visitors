const Joi = require('joi');

const getVistiors = {
  query: Joi.object().keys({
    date: Joi.number().required(),
    ignore: Joi.string(),
  }),
};

module.exports = {
  getVistiors,
};
