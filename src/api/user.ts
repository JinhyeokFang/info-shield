import axios, { AxiosResponse } from 'axios';

class UserApi {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/'
    });

    logout (): Promise<AxiosResponse> {
        return this.httpRequest.get('/logout');
    }

    signin (id: string, password: string): Promise<AxiosResponse> {
        return this.httpRequest.post('/signin', { id, pw: password });
    }

    signup (id: string, password: string, name: string): Promise<AxiosResponse> {
        return this.httpRequest.post('/signin', { id, pw: password, name });
    }

    getInfo (): Promise<AxiosResponse> {
        return this.httpRequest.get('/user/info');
    }
}

export default new AuthApi();