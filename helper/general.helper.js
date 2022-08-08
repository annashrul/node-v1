
const jwt = require('jsonwebtoken');




exports.generateToken = (id)=> {
    return jwt.sign({
            userId: id
        },
        "secret_key"
    );
};

exports.resJson = () => {
    return {
        error: false,
        message: "Role added successfully!",
        data: result,
    }
};