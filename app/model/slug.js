var dbConnection = require('../database');
 
var Slug = {
 
    readUrl: function(callback) {
 
        return dbConnection.query("SELECT url FROM slug WHERE slug", callback);
 
    },

    createSlug: function(slug, url, callback) {
 
        return db.query("INSERT INTO slug (slug, url) VALUES (?, ?)", [Slug.url, Slug.url], callback);
    },

};

module.exports = Slug;