var mysql=require('mysql');

var connection=mysql.createPool({
    host: "localhost",
    user: "api",
    password: "~EasyD0351t",
    database: "url_slug"
});

module.exports=connection;