import axios, { AxiosPromise } from 'axios';
import { UserProps } from './User';

// http://localhost:3000/users

// then((response: AxiosResponse): void => {
//   this.set(response.data);
//   console.log('checking resopnse data: ', response.data);
// });

export class Sync {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`);
  }

  save(data: UserProps): AxiosPromise {
    const { id } = data;

    if (id) {
      return axios.put(`${this.rootUrl}/${id}`, data);
    } else {
      return axios.post('${this.rootUrl}', data);
    }
  }
}
