const connection = require('../config/connection')

module.exports = function (app) {

    app.post("/api/burger", function (req, res) {
        connection.query("INSERT INTO burgers (name) VALUES (?)", [req.body.name], function (err, result) {
            if (err) throw err;
            console.log(result)

            res.redirect("/");
        });

    });

    app.put('/api/burger/:id', function (req, res) {
        console.log(req.params.id)

        let SQL = "UPDATE burgers ";
        SQL += "SET devoured = ? "
        SQL += "WHERE id = ?"

        let data = [req.body.devoured, req.params.id]

        connection.query(SQL, data, function (err, result) {
            if (err) throw err;
            console.log(result);

            res.json(result)
        })
    })
}