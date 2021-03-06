import axios from 'axios';

class Services {

    postApi(url, token, body){
        return axios({
            method: "post",
            url: `http://localhost:3002/v1${url}`,
            data: body,
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((json) => {
            if(json.data.success){
                return json.data
            }

            throw new Error(json.data.message)
        });
    }

    getApi(url, token){
        return axios({
            method: 'get',
            url: `http://localhost:3002/v1${url}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((json) => {
            if(json.data.success){
                return json.data
            }

            throw new Error(json.data.message)
        });
    }

    deletApi(url, token){
        return axios({
            method: 'delete',
            url: `http://localhost:3002/v1${url}`,
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then((json) => {
            if(json.data.success){
                return json.data
            }

            throw new Error(json.data.message)
        });
    }
}

export const service = new Services();
