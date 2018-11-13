var dbConnection = require('../database');
 
var Visit = {

    createVisit: function(slugId, ipv4, callback) {
 
        return db.query("INSERT INTO slug (slug_id, ipv4) VALUES (?, ?)", [Visit.slugId, Visit.ipv4], callback);
    },

};

module.exports = Visit;