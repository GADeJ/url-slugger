var connection = require("../../database/mysql");

// Model has a one to many relationship with the slugger table

// TODO: Deal with SQL injection
var Visit = {

    logVisit: (slug_id, ipv4, callback) => {
        return connection.query("INSERT INTO visit (slug_id, ipv4) VALUES (?, ?)",
                                [slug_id, ipv4], callback);
    },

    // Last 60 days of frequency of visits
    fetchStatsByDay: (slug, callback) => {
        return connection.query("SELECT YEAR(visit.timestamp) AS year, " +
                                        "MONTH(visit.timestamp) AS month, " +
                                        "DAY(visit.timestamp) AS day, " +
                                        "COUNT(visit.id) AS count " +
                                "FROM slugger, visit " +
                                "WHERE slugger.slug = ? AND slugger.id = visit.slug_id " +
                                "GROUP BY YEAR(visit.timestamp), MONTH(visit.timestamp), DAY(visit.timestamp) " +
                                "LIMIT 60",
                                [slug], callback);
    },

    fetchInfo: (slug, callback) => {
        return connection.query("SELECT slugger.slug AS slug, " +
                                "slugger.url AS url, " +
                                "slugger.timestamp AS created, " +
                                "COUNT(visit.id) AS count " +
                                "FROM slugger, visit " +
                                "WHERE slugger.slug = ? AND slugger.id = visit.slug_id",
                                [slug], callback);
    }

};

module.exports = Visit;
