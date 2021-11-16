import axios, { AxiosResponse } from 'axios';

class AuthApi {
    private httpRequest = axios.create({
        baseURL: '' 
    });

    login (email: string, password: string): Promise<AxiosResponse> {
        return this.httpRequest.post('/login', { email, password });
    }
}

export default new AuthApi();