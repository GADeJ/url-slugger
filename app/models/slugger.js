var connection = require("../../database/mysql");

// TODO: Deal with SQL injection
var Slugger = {
    fetchBySlug: (slug, callback) => {
        return connection.query("SELECT id, url FROM slugger WHERE BINARY slug = ?",
                                [slug], callback);
    },
    fetchByUrl: (url, callback) => {
        return connection.query("SELECT slug, url FROM slugger WHERE BINARY url = ? AND custom = 0",
                                [url], callback);
    },
    createSlug: (slug, url, custom, callback) => {
        return connection.query("INSERT INTO slugger (slug, url, custom) VALUES (?, ?, ?)",
                                [slug, url, custom], callback);
    },
};

module.exports = Slugger;