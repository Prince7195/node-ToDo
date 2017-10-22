var configValues = require('./config');

module.exports = {

    getDBConnectionString: function() {
        return `mongodb://${configValues.uname}:${configValues.pwd}@ds025439.mlab.com:25439/nodetodo`
    }

}