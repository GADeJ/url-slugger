const slug = require("shortid");

const NUID = process.env.NODE_UNIQUE_ID || 0;

slug.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

slug.worker(NUID);

module.exports = slug;