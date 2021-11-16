const catchAsync = require('../utils/catchAsync');
const tagsService = require('../services/visitor.service');

/**
 * Get Visitors
 */
const getVistiors = catchAsync(async (req, res) => {
  const attendance = await tagsService.getVistiors(req.query.date, req.query.ignore);

  res.send({ success: true, attendance });
});

module.exports = {
  getVistiors,
};
