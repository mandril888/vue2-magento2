
let config = require('../src/config.json');
let kue = require('kue');
let queue = kue.createQueue(config.kue);

let es = require('elasticsearch')
let client = new es.Client({
  host: config.esHost,
  log: 'debug',
  apiVersion: '5.5',
  requestTimeout: 5000
})

exports.db = client        
exports.queue = queue
