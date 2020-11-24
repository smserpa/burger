const connection = require("./connection.js");

const orm = {

    selectAll: (table, cb) => {
        
        const queryString = "SELECT * FROM ??";
        connection.query(queryString, [table], (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    insertOne: (table, newRowData, cb) => {

        const queryString = "INSERT INTO ?? SET ?";
        const values = [table, newRowData];

        connection.query(queryString, values, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    updateOne: (table, updateValues, condition, cb) => {

        const queryString = "UPDATE ?? SET ? WHERE ? LIMIT 1";
        const values = [table, updateValues, condition];

        connection.query(queryString, values, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },

    deleteOne: (table, condition, cb) => {

        const queryString = "DELETE FROM ?? WHERE ? LIMIT 1";
        const values = [table, condition];

        connection.query(queryString, values, (err, data) => {
            if (err) {
                throw err;
            }
            cb(data);
        });
    },
};

module.exports = orm;