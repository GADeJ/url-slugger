
const visit = require("../models/visit");

// TODO: Create and error message file
const errorMessages = {
    101: "System not responding",
    102: "Invalid slug",
    103: "Unable to create slug",
    104: "Unspecified url"
}

var Utils = {

    respondWithCode: (res, code) => {
        // TODO: Add HTTP error code to configuration file
        res.status(404).json({
            error: {
                code: code,
                message: errorMessages[code]
            }
        });
    },

    respondWithData: (res, data) => {
        // TODO: Add HTTP error code to configuration file
        res.status(200).json({
            status: "success",
            data: data
        });
    },

    redirectTheLogVist: (res, req, data) => {
        // Since this is the primary service redirect first then log visit
        res.redirect(data.url);
		
        visit.logVisit(data.id, req.headers['x-forwarded-for'] || req.connection.remoteAddress);
    }
}

module.exports = Utils;