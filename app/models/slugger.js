var connection = require('../../database');
 
var Slugger = {
    fetchBySlug: function(slug, callback) {
        return connection.query("SELECT slug, url FROM slugger WHERE slug = ? AND custom = 0", [slug], callback);
    },
    
    fetchByUrl: function(url, callback) {
        return connection.query("SELECT slug, url FROM slugger WHERE url = ? AND custom = 0", [url], callback);
    },

    createSlug: function(slug, url, custom, callback) {
        return connection.query("INSERT INTO slugger (slug, url, custom) VALUES (?, ?, ?)", [slug, url, custom], callback);
    },

};

module.exports = Slugger;