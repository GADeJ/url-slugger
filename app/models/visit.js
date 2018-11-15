var connection = require('../../database/mysql');
 
// TODO: Deal with SQL injection
var Visit = {
    
    logVisit: (slug_id, ipv4, callback) => {
        return connection.query("INSERT INTO visit (slug_id, ipv4) VALUES (?, ?)", [slug_id, ipv4], callback);
    },

    fetchStatsByDay: (slug, callback) => {
        return connection.query("SELECT YEAR(visit.timestamp) AS Year, MONTH(visit.timestamp) AS Month, DAY(visit.timestamp) AS Day, COUNT(visit.id) as Total " +
                                "FROM slugger, visit " + 
                                "WHERE slugger.slug = ? AND slugger.id = visit.slug_id GROUP BY YEAR(visit.timestamp), MONTH(visit.timestamp), DAY(visit.timestamp)",
                                [slug], callback);
    },

    fetchVisitCount: (slug, callback) => {
        return connection.query("SELECT COUNT(visit.id) as Count " +
                                "FROM slugger, visit " + 
                                "WHERE slugger.slug = ? AND slugger.id = visit.slug_id",
                                [slug], callback);
    }

};

module.exports = Visit;
