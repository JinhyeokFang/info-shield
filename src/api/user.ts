import axios, { AxiosResponse } from 'axios';

class UserApi {
    private httpRequest = axios.create({
        baseURL: 'http://118.67.133.248:11111/',
        withCredentials: true
    });

    logout (): Promise<AxiosResponse> {
        return this.httpRequest.get('/logout');
    }

    signin (id: string, password: string): Promise<AxiosResponse> {
        const formdata = new FormData();
        formdata.append('id', id);
        formdata.append('pw', password);
        return this.httpRequest.post('/signin', formdata);
    }

    signup (id: string, password: string, name: string): Promise<AxiosResponse> {
        const formdata = new FormData();
        formdata.append('id', id);
        formdata.append('pw', password);
        formdata.append('name', name);
        return this.httpRequest.post('/signup', formdata);
    }

    getInfo (): Promise<AxiosResponse> {
        return this.httpRequest.get('/user/info');
    }
}

export default new UserApi();