require('dotenv').config();

let CONFIG = {}
CONFIG.app          = process.env.APP   || 'dev';

CONFIG.port         = process.env.PORT  || '3000';

CONFIG.db_host      = process.env.DB_HOST       || 'localhost';
CONFIG.db_name      = process.env.DB_NAME       || 'name';
CONFIG.db_user      = process.env.DB_USER       || 'api';
CONFIG.db_password  = process.env.DB_PASSWORD   || 'production';

module.exports = CONFIG;