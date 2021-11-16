const express = require('express');
const validate = require('../../middlewares/validate');
const visitorValidation = require('../../validations/visitor.validation');
const visitorController = require('../../controllers/visitor.controller');

const router = express.Router();

router.route('/').get(validate(visitorValidation.getVistiors), visitorController.getVistiors);

module.exports = router;
