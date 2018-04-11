import axios from 'axios';

export class Axios {

  static axiosInstance;

  static getInstance() {
    return this.axiosInstance ? this.axiosInstance : this.createInstance();
  }

  static createInstance() {
    return this.axiosInstance = axios.create({
      baseURL: '/api/v1',
      timeout: 1000
    });
  }
}
