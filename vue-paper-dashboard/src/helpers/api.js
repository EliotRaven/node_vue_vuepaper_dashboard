import axios from 'axios'

class API {
    call(method, uri, params, data){
        let url = `http://localhost:4000/${uri}`

        let headers = {
            'Content-Type': 'application/json',
            'Accept': '*/*'
        }
        return axios({
            method,
            url,
            params: { ...params},
            headers,
            data: {...data}
        })
    }
}

export default new API()