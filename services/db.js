const knexFile = require('../knexfile')

const pg = require('knex')(knexFile[process.env.NODE_ENV])
  
module.exports = pg