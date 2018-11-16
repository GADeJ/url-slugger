const shortid = require("shortid");

const CONFIG = require("../../config/local");

var Slug = {
    generate: () => {
        shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@");
        shortid.worker(CONFIG.NUID);

        return shortid.generate();
    },
    // TODO: Unit test
    isValid: (slug) => {
        // TODO: Read parameters from configuration file
        return (slug && slug.length >= CONFIG.SLUG_MIN  && slug.length <= CONFIG.SLUG_MAX);
    }
}

module.exports = Slug;
