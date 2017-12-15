var util = require('util');

module.exports = function (restClient) {
    var module = {};

    module.list = function (searchCriteria) {
        var query = 'searchCriteria=' + searchCriteria;
        var endpointUrl = util.format('/products?%s', query);
        return restClient.get(endpointUrl);
    }

    module.create = function (productAttributes) {
        return restClient.post('/products', productAttributes);
    }

    module.update = function (productSku, productAttributes) {
        var endpointUrl = util.format('/products/%s', productSku);
        return restClient.put(endpointUrl, productAttributes);
    }

    module.delete = function (productSku) {
        var endpointUrl = util.format('/products/%s', productSku);
        return restClient.delete(endpointUrl);
    }

    return module;
}

