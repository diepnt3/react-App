import axios from 'axios';
export default class SeviceCommunication {
    static async axiosRequest({method = 'get', url, data, timeout = 3000}) {
        try {
            const response = await axios({
                method,
                url,
                data,
                timeout
            })
            return response;
        } catch (error) {
            return {
                data: {},
            }
        }
    }
    static getMovies() {
        return this.axiosRequest({
            method: 'GET', 
            url: "https://ion-movies.herokuapp.com/"
        })
    }
}