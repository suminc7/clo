import axios from 'axios'

axios.defaults.baseURL = '/api/v1'
axios.defaults.headers.common['Content-Type'] = 'application/json'
