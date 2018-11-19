let CONFIG = {}

CONFIG.VER_MAJOR    = 0;
CONFIG.VER_MINOR    = 1;
CONFIG.VER_BUILD    = 1;

// Set environment variables for production
CONFIG.APP          = process.env.APP       || "url-slugger";

CONFIG.HOST         = process.env.HOST      || "localhost";
CONFIG.PORT         = process.env.PORT      || 3000;

CONFIG.DB_HOST      = process.env.DB_HOST   || "localhost";
CONFIG.DB_NAME      = process.env.DB_NAME   || "slugger_development";
CONFIG.DB_USER      = process.env.DB_USER   || "dev";
CONFIG.DB_PASS      = process.env.DB_PASS   || "";

// Node Id for worker to generate unique slugs
//if f more than 1 container
CONFIG.NUID         = process.env.NUID      || 0;

// Slug length criteria for validation
CONFIG.SLUG_MIN     = 6
CONFIG.SLUG_MAX     = 9

module.exports = CONFIG;