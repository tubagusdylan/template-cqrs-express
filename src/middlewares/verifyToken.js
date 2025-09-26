const {UnauthorizedError, ForbiddenError} = require("../helpers/errors");
const { sendResponse } = require("../helpers/utils/response");
const jwt = require("jsonwebtoken");
const wrapper = require("../helpers/utils/wrapper");
const config = require("../config/global_config");

const verifyToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token){
        return sendResponse(wrapper.error(new UnauthorizedError("User Unauthorized")), res);
    }

   jwt.verify(token, config.get("/accessTokenSecret"), (err, decoded) => {
    if (err) {
        return sendResponse(wrapper.error(new ForbiddenError("Token Expired")), res);
    }
    next();
   })

}

module.exports = verifyToken;