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
        res.status(404).json({
            error: {
                code: code,
                message: errorMessages[code]
            }
        });
        // Hand off as an uncaught excption to log
        throw new Error("Data not propagated properly from redirectUrl to logVist");
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