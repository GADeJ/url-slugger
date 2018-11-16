const shortid = require("shortid");

const CONFIG = require("../../config/local");

var Slug = {
    generate: () => {
        shortid.characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@");
        shortid.worker(CONFIG.NUID);
        
        return shortid.generate();
    },
    isValid: (slug) => {
        // TODO: Read parameters from configuration file
        return (slug && slug.length > 6 && slug.length < 10);
    }
}

module.exports = Slug;
