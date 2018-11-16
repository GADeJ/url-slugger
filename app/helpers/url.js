const validUrl = require("valid-url");

var Url = {
    isValid: (url) => {
        return (url || validUrl.isUri(url));
    }
}

module.exports = Url;
