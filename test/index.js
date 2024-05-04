const requestTester = require('supertest')

const request = requestTester('http://localhost:3080')

module.exports = {
  request
}
