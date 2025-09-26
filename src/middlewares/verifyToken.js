const {UnauthorizedError, ForbiddenError} = require("../helpers/errors");
const { sendResponse } = require("../helpers/utils/response");
const { getToken, verifyAccessToken } = require("../helpers/auth/jwt_helper");
const { ERROR } = require("../helpers/http-status/status_code");
const wrapper = require("../helpers/utils/wrapper");

const verifyToken = async (req, res, next) => {
    const result = {err: null, data: null};
    const token = getToken(req.headers["authorization"]);
    
    if(!token){
        result.err = new UnauthorizedError("User Unauthorized");
        return wrapper.response(res, 'fail', result, "Invalid", ERROR.UNAUTHORIZED);
    }

    const checkedToken = await verifyAccessToken(token);
    if (checkedToken.err) {
        return sendResponse(checkedToken, res, ERROR.FORBIDDEN);
    }

    req.userMeta = checkedToken.data;
    
    next();

}

module.exports = verifyToken;