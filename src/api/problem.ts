import axios, { AxiosResponse } from 'axios';

class ProblemAPI {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/prob',
        withCredentials: true
    });

    getProblem (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}`);
    }
}

export default new ProblemAPI();