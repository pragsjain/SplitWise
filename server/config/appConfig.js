let appConfig = {};

appConfig.port = 5000;
appConfig.allowedCorsOrigin = "*";
appConfig.env = "dev";
appConfig.db = {
    uri: 'mongodb://127.0.0.1:27017/splitwiseDb'
  }
appConfig.apiVersion = '/api/v1';
//appConfig.url='http://localhost:4200/';
appConfig.url='http://52.66.252.216:5001/';


module.exports = {
    port: appConfig.port,
    allowedCorsOrigin: appConfig.allowedCorsOrigin,
    environment: appConfig.env,
    db :appConfig.db,
    apiVersion : appConfig.apiVersion,
    url: appConfig.url
};