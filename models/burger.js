const orm = require("../config/orm");

const burger = {

    selectAll: cb => {

        orm.selectAll("burgers", res => {
            cb(res);
        });
    },

    insertOne: (newBurger, cb) => {

        orm.insertOne("burgers", newBurger, res => {
            cb(res);
        });
    },

    updateOne: (updateBurger, condition, cb) => {

        orm.updateOne("burgers", updateBurger, condition, (res) => {
            cb(res);
        });
    },

    deleteOne: (condition, cb) => {

        orm.deleteOne("burgers", condition, res => {
            cb(res);
        });
    }
};

module.exports = burger;