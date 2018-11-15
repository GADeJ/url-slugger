var connection = require('../../database/mysql');
 
// TODO: Deal with SQL injection
var Slugger = {
    
    fetchBySlug: (slug, callback) => {
        return connection.query("SELECT slug, url, timestamp FROM slugger" + 
                                "WHERE slug = ? AND custom = 0",
                                [slug], callback);
    },
    
    fetchByUrl: (url, callback) => {
        return connection.query("SELECT slug, url FROM slugger WHERE url = ? AND custom = 0",
                                [url], callback);
    },

    createSlug: (slug, url, custom, callback) => {
        return connection.query("INSERT INTO slugger (slug, url, custom) VALUES (?, ?, ?)", 
                                [slug, url, custom], callback);
    },

};

module.exports = Slugger;