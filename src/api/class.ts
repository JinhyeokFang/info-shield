import axios, { AxiosResponse } from 'axios';

class ClassApi {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/class'
    });

    getMyClass (): Promise<AxiosResponse> {
        return this.httpRequest.get('/', {withCredentials: true});
    }

    getClassInfo (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}`, {withCredentials: true});
    }

    getClassProblems (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}/prob`, {withCredentials: true});
    }

    getClasses (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/list`, {withCredentials: true});
    }
}

export default new ClassApi();