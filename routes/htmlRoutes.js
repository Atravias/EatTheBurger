const connection = require('../config/connection')

module.exports = function (app) {
    // Root get route
    app.get("/", function (req, res) {
        connection.query("SELECT id, name, devoured FROM burgers;", function (err, data) {
            if (err) throw err;

            // Test it
            console.log('The solution is: ', data);

            // Test it
            // return res.send(data);

            res.render("index", { burgers: data });
        });
    });
}