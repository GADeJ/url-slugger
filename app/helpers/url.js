const validUrl = require("valid-url");

var Url = {
    // TODO: Unit test
    isValid: (url) => {
        return (url || validUrl.isUri(url));
    }
}

module.exports = Url;
