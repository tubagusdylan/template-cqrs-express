require("dotenv").config();
const confidence = require("confidence");

const config = {
  host: process.env.APP_HOST,
  env: process.env.APP_ENV,
  port: process.env.APP_PORT,
  monitoring: process.env.MONITORING || 0,
  cors: {
    origins: process.env.CORS_ORIGINS,
  },
  postgresqlUrl: process.env.POSTGRESQL_URL || "postgresql://postgres:postgres@localhost:5432/sample",
  
  jwt:{
    accessSign: process.env.ACCESS_SIGN_OPTIONS,
    refreshSign: process.env.REFRESH_SIGN_OPTIONS,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET,
  }
};

const store = new confidence.Store(config);

exports.get = (key) => store.get(key);
