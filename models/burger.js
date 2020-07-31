var orm = require('../config/orm.js');

var burger = {
  selectAll: (cb) => {
    orm.selectAll('burgers', (res) => {
      cb(res);
    });
  },

  insertOne: (cols, vals, cb) => {
    orm.insertOne('burgers', cols, vals, (res) => {
      cb(res);
    });
  },
  updateOne: (objColVals, condition, cb) => {
    orm.updateOne('burgers', objColVals, condition, (res) => {
      cb(res);
    });
  },
  deleteOne: (condition, cb) => {
    orm.deleteOne('burgers', condition, (res) => {
      cb(res);
    });
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
