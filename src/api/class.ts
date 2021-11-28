import axios, { AxiosResponse } from 'axios';

class ClassApi {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/class',
        withCredentials: true
    });

    getClass (): Promise<AxiosResponse> {
        return this.httpRequest.get('/');
    }

    getClassInfo (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}`);
    }

    getClassProblems (id: number): Promise<AxiosResponse> {
        return this.httpRequest.get(`/${id}/prob`);
    }

    getClasses (): Promise<AxiosResponse> {
        return this.httpRequest.get(`/list`);
    }

    getMyClass (): Promise<AxiosResponse> {
        return this.httpRequest.get('/myclass');
    }
}

export default new ClassApi();