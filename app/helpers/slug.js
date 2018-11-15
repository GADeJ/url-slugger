const shortid = require("shortid");

const NUID = process.env.NODE_UNIQUE_ID || 0;

var Slug = {

    generate: () => {
        shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

        shortid.worker(NUID);
        
        return shortid.generate();
    },

    isValid: (slug) => {
        // TODO: Read parameters from configuration file
        return (slug && slug.length > 6 && slug.length < 10)
    }
    
}

module.exports = Slug;
