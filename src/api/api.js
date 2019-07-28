import axios from 'axios'

// Django rest api url in localhost
const ROOT_URL = 'http://localhost:8000/api/v1/'

export default {

    getListMuseum() {
        return axios.get(`${ROOT_URL}museum/`)
    },

    getDetailMuseum(pk) {
        return axios.get(`${ROOT_URL}museum/${pk}`)
    }

}