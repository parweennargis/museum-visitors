const axios = require('axios');
const moment = require('moment');
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

/**
 * @author  Nargis Parween <nargislife@gmail.com>
 * @param {Number} date
 * @param {String} ignoreMusem
 * @returns Object
 */
const getVistiors = async (date, ignoreMusem) => {
  try {
    const requestedMonth = moment(+date).format('YYYY-MM-DD');
    // get museum data from API
    const museumDataAPI = await fetchMusemData(requestedMonth);
    const result = {};
    if (museumDataAPI.length) {
      const museumData = museumDataAPI[0];
      // get the month and year from the date
      result.month = moment(+date).format('MMM');
      result.year = moment(+date).year();
      delete museumData.month;

      // if ignore musem is in the request query
      if (ignoreMusem && museumData[ignoreMusem]) {
        result.ignored = { museum: ignoreMusem, visitors: +museumData[ignoreMusem] };
        delete museumData[ignoreMusem];
      }

      const objectKeys = Object.keys(museumData);
      // get the total count of the museum visitors
      result.total = objectKeys.reduce((total, musemName) => {
        total += +museumData[musemName];
        return total;
      }, 0);

      // sort the museumData object
      const sortedMusems = objectKeys.sort((a, b) => museumData[a] - museumData[b]);
      result.lowest = { museum: sortedMusems[0], visitors: +museumData[sortedMusems[0]] };
      result.highest = { museum: sortedMusems[sortedMusems.length - 1], visitors: +museumData[sortedMusems[sortedMusems.length - 1]] };
    }

    return result;
  } catch (ex) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Record Not found!');
  }
};

const fetchMusemData = async (requestedMonth) => {
  const { data } = await axios({
    url: `https://data.lacity.org/resource/trxm-jn3c.json?month=${requestedMonth}`,
    method: 'get',
  });
  return data;
};

module.exports = {
  getVistiors,
  fetchMusemData,
};
