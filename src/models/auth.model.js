"user strict";
const dbConn = require("./../../config/db.config");

const Auth = function (user) {
    this.email = user.email;
    this.password = user.password;
};



Auth.login =  (val, result)=> {
    dbConn.query(
        `Select * from users where email = ?`,val,(err, res) => {
            if (err) {
                result(err, null);
            } else {
                result(null, res);
            }
        }
    );
};



module.exports = Auth;
