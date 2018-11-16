let CONFIG = {}

// Value hard coded are for developemnt
// Set environment variables for production

CONFIG.APP      = process.env.APP       || "url-slugger";

CONFIG.HOST     = process.env.HOST      || "localhost";
CONFIG.PORT     = process.env.PORT      || 3000;

CONFIG.DB_HOST  = process.env.DB_HOST   || "localhost";
CONFIG.DB_NAME  = process.env.DB_NAME   || "slugger_development";
CONFIG.DB_USER  = process.env.DB_USER   || "dev";
CONFIG.DB_PWD   = process.env.DB_PWD    || "";

// Node Id for worker to generate unique slugs if more than 1 container
CONFIG.NUID     = process.env.NUID      || 0;

module.exports = CONFIG;