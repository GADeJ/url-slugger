let CONFIG = {}

CONFIG.APP      = process.env.APP       || "url-slugger";

CONFIG.HOST     = process.env.HOST      || "http://localhost";
CONFIG.PORT     = process.env.PORT      || "3000";

CONFIG.DB_HOST  = process.env.DB_HOST   || "localhost";
CONFIG.DB_NAME  = process.env.DB_NAME   || "project";
CONFIG.DB_USER  = process.env.DB_USER   || "api";
CONFIG.DB_PWD   = process.env.DB_PWD    || "~EasyD0351t";

// Node Id for worker to generate unique slugs if more than 1 container
CONFIG.NUID     = process.env.NUID      || 0;

module.exports = CONFIG;