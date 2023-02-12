import InitAxios from "./init.axios"

class FilmsAxios extends InitAxios {
    constructor() {
        super()
    }

    printURl() {
        console.log("AQUI IRIA LA API URL", this.api)
    }

    getOneFilm(id) {
        return this.api.get(`Title/k_0bm7384g/${id}`).then(({ data }) => data)
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new FilmsAxios()
        }
        return this.instance
    }
}


export default FilmsAxios.getInstance()