var connection = require('../../database/mysql');
 
// TODO: Deal with SQL injection
var Visit = {
    
    logVisit: (slug_id, ipv4, callback) => {
        return connection.query("INSERT INTO visit (slug_id, ipv4) VALUES (?, ?)",
                                [slug_id, ipv4], callback);
    },

    fetchStatsByDay: (slug, callback) => {
        return connection.query("SELECT YEAR(visit.timestamp) AS year," +
                                        "MONTH(visit.timestamp) AS month," + 
                                        "DAY(visit.timestamp) AS day," + 
                                        "COUNT(visit.id) as count " +
                                "FROM slugger, visit " + 
                                "WHERE slugger.slug = ? AND slugger.id = visit.slug_id" + 
                                "GROUP BY YEAR(visit.timestamp), MONTH(visit.timestamp), DAY(visit.timestamp)",
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
