const visit = require("../models/visit");

// TODO: Create an error message enum
const errorMessages = {
    101: "System not responding",
    102: "Invalid slug",
    103: "Unable to create slug",
    104: "Unspecified url",
    105: "Slug not found",
    106: "Data unrecheable",
    107: "Stats not yet available"
}

var Utils = {
    respondWithCode: (res, code) => {
        res.status(404).json({
            error: {
                code: code,
                message: errorMessages[code]
            }
        });
    },
    respondWithData: (res, data) => {
        res.status(200).json({
            status: "success",
            data: data
        });
    },
    throwError: (err) => {
        throw new Error(err);
    }
}

module.exports = Utils;