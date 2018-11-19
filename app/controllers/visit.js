const slug = require("../helpers/slug");
const utils = require("../helpers/utils");

const visitModel = require("../models/visit");

/**
 * Details about slug: url and time created
 *
 * @param slug_id
 * @return {slug, url, timestamp}
 */
exports.logVist = (data, req, res, next) => {
    // Ensures that the autoincrement slugger is is valid
	if (data.slug_id > 0) {
    	visitModel.logVisit(data.slug_id, data.ipv4, (err, ret, col) => {
            if (err) {
                throw err;
            }
    	});
      }
    else {
      // Throw error so it's caught by the system log
      throw new Error("Unable to log visit");
    }
};

/**
 * Total count per day of how many times a slug been accessed
 *
 * @param slug
 * @return {slug, url, timestamp, created, [{year, month, day, count}]}
 */
exports.fetchStats = (req, res, next) => {
    if (!slug.isValid(req.params.slug)) {
        // Return error: Invalid slug
        utils.respondWithCode(res, 101);
    }
    else {
        visitModel.fetchInfo(req.params.slug, (err, ret, col) => {
            // Ensures that only one record is returned
            if (ret.length === 1){
                // Assume that only one record is returned
                var data = {
                    slug:    ret[0].slug,
                    url:     ret[0].url,
                    created: ret[0].created,
                    count:   ret[0].count,
                }
                visitModel.fetchStatsByDay(req.params.slug, (err, ret, col) => {
                    // Ensures that only one record is returned
                    if (ret.length > 0){
                        // Array of visit frequency by day
                        data['daily-visit-frequency'] = ret
                        utils.respondWithData(res, data);
                    }
                    else {
                        // Return error: Unable to find slug
                        utils.respondWithCode(res, 101);
                    }
                });
            }
            else {
                // Return error: Unable to find slug
                utils.respondWithCode(res, 101);
            }
        });
    }
};
