import axios from 'axios'

class InitAxios {
    constructor() {
        this.api = axios.create({
            baseURL: `https://imdb-api.com/en/API/`
        })
    }
}

export default InitAxios