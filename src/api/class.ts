import axios, { AxiosResponse } from 'axios';

class ClassApi {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/class'
    });

    getMyClass (): Promise<AxiosResponse> {
        return this.httpRequest.get('/');
    }

    getClassInfo (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}`);
    }

    getClassProblems (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}/prob`);
    }

    getClasses (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/list`);
    }
}

export default new ClassApi();