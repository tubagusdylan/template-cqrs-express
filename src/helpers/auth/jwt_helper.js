const jwt = require("jsonwebtoken");
const wrapper = require("../helpers/utils/wrapper");
const config = require("../config/global_config");

const signOptions = config.get("/jwt/accessSign");
const refreshOptions = config.get("/jwt/refreshSign");
const accessSecret = config.get("/jwt/accessTokenSecret");
const refreshSecret = config.get("/jwt/refreshTokenSecret");

const getToken = (authHeader) => {
    const token = authHeader && authHeader.split(" ")[1];
    return token;
}

const generateAccessToken = async(payload) => {
    return jwt.sign(payload, accessSecret, signOptions);
}

const generateRefreshToken = async(payload) => {
    return jwt.sign(payload, refreshSecret, refreshOptions);
}

const verifyAccessToken = async(token) => {
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, accessSecret, signOptions);
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            return wrapper.error(new ForbiddenError("Token Expired"));
        }
        return wrapper.error(new ForbiddenError("Token is not valid"));
    }

    return wrapper.data(decodedToken);
}

const verifyRefreshToken = async(token) => {
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, refreshSecret, refreshOptions);
    } catch (error) {
        if(error instanceof jwt.TokenExpiredError){
            return wrapper.error(new ForbiddenError("Refresh Token Expired"));
        }
        return wrapper.error(new ForbiddenError("Refresh Token is not valid"));
    }

    return wrapper.data(decodedToken);
}

module.exports = {
    getToken,
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken
}