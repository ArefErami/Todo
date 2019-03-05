const rewireMobx = require ('react-app-rewire-mobx');

module.exports = function override (config, env){
    config = rewireMobx(config, env);
    return config;
}