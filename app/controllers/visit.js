const slug = require("../helpers/slug");
const utils = require("../helpers/utils");

const visitModel = require("../models/visit");

/**
 * Total count per day of how many times a slug been accessed
 * 
 * @param slug
 * @return {Array} year, month, day, count
 */
exports.fetchStats = (req, res, next) => {

    if (!slug.isValid(req.params.slug)) {

        // Return error: Invalid slug
        utils.respondWithCode(res, 101);
      }
    else {
        visitModel.fetchStatsByDay(req.params.slug, (err, ret, col) => {
            
            // Ensures that only one record is returned
            if (ret.length === 1){

                // Array of elements
                utils.respondWithData(res, ret);
            }
            else {

                // Return error: Unable to find slug
                utils.respondWithCode(res, 101);
            }
        })
    }

};


/**
 * Total count of how many time a slug has been accessed
 * 
 * @param slug
 * @return count
 */
exports.fetchCount = (req, res, next) => {

    if (!slug.isValid(req.params.slug)) {

        // Return error: Invalid slug
        utils.respondWithCode(res, 101);
      }
    else {
        visitModel.fetchVisitCount(req.params.slug, (err, ret, col) => {

            // Ensures that only one record is returned
            if (ret.length === 1){

                // Assume that only one record is returned
                utils.respondWithData(res, ret[0]);
            }
            else {

                // Return error: Unable to find slug
                utils.respondWithCode(res, 101);
            }
        })
    }

};
