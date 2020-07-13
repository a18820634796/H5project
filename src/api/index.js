var baseUrl = 'http://localhost:3000'

const axios = require('axios')

exports.login = function(params) {
    return axios.post(`${baseUrl}/login`, params)
}